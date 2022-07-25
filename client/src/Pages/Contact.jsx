import React from "react";
import CircularGradient from "../Components/HomePage/CircularGradient";
import NavBar from "../Components/HomePage/NavBar";

const Contact = () => {
  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <NavBar at="contact"></NavBar>
      <CircularGradient></CircularGradient>
    </div>
  );
};

export default Contact;
