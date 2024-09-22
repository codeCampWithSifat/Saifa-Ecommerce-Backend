import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AuthRoutes } from "./routes/auth/AuthRoutes.js";
import { AdminProductsRoutes } from "./routes/admin/products-routes.js";

const app = express();
const port = process.env.PORT || 5000;

const main = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log("Database Error", error);
  }
};

main();

// use all the middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", AuthRoutes);
app.use("/api/admin/products", AdminProductsRoutes);

app.listen(port, () => console.log(`Server is now running on port ${port}`));
