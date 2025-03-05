import sys
import requests
import json

def analyze_resume_with_solo(file_path):
    url = "http://localhost:5070/predict"  # Solo AI server endpoint
    headers = {"Content-Type": "application/json"}

    # Read the resume file
    with open(file_path, "rb") as file:
        file_content = file.read()
        print(file_content)

    # Send the file content to Solo AI
    data = {
        "file_content": file_content.hex(),  # Convert binary to hex for JSON compatibility
        "prompt": "analyze_resume"
    }

    print("✅ Sending resume to Solo AI...", file=sys.stderr)
    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("✅ Solo AI response:", response.json(), file=sys.stderr)
        return response.json()  # Return the JSON response directly
    else:
        raise Exception(f"Error: {response.text}")

if __name__ == "__main__":
    # Set stdout and stderr encoding to utf-8
    import sys
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

    # Get the resume file path from command-line arguments
    if len(sys.argv) < 2:
        print("❌ Error: Resume file path is required.", file=sys.stderr)
        sys.exit(1)

    resume_file_path = sys.argv[1]
    print("✅ Analyzing resume:", resume_file_path, file=sys.stderr)

    try:
        # Analyze the resume with Solo AI
        result = analyze_resume_with_solo(resume_file_path)

        # Print the result as a JSON string
        print(json.dumps(result))
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)