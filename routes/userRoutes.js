const express = require("express");
const { getStudentProfile, updateProfile } = require("../controllers/userController");
const { authenticate } = require("../middlewares/auth");

const router = express.Router();

router.get("/profile", authenticate, getStudentProfile);
router.put("/update-profile", authenticate, updateProfile);

module.exports = router;
