const User = require("../models/User");

// ✅ Update User Role (Admin Only)
const updateUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;

    if (!userId || !newRole) {
      return res.status(400).json({ error: "User ID and new role are required" });
    }

    const user = await User.findByIdAndUpdate(userId, { role: newRole }, { new: true }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User role updated successfully", user });
  } catch (error) {
    console.error("❌ Error updating user role:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update User Profile (Student Only)
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true }).select("-password");

    res.status(200).json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    console.error("❌ Error updating profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get Student Profile (Student Only)
const getStudentProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error fetching student profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateUserRole, updateProfile, getStudentProfile };