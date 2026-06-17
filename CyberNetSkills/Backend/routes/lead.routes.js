import express from "express";

import {
  createLead,
  getMyLeads,
  getAllLeads,
} from "../controllers/lead.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createLead);

router.get("/my-leads", protect, getMyLeads);

router.get("/all", protect, getAllLeads);

export default router;