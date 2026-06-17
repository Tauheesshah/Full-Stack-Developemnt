import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (
  req,
  res,
  next
) => {
  const token =
    req.headers.authorization?.split(
      " " 
    )[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  req.user = await User.findById(
    decoded.id
  );

  next();
};



const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No Token",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export { authMiddleware, protect };