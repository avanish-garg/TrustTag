import sys
import requests
import json
from PyPDF2 import PdfReader  # For PDF files
from docx import Document  # For DOCX files

def extract_text(file_path):
    if file_path.endswith(".pdf"):
        # Extract text from PDF
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        return text
    elif file_path.endswith(".docx"):
        # Extract text from DOCX
        doc = Document(file_path)
        text = ""
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
        return text
    else:
        raise Exception("Unsupported file format. Only PDF and DOCX are supported.")

def clean_response(response_text):
    try:
        # Parse the JSON response
        response_json = json.loads(response_text)
        output = response_json.get("output", "")

        # Remove random numbers and placeholders
        cleaned_text = " ".join(word for word in output.split() if not word.startswith("Avan_"))

        # Format into paragraphs or bullet points
        cleaned_text = cleaned_text.replace("\\n", "\n")  # Replace escaped newlines with actual newlines
        return cleaned_text
    except Exception as e:
        print(f"❌ Error cleaning response: {e}", file=sys.stderr)
        return response_text  # Return the original response if cleaning fails

def send_to_solo(text):
    url = "http://localhost:5070/predict"  # Solo AI server endpoint
    headers = {"Content-Type": "application/json"}

    # Define a custom prompt for resume analysis
    prompt = f"""
    Analyze the following resume and provide a detailed summary in the following format:
    1. **Skills**: List the key skills mentioned in the resume.
    2. **Education**: Summarize the educational qualifications.
    3. **Experience**: Summarize the work experience.
    4. **Projects**: List any notable projects.
    5. **Achievements**: Highlight any achievements or certifications.

    Resume Text:
    {text}
    """

    # Send the prompt to Solo AI
    data = {
        "prompt": prompt  # Send the custom prompt
    }

    print("✅ Sending text to Solo AI...", file=sys.stderr)
    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("✅ Solo AI response:", response.text, file=sys.stderr)
        return clean_response(response.text)  # Clean the response before returning
    else:
        raise Exception(f"Error: {response.text}")

if __name__ == "__main__":
    # Get the resume file path from command-line arguments
    if len(sys.argv) < 2:
        print("❌ Error: Resume file path is required.", file=sys.stderr)
        sys.exit(1)

    resume_file_path = sys.argv[1]
    print("✅ Analyzing resume:", resume_file_path, file=sys.stderr)

    try:
        # Extract text from the resume
        text = extract_text(resume_file_path)
        print("✅ Extracted text:", text, file=sys.stderr)

        # Send text to Solo AI
        result = send_to_solo(text)

        # Print the cleaned response
        print(result)
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)