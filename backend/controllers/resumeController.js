const crypto = require("crypto");
const Resume = require("../models/Resume");
const { storeResumeHash } = require("../utils/web3");

// Function to generate SHA256 hash
function generateHash(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

// ✅ Upload Resume Function
exports.uploadResume = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileBuffer = req.file.buffer;
    const resumeHash = generateHash(fileBuffer);

    const newResume = new Resume({
      user: req.user.id,
      resumeHash: resumeHash,
    });

    await newResume.save();

    if (!req.user.address) {
      return res.status(400).json({ message: "User has no blockchain address linked." });
    }

    const transactionHash = await storeResumeHash(req.user.address, resumeHash);

    res.status(201).json({
      message: "Resume uploaded successfully",
      resumeHash,
      transactionHash,
    });
  } catch (error) {
    console.error("❌ Error uploading resume:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// ✅ Verify Resume Function
exports.verifyResume = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "employer") {
      return res.status(403).json({ message: "Forbidden: Only employers can verify resumes." });
    }

    const { studentAddress, resumeHash } = req.body;
    if (!studentAddress || !resumeHash) {
      return res.status(400).json({ message: "Missing student address or resume hash." });
    }

    res.status(200).json({ message: "Resume verified successfully" });
  } catch (error) {
    console.error("❌ Error verifying resume:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};