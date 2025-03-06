const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
const app = express();

// ✅ Connect to MongoDB Before Starting the Server
connectDB()
  .then(() => {
    console.log("✅ Database connected successfully");

    // ✅ Middleware
    app.use(express.json({ limit: "10mb" }));
    app.use(express.urlencoded({ extended: true, limit: "10mb" }));
    app.use(cors());
    app.use(morgan("dev"));

    // ✅ API Routes
    app.use("/api/auth", require("./routes/authRoutes"));
    app.use("/api/user", require("./routes/userRoutes")); // Add this line
    app.use("/api/resumes", require("./routes/resumeRoutes"));
    app.use("/api/blockchain", require("./routes/blockchainRoutes"));
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    // ✅ Default Route
    app.get("/", (req, res) => {
      res.send("🚀 Decentralized Resume Verification API is running...");
    });

    // ✅ Global Error Handler
    app.use((err, req, res, next) => {
      console.error("❌ Error:", err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    });

    // ✅ Start Server After DB Connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });