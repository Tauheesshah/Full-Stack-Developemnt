import express from "express";
import { SendMessage } from "../Controllers/ContactController.js";
import Protect from "../Middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/send", Protect, SendMessage);

export default router;