import express from "express";

import {
  AddToWishlist,
  GetWishlist,
  RemoveWishlist,
} from "../Controllers/WishlistController.js";

import Protect  from "../Middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/", Protect, AddToWishlist);

router.get("/", Protect, GetWishlist);

router.delete(
  "/:id",
  Protect,
  RemoveWishlist
);

export default router;