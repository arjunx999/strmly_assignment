import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    video: null,
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      alert("You need to login to access this page");
      Navigate("/login");
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "video") {
      setFormData((prev) => ({ ...prev, video: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("video", formData.video);

      const token = sessionStorage.getItem("token");
      const res = await axios.post(
        "https://strmly-assignment-backend.onrender.com/videos/upload-video",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
            // console.log(`Upload Progress: ${percent}%`);
          },
        }
      );
      console.log("Video uploaded successfully:", res.data);
      setUploadProgress(0);
      alert("Video uploaded successfully!");
      Navigate("/home");
    } catch (error) {
      if (error.response?.status === 400) {
        alert("No file found. Please attach a video to upload");
      } else {
        alert("Error during upload. Please check console");
        console.log(error);
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 text-white flex justify-center gap-[5vh] flex-col items-center relative">
      {uploadProgress > 0 && (
        <div className="flex flex-col w-[30vw] items-center gap-1">
          <p className="text-sm">
            {uploadProgress < 100
              ? `Uploading: ${uploadProgress}%`
              : "Processing..."}
          </p>
          <div className="w-full bg-zinc-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className="absolute top-5 left-5 underline underline-offset-4 cursor-pointer"
        onClick={() => Navigate("/home")}
      >
        back to home
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 rounded-lg border-[0.1rem] border-white w-[90%] max-w-[500px]"
        encType="multipart/form-data"
      >
        <h2 className="text-xl font-semibold">Upload Video</h2>
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          required
          onChange={handleChange}
          className="p-2 rounded bg-zinc-700 text-white"
        />
        <textarea
          name="content"
          placeholder="Video Description"
          required
          onChange={handleChange}
          className="p-2 rounded bg-zinc-700 text-white"
        />
        <input
          type="file"
          name="video"
          accept="video/*"
          required
          onChange={handleChange}
          className="text-sm text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white cursor-pointer"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
