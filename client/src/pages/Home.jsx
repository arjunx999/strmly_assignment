import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      alert("You need to login to access this page");
      Navigate("/login");
      return;
    }

    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:9999/videos/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVideos(res.data);
      } catch (error) {
        alert("Error please check console");
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 flex flex-col text-white">
      <div className="w-[100%] h-[10%] border-b-2 border-white flex px-[4vw] justify-between items-center">
        <h1
          onClick={() => {
            const confirmLogout = window.confirm(
              "Are you sure you want to logout?"
            );
            if (confirmLogout) {
              sessionStorage.clear();
              Navigate("/");
            }
          }}
          className="underline underline-offset-4 cursor-pointer"
        >
          Logout
        </h1>
        <h1
          onClick={() => Navigate("/upload-video")}
          className="underline underline-offset-4 cursor-pointer"
        >
          Upload Video
        </h1>
      </div>

      <div className="w-[100%] h-[90%] overflow-y-scroll p-6 flex gap-6 flex-wrap">
        {videos.length === 0 ? (
          <p className="text-center w-full">No videos found.</p>
        ) : (
          videos.map((video) => (
            <div
              key={video._id}
              className="w-[30vw] h-[40vh] rounded-xl border-[0.1rem] border-white p-2 flex flex-col gap-"
            >
              <video
                src={video.video_url}
                controls
                className="w-full h-[80%] rounded"
              />
              <h3 className="text-lg font-semibold px-2">{video.title}</h3>
              <div className="flex justify-between text-xs text-gray-400 px-2">
                <span>By: {video.author?.name || "Unknown"}</span>
                <span>{new Date(video.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
