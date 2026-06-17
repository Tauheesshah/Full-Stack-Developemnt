import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import leadRoutes from "./routes/lead.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";




const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());

app.use(compression());

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use( "/api/v1/leads",leadRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/leads", leadRoutes);

app.use(errorHandler);

export default app;