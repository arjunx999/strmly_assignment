import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    video: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "video") {
      setFormData((prev) => ({ ...prev, video: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 text-white flex justify-center items-center relative">
      <div className="absolute top-5 left-5 underline underline-offset-4 cursor-pointer" onClick={() => Navigate("/home")}>back to home</div>
      <form
        // onSubmit={handleSubmit}
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
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
