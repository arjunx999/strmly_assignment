import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 flex items-center justify-center gap-[10vw] ">
      <div
        onClick={() => Navigate("/login")}
        className="w-[15vw] rounded-md h-[15vh] border-2 border-zinc-200 flex justify-center cursor-pointer items-center text-white"
      >
        Login
      </div>
      <div
        onClick={() => Navigate("/signup")}
        className="w-[15vw] rounded-md h-[15vh] border-2 border-zinc-200 flex justify-center cursor-pointer items-center text-white"
      >
        SignUp
      </div>
    </div>
  );
};

export default Landing;
