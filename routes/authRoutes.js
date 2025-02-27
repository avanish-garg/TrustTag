const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const { authenticate, authorizeRoles } = require("../middlewares/auth"); // ✅ Correct middleware import

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, getProfile); // ✅ Fixed authMiddleware issue
router.get("/admin", authenticate, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});

module.exports = router;
