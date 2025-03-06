const crypto = require("crypto");
const Resume = require("../models/Resume");
const User = require("../models/User");
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

    // Check if user has a blockchain address
    if (!req.user.address) {
      return res.status(400).json({ message: "User has no blockchain address linked." });
    }

    // Send hash to blockchain
    const transactionHash = await storeResumeHash(req.user.address, resumeHash);

    res.status(201).json({
      message: "Resume uploaded successfully",
      resumeHash,
      transactionHash, // Now this will be the actual transaction hash
    });
  } catch (error) {
    console.error("❌ Error uploading resume:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
//fetch resume
// exports.getVerificationRequests = async (req, res) => {
//   try {
//     // Fetch all resumes along with user details
//     const requests = await Resume.find().populate("user", "name");

//     res.json(requests);
//   } catch (error) {
//     console.error("❌ Error fetching verification requests:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
exports.getVerificationRequests = async (req, res) => {
  try {
    // Fetch resumes where resumeHash exists and populate user details
    const requests = await Resume.find({ resumeHash: { $exists: true, $ne: "" } })
      .populate("user", "name address");

    // Format requests and remove duplicates based on studentAddress
    const formattedRequests = Array.from(
      new Map(
        requests
          .filter(req => req.user && req.user.address) // Ensure user data exists
          .map(req => [req.user.address, {
            studentAddress: req.user.address,  // Blockchain address
            resumeHash: req.resumeHash,  // Resume hash
            studentName: req.user.name,  // Student's name
          }])
      ).values()
    );

    res.json(formattedRequests);
  } catch (error) {
    console.error("❌ Error fetching verification requests:", error);
    res.status(500).json({ message: "Internal Server Error" });
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

    // Verify the resume on the blockchain
    const transactionHash = await storeResumeHash(studentAddress, resumeHash);

    res.status(200).json({ message: "Resume verified successfully", transactionHash });
  } catch (error) {
    console.error("❌ Error verifying resume:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
