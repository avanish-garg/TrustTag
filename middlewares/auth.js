const jwt = require("jsonwebtoken");

// ✅ General Authentication Middleware (For Any User)
const authenticate = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified; // Attach user data to request
    next();
  } catch (error) {
    console.error("❌ Authentication Error:", error.message);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

// ✅ Role-Based Authorization Middleware
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    if (!roles.includes(req.user.role)) {
      console.warn(`⚠️ Unauthorized Access Attempt: ${req.user.role} tried to access.`);
      return res.status(403).json({ error: "Unauthorized Access" });
    }

    next();
  };
};

// ✅ Specific Employer Authentication Middleware
const authenticateEmployer = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.role !== "employer") {
      return res.status(403).json({ error: "Unauthorized: Employer access required" });
    }
    next();
  });
};

// ✅ Specific Student Authentication Middleware
const authenticateStudent = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.role !== "student") {
      return res.status(403).json({ error: "Unauthorized: Student access required" });
    }
    next();
  });
};

module.exports = { authenticate, authorizeRoles, authenticateEmployer, authenticateStudent };
