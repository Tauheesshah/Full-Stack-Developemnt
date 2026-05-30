import Contact from "../models/ContactModel.js";

export const SendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Contact.create({
      user: req.user._id, // logged-in user
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};