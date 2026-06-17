import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";

export const registerUser =
  async (data) => {
    const existingUser =
      await User.findOne({
        email: data.email,
      });

    if (existingUser) {
      throw new ApiError(
        400,
        "User already exists"
      );
    }

    return User.create(data);
  };

export const loginUser = async (
  email,
  password
) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new ApiError(
      404,
      "User not found"
    );
  }

  const isMatch =
    await user.comparePassword(
      password
    );

  if (!isMatch) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  return user;
};