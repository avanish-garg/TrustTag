// const express = require("express");
// const { getStudentProfile, updateProfile } = require("../controllers/userController");
// const { authenticate } = require("../middlewares/auth");

// const router = express.Router();

// router.get("/profile", authenticate, getStudentProfile);
// router.put("/update-profile", authenticate, updateProfile);

// module.exports = router;

const express = require("express");
const { updateUserRole, updateProfile, getStudentProfile } = require("../controllers/userController");
const { authenticate, authorizeRoles, authenticateStudent } = require("../middlewares/auth");

const router = express.Router();

// ✅ Students can fetch their own profile
router.get("/student-profile", authenticateStudent, getStudentProfile);

// ✅ Admin can update user roles
router.put("/update-role", authenticate, authorizeRoles("admin"), updateUserRole);

// ✅ Only students can update their profile
router.put("/update-profile", authenticateStudent, updateProfile);

module.exports = router;


