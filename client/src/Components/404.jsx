import React from "react";
import { useNavigate } from "react-router-dom";
import CircularGradient from "./HomePage/CircularGradient";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-mainBg flex flex-wrap flex-col text-white">
      <CircularGradient />
      <h1 className="py-4 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins self-center">
        404
      </h1>
      <h1 className="py-4 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins self-center">
        Are you sure you are meant to be here ?
      </h1>
      <button
        className="font-bold bg-btnColor  px-4 py-2 self-center rounded-2xl"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Get Me Home!{" "}
      </button>
    </div>
  );
};

export default NotFound;
