import express from "express";
import { getUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", getUser, verifyToken);

export default router;
