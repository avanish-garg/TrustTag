// const User = require("../models/User");

// exports.getStudentProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching user profile" });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true }).select("-password");
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: "Error updating profile" });
//   }
// };


const User = require("../models/User");

// ✅ Admin Can Update User Roles
const updateUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;

    if (!userId || !newRole) {
      return res.status(400).json({ error: "User ID and new role are required" });
    }

    if (!["student", "employer", "admin"].includes(newRole)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.role = newRole;
    await user.save();
    res.status(200).json({ message: "User role updated successfully", user });
  } catch (error) {
    console.error("❌ Error updating user role:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Students Can Update Their Profile, Employers Cannot Modify Student Profiles
const updateProfile = async (req, res) => {
  try {
    const { name, university, degree, graduationYear, companyName, jobTitle } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (name) user.name = name;

    // Restrict employers from modifying student profiles
    if (user.role === "student") {
      user.studentDetails = { university, degree, graduationYear };
    } else if (user.role === "employer") {
      user.employerDetails = { companyName, jobTitle };
    } else {
      return res.status(403).json({ error: "Unauthorized to update profile" });
    }

    await user.save();
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("❌ Error updating profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Fetch Student Profile (GET /student-profile)
const getStudentProfile = async (req, res) => {
  try {
    if (req.user.role !== "student") {
      return res.status(403).json({ error: "Unauthorized. Only students can access this." });
    }

    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error fetching student profile:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateUserRole, updateProfile, getStudentProfile };


