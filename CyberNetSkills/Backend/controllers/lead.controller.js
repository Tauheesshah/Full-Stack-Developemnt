import Lead from "../models/lead.js";

export const createLead = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      course,
      message,
    } = req.body;

    const lead = await Lead.create({
      user: req.user._id,
      username: req.user.fullName,
      fullName,
      email,
      phone,
      course,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      lead,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyLeads = async (req, res) => {
  try {
    const leads = await Lead.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};









///   Admin To get all Leads


export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find()
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};