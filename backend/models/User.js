// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true, unique: true }, // ✅ Ensure username is required & unique
//   password: { type: String, required: true },
//   role: { type: String, enum: ["student", "employer"], required: true }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "employer", "admin"], default: "student" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
