import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9999/auth/register",
        formData
      );
      Navigate("/login");
    } catch (error) {
      if (error.response?.status === 400) {
        alert("User already exists with this email. Login instead!");
      } else {
        console.error("Error during signup:", error.message);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-zinc-900 flex items-center justify-center gap-[10vw] ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-[2vw]"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          onChange={handleChange}
          className=" w-[31.8vw] rounded-xl p-2 text-white border-2 border-white"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={handleChange}
          className=" w-[31.8vw] rounded-xl p-2 text-white border-2 border-white"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
          className=" w-[31.8vw] rounded-xl p-2 text-white border-2 border-white"
        />
        <button
          type="submit"
          className="w-[8vw] rounded-md h-[8vh] border-2 border-zinc-200 flex justify-center cursor-pointer items-center text-white"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
