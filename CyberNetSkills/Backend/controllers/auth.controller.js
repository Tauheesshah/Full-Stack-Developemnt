import * as AuthService from "../services/auth.service.js";
import generateToken from "../utils/generateToken.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const user = await User.create({
      fullName,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const login =
  asyncHandler(async (req, res) => {

    const user =
      await AuthService.loginUser(
        req.body.email,
        req.body.password
      );

    const token =
      generateToken(user._id);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          token,  
          user,
        },
        "Login Successful"
      )
    );
  });