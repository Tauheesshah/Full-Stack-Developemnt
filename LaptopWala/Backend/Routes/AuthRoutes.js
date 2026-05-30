import express from "express";

import {
  RegisterUser,
  LoginUser,
} from "../controllers/AuthController.js";
import { UpdateProfile } from "../Controllers/UpdateProfileController.js";
import Protect from "../Middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/signup", RegisterUser);

router.post("/login", LoginUser);

router.put("/profile",Protect,UpdateProfile);

export default router;