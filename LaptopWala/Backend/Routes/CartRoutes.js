import express from "express";
import {
  AddToCart,
  GetUserCart,
  DecrementQuantity,
  RemoveCartItem
} from "../Controllers/CartController.js";

import Protect from "../Middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/my-cart", Protect, GetUserCart);
router.post("/add", Protect, AddToCart);
router.put("/decrement", Protect, DecrementQuantity);
router.delete("/:productId", Protect, RemoveCartItem);

export default router;