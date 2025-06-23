import { Video } from "../models/video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No video uploaded" });
    }

    const newVideo = await Video.create({
      title,
      content,
      author: req.user._id || req.user.id,
      video_url: req.file.path,
    });

    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error)
  }
};

export const getAll = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("author")
      .sort({ createdAt: -1 });

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id).populate("author");

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
