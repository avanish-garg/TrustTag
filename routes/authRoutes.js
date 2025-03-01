// const express = require("express");
// const { register, login, getProfile } = require("../controllers/authController");
// const { authenticate, authorizeRoles } = require("../middlewares/auth"); // ✅ Correct middleware import

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/profile", authenticate, getProfile); // ✅ Fixed authMiddleware issue
// router.get("/admin", authenticate, authorizeRoles("admin"), (req, res) => {
//     res.json({ message: "Welcome Admin!" });
// });

// module.exports = router;

const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const { authenticate, authorizeRoles } = require("../middlewares/auth"); // ✅ Ensure correct import

const router = express.Router();

// ✅ Route for User Registration
router.post("/register", register);

// ✅ Route for User Login
router.post("/login", login);

// ✅ Protected Route - Get User Profile
router.get("/profile", authenticate, getProfile);

// ✅ Protected Route - Admin Only
router.get("/admin", authenticate, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});

module.exports = router;

