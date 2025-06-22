import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "videos",
    resource_type: "video",
    allowed_formats: ["mp4", "mov", "mkv"],
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.split(".")[0]}`,
  },
});

const videoUpload = multer({ storage });

export default videoUpload;
