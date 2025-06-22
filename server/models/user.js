import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 5,
    max: 20,
  },
  user_videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

export const User = mongoose.model("User", userSchema);
