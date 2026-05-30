import express from "express";
import upload from "../Middleware/uploadMiddleware.js";
import {
  CreateProduct,
  GetProducts,
  GetProductsByBrand,
  GetProductsByCategory,
  GetSingleProduct,
} from "../Controllers/ProductController.js";
import Protect from "../Middleware/AuthMiddleware.js";
import AdminOnly from "../Middleware/AdminMiddleware.js";

const router = express.Router();

router.post("/create",Protect,AdminOnly, upload.array("images", 5), CreateProduct);
router.get("/", GetProducts);
router.get("/:id", GetSingleProduct);
router.get( "/brand/:brand", GetProductsByBrand);
router.get("/category/:category",GetProductsByCategory);

export default router;