const File = require("../models/File");

const uploadFile = async (req, res) => {
    try {
        console.log("Inside uploadFile controller");
        console.log("Uploaded file data:", req.file);

        if (!req.file) {
            console.log("No file uploaded");
            return res.status(400).json({ error: true, message: "No file uploaded" });
        }

        const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;

        // Save file details to MongoDB
        const newFile = new File({
            filename: req.file.filename,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            fileUrl
        });

        await newFile.save();

        console.log("File saved to database:", newFile);

        res.status(201).json({ fileUrl, message: "File uploaded successfully!" });
    } catch (error) {
        console.error("Error in uploadFile controller:", error);
        res.status(500).json({ error: true, message: error.message });
    }
};

module.exports = { uploadFile };