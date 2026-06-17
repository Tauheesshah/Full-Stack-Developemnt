import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Contacted", "Enrolled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;