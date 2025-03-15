const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// ✅ Register User Route
router.post("/register", authController.register);

// ✅ Login User Route
router.post("/login", authController.login);

// ✅ Get User Profile Route (Protected)
router.get("/profile", authController.getProfile);

// ✅ Update User Profile Route (Protected)
router.put("/profile", authController.updateProfile);

module.exports = router;