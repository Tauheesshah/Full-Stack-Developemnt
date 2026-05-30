import express from "express";
import {
  AddToCart,
  GetUserCart,
  DecrementQuantity,
  RemoveCartItem
} from "../controllers/CartController.js";

import Protect from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/my-cart", Protect, GetUserCart);
router.post("/add", Protect, AddToCart);
router.put("/decrement", Protect, DecrementQuantity);
router.delete("/:productId", Protect, RemoveCartItem);

export default router;