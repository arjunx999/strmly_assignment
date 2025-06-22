import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 flex flex-col text-white">
      <div className="w-[100%] h-[10%] border-b-2 border-white flex px-[4vw] justify-between items-center ">
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
        <h1 onClick={() => Navigate("/upload-video")} className="underline underline-offset-4 cursor-pointer">
          Upload Video
        </h1>
      </div>
      <div className="w-[100%] h-[90%] overflow-x-hidden overflow-y-scroll p-6 flex gap-6 flex-wrap">
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>
        <div className="w-[30vw] h-[35vh] rounded-xl border-[0.1rem] border-white"></div>

      </div>
    </div>
  );
};

export default Home;
