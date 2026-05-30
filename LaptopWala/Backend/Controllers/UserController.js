import User from "../Models/UserModel.js";

export const UpdateProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.profileImage =
      req.body.profileImage || user.profileImage;

    const updatedUser = await user.save();

    res.json(updatedUser);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};