const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ✅ Register User Function
const register = async (req, res) => {
  try {
    const { name, email, username, password, role, address } = req.body;

    // Validate required fields
    if (!name || !email || !username || !password || !role || !address) {
      return res.status(400).json({ error: "All fields are required, including blockchain address." });
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

    // Create new user with blockchain address
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      role,
      address, // Add blockchain address
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Error registering user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Login User Function
const login = async (req, res) => {
  try {
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

    // Ensure JWT_SECRET is loaded
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in .env");
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
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Unauthorized. No user ID found." });
    }

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// ✅ Update User Profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, address } = req.body; // Allow updating blockchain address

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, address }, // Update blockchain address
      { new: true }
    ).select("-password");

    res.status(200).json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("❌ Error updating profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { register, login, getProfile, updateProfile };