const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadResume, verifyResume } = require("../controllers/resumeController"); // ✅ Fixed Import
const auth = require("../middlewares/auth");

// ✅ Multer storage setup (memory storage for hash generation)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ Route: Upload Resume (Authenticated Users Only)
router.post("/upload", auth, upload.single("resume"), uploadResume);

// ✅ Route: Verify Resume (For Employers)
router.post("/verify", auth, verifyResume);

module.exports = router;
