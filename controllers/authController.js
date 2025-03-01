// const bcrypt = require("bcryptjs"); // Fixed bcrypt import
// const jwt = require("jsonwebtoken");
// const User = require("../models/User"); // Fixed import

// // ✅ Register User Function
// const register = async (req, res) => {
//   try {
//     console.log("🔹 Register API Called");
//     console.log("Request Body:", req.body);

//     const { name, email, username, password, role } = req.body;

//     if (!name || !email || !username || !password || !role) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if email or username already exists
//     const existingUser = await User.findOne({ 
//       $or: [{ email }, { username }] 
//     });

//     if (existingUser) {
//       return res.status(400).json({ error: "Email or Username already exists" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     console.log("✅ Password Hashed Successfully");

//     // Create new user
//     const newUser = new User({
//       name,
//       email,
//       username, // ✅ Added username field
//       password: hashedPassword,
//       role,
//     });

//     await newUser.save();
//     console.log("✅ User Registered Successfully");

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(400).json({ error: "Email or Username already exists" });
//     }
//     console.error("❌ Error registering user:", error.message);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// };

// // ✅ Login User Function
// const login = async (req, res) => {
//   try {
//     console.log("🔹 Login API Called");
//     console.log("Request Body:", req.body);

//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("✅ Login Successful");
//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error("❌ Error logging in:", error.message);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// };

// const getProfile = async (req, res) => {
//   try {
//     console.log("🔹 Profile API Called");

//     const userId = req.user.id; // Extracted from token in middleware
//     const user = await User.findById(userId).select("-password"); // Exclude password

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     console.log("✅ Profile Fetched Successfully");
//     res.status(200).json(user);
//   } catch (error) {
//     console.error("❌ Error fetching profile:", error.message);
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// };

// // ✅ Export the functions
// module.exports = { register, login, getProfile };


// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   try {
//     console.log("🔹 Auth Middleware Called");

//     const token = req.header("Authorization");
//     if (!token) {
//       return res.status(401).json({ error: "Access Denied. No token provided." });
//     }

//     // Extract token from "Bearer <token>"
//     const extractedToken = token.startsWith("Bearer ") ? token.slice(7) : token;

//     // Verify token
//     const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info to request

//     console.log("✅ Token Verified Successfully", decoded);
//     next(); // Proceed to the next middleware/controller
//   } catch (error) {
//     console.error("❌ Authentication Error:", error.message);
//     return res.status(401).json({ error: "Invalid or expired token", details: error.message });
//   }
// };

// // ✅ Middleware for Role-Based Access Control
// const roleMiddleware = (roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ error: "Access Denied. Insufficient permissions." });
//     }
//     next();
//   };
// };

// module.exports = { authMiddleware, roleMiddleware };


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// ✅ Register User Function
const register = async (req, res) => {
  try {
    console.log("🔹 Register API Called");
    console.log("Request Body:", req.body);

    const { name, email, username, password, role } = req.body;

    if (!name || !email || !username || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email or username already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email or Username already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("✅ Password Hashed Successfully");

    // Create new user
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    console.log("✅ User Registered Successfully");

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Error registering user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Login User Function
const login = async (req, res) => {
  try {
    console.log("🔹 Login API Called");

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("❌ Error logging in:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get User Profile
const getProfile = async (req, res) => {
  try {
    console.log("🔹 Profile API Called");

    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error fetching profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update User Profile
const updateProfile = async (req, res) => {
  try {
    console.log("🔹 Update Profile API Called");

    const userId = req.user.id;
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true }).select("-password");

    res.status(200).json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("❌ Error updating profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { register, login, getProfile, updateProfile };
