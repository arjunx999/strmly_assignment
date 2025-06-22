import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.use("/videos", videoRoutes);

const PORT = process.env.PORT || 9999;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
