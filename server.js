const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api", require("./routes/uploadRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Default Route
app.get("/", (req, res) => {
  res.send("Decentralized Resume Verification API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});





// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const morgan = require("morgan");
// const connectDB = require("./config/db");

// dotenv.config();
// const app = express();

// // ✅ Connect to MongoDB Before Starting the Server
// connectDB()
//   .then(() => {
//     console.log("✅ Database connected successfully");

//     // ✅ Middleware
//     app.use(express.json({ limit: "10mb" })); // Parse JSON requests
//     app.use(express.urlencoded({ extended: true , limit: "10mb"})); // Parse URL-encoded data
//     app.use(cors()); // Enable CORS
//     app.use(morgan("dev")); // Enable request logging

//     // ✅ API Routes
//     app.use("/api/auth", require("./routes/authRoutes"));
//     app.use("/api/user", require("./routes/userRoutes"));
//     app.use("/api/resume", require("./routes/uploadRoutes")); // 🔹 Resume Upload API
//     app.use("/api/verification", require("./routes/verificationRoutes")); // 🔹 Verification API

//     // ✅ Default Route
//     app.get("/", (req, res) => {
//       res.send("🚀 Decentralized Resume Verification API is running...");
//     });

//     // ✅ Global Error Handler
//     app.use((err, req, res, next) => {
//       console.error("❌ Error:", err);
//       res.status(500).json({ message: "Internal Server Error", error: err.message });
//     });

//     // ✅ Start Server After DB Connection
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });

//   })
//   .catch((err) => {
//     console.error("❌ Database connection failed:", err);
//     process.exit(1); // Exit the app if DB connection fails
//   });
