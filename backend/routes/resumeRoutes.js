const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadResume } = require("../controllers/resumeController");
const auth = require("../middlewares/auth");

// Multer storage setup (memory storage for hash generation)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route: Upload Resume (Authenticated Users Only)
router.post("/upload", auth, upload.single("resume"), uploadResume);

module.exports = router;
