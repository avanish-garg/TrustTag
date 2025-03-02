const express = require("express");
const router = express.Router();
const { uploadFile } = require("../controllers/uploadController"); 
const { upload, multerErrorHandler } = require("../utils/multer");

router.post(
    "/upload",
    (req, res, next) => {
        console.log("Headers:", req.headers);
        console.log("Body:", req.body);
        next();
    },
    upload.single("file"), // Accept both images and docs
    (req, res, next) => {
        console.log("File after multer:", req.file);
        next();
    },
    multerErrorHandler,
    uploadFile
);

module.exports = router;