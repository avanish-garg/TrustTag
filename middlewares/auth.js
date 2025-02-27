const jwt = require("jsonwebtoken");

// ✅ Middleware to verify JWT (Authentication)
const authenticate = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Extract token after "Bearer"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user data to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

// ✅ Middleware to check user roles (Authorization)
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Unauthorized Access" });
    }
    next();
  };
};

module.exports = { authenticate, authorizeRoles };
