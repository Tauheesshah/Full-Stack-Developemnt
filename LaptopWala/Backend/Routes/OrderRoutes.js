// routes/OrderRoutes.js

import express from "express";

import {
  CreateOrder,
  GetOrderHistory,
} from "../controllers/OrderController.js";

import Protect from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  Protect,
  CreateOrder
);

router.get(
  "/history",
  Protect,
  GetOrderHistory
);

export default router;