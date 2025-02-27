const User = require("../models/User");

exports.getStudentProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true }).select("-password");
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating profile" });
  }
};
