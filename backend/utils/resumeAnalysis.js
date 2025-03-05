const { spawn } = require("child_process");

async function analyzeResumeWithSolo(resumeText) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", ["backend/utils/resume_analysis.py", resumeText]);

    pythonProcess.stdout.on("data", (data) => {
      resolve(JSON.parse(data.toString()));
    });

    pythonProcess.stderr.on("data", (data) => {
      reject(`Error: ${data}`);
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        reject("Python process failed");
      }
    });
  });
}

module.exports = { analyzeResumeWithSolo };
