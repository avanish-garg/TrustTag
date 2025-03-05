const express = require("express");
const router = express.Router();
const multer = require("multer");
const resumeController = require("../controllers/resumeController");
const { authenticateStudent, authenticateEmployer } = require("../middlewares/auth");

// Multer storage setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route: Upload Resume (Authenticated Students Only)
router.post("/upload", authenticateStudent, upload.single("resume"), resumeController.uploadResume);

// Route: Verify Resume (For Employers Only)
router.post("/verify", authenticateEmployer, resumeController.verifyResume);

module.exports = router;
