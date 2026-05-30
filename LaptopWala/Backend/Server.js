import "./Config/env.js";
import express from "express";

import cors from "cors";

import connectDB from "./Config/DB.js";
import AuthRoutes from "./Routes/AuthRoutes.js";
import ContactRoutes from "./Routes/ContactRoutes.js";
import ProductRoutes from "./Routes/ProductRoutes.js";
import wishlistRoutes from "./Routes/WishlistRoutes.js";
import cartRoutes from "./Routes/CartRoutes.js"
import orderRoutes from "./Routes/OrderRoutes.js"


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});


// ROUTES
app.use("/api/auth", AuthRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/wishlist",wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);




app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});