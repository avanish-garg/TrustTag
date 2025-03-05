const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

async function analyzeResumeWithSolo(fileBuffer, fileExtension) {
  return new Promise((resolve, reject) => {
    // Save the file buffer to a temporary file
    const tempFilePath = path.join(__dirname, `temp_resume.${fileExtension}`);
    fs.writeFileSync(tempFilePath, fileBuffer);

    console.log("✅ Temporary resume file saved:", tempFilePath);

    // Spawn the Python process
    const pythonProcess = spawn("python", [path.join(__dirname, "resume_analysis.py"), tempFilePath]);

    let result = "";
    pythonProcess.stdout.on("data", (data) => {
      console.log("Python stdout:", data.toString());
      result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python stderr:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      // Delete the temporary file
      fs.unlinkSync(tempFilePath);

      if (code !== 0) {
        reject("Python process failed");
      } else {
        // Return the raw response from Solo AI
        resolve(result);
      }
    });
  });
}

module.exports = { analyzeResumeWithSolo };