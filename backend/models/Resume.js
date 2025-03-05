const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeHash: { type: String, required: true },
  analysisResult: {
    isValid: { type: Boolean, default: false },
    metadata: {
      skills: [String],
      education: [
        {
          degree: String,
          institution: String,
          year: Number,
        },
      ],
      experience: [
        {
          title: String,
          company: String,
          duration: String,
        },
      ],
    },
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Resume", ResumeSchema);
