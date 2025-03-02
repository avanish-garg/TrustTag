const crypto = require("crypto");
const Resume = require("../models/Resume");
const { storeResumeHash } = require("../utils/web3");

// Function to generate SHA256 hash
function generateHash(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

// Upload Resume Function
exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Generate hash of uploaded file
    const fileBuffer = req.file.buffer;
    const resumeHash = generateHash(fileBuffer);

    // Store hash in MongoDB
    const newResume = new Resume({
      user: req.user.id,
      resumeHash: resumeHash,
    });

    await newResume.save();

    // Send hash to blockchain
    const transactionHash = await storeResumeHash(req.user.address, resumeHash);

    res.status(201).json({
      message: "Resume uploaded successfully",
      resumeHash,
      transactionHash,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
