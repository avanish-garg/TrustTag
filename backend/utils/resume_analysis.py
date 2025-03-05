import requests
import sys

def analyze_resume_with_solo(resume_text):
    url = "http://localhost:5000/analyze_resume"  # Assuming Solo Server is running locally
    headers = {
        "Content-Type": "application/json"
    }
    data = {
        "resume_text": resume_text
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Process the returned result
    else:
        raise Exception(f"Error: {response.text}")


if __name__ == "__main__":
    resume_file_path = sys.argv[1]  # Path to the resume file
    with open(resume_file_path, "r") as file:
        resume_text = file.read()
        
    result = analyze_resume_with_solo(resume_text)
    print(result)  # Print the result for debugging
