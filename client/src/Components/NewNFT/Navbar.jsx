import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Navbar() {
  const router = useNavigate();
  return (
    <div className="text-white">
      <button
        className="w-1/3 m-10 text-4xl hover:cursor-pointer "
        onClick={() => {
          router(-1);
        }}
      >
        {" "}
        &lt;{" "}
      </button>
    </div>
  );
}
