import express from "express";
import videoUpload from "../middleware/videoUpload.js";
import { verifyToken } from "../middleware/auth.js";
import {
  uploadVideo,
  getAll,
  getVideo,
} from "../controllers/videoController.js";

const router = express.Router();

router.post(
  "/upload-video",
  verifyToken,
  videoUpload.single("video"),
  uploadVideo
);

router.get("/", verifyToken, getAll);

router.get("/:id", verifyToken, getVideo);

export default router;
