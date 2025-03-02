const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Define upload folder path
const uploadPath = path.join(__dirname, "../uploads");

// Ensure uploads directory exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileType = file.mimetype.startsWith("image/") ? "images" : "pdfs";
        const finalPath = path.join(uploadPath, fileType);

        // Ensure subdirectory (images/pdfs) exists
        if (!fs.existsSync(finalPath)) {
            fs.mkdirSync(finalPath, { recursive: true });
        }

        cb(null, finalPath); // Set storage path
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

// File Filter (Accept Images & PDFs)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
        cb(null, true); // Accept file
    } else {
        cb(new Error("Only image and PDF files are allowed!"), false);
    }
};

// Upload Middleware
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 100 * 1024 * 1024, // Limit file size to 100MB
    },
});

// Error Handling Middleware
const multerErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: `Multer Error: ${err.message}` });
    } else if (err) {
        return res.status(400).json({ message: err.message });
    }
    next();
};

module.exports = { upload, multerErrorHandler };