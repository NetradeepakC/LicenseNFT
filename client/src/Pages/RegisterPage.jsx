import React from "react";
import Register from "../Components/Register/Register";
import CircularGradient from "../Components/HomePage/CircularGradient";

const RegisterPage = () => {
  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <CircularGradient />
      <Register />
    </div>
  );
};

export default RegisterPage;
