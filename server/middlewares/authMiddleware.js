import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 🔒 BLOCK UNAUTHORIZED USER
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "LOGIN_REQUIRED" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user id
    req.user = { id: decoded.id };
    return next(); // ONLY here next() is allowed
  } catch (err) {
    return res.status(401).json({ message: "INVALID_TOKEN" });
  }
};

export default authMiddleware;
