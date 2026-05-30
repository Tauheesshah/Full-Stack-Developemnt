import bcrypt from "bcryptjs";

import User from "../Models/UserModel.js";
import GenerateToken from "../Utils/GenerateToken.js";

// SIGNUP

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const UserExists = await User.findOne({ email });

    if (UserExists) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const Salt = await bcrypt.genSalt(10);

    const HashedPassword = await bcrypt.hash(password, Salt);

    const UserData = await User.create({
      name,
      email,
      password: HashedPassword,
    });

    res.status(201).json({
      _id: UserData._id,
      name: UserData.name,
      email: UserData.email,
      isAdmin: UserData.isAdmin,
      token: GenerateToken(UserData._id),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const UserData = await User.findOne({ email });

    if (
      UserData &&
      (await bcrypt.compare(password, UserData.password))
    ) {
      res.json({
        _id: UserData._id,
        name: UserData.name,
        email: UserData.email,
        phone: UserData.phone,
        isAdmin: UserData.isAdmin,
        token: GenerateToken(UserData._id),
      });
    } else {
      res.status(401).json({
        message: "Invalid Email Or Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};