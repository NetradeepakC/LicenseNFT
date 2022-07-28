import React from "react";
import CircularGradient from "../Components/HomePage/CircularGradient";
import Footer from "../Components/HomePage/Footer";
import NavBar from "../Components/HomePage/NavBar";

const Contact = () => {
  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <NavBar at="contact"></NavBar>
      <CircularGradient></CircularGradient>
      <div className="flex flex-wrap flex-col self-center w-2/3">
        <h1 className="font-bold text-white text-4xl self-center my-4">
          Brought to you by
        </h1>
        <a
          className="font-bold text-paraColor text-2xl self-center my-4 hover:cursor-pointer hover:text-white"
          href="https://www.linkedin.com/in/netradeepak-chinchwadkar-30728a201/"
        >
          Netradeepak Manoj Chinchwadkar
        </a>
        <a
          className="font-bold text-paraColor text-2xl self-center my-4 hover:cursor-pointer hover:text-white"
          href="https://www.linkedin.com/in/monjoy-narayan-choudhury-a424b3200/"
        >
          Monjoy Narayan Choudhury
        </a>
        <a
          className="font-bold text-paraColor text-2xl self-center my-4 hover:cursor-pointer hover:text-white"
          href="https://www.linkedin.com/in/rudransh-dixit-a785a61ba/"
        >
          Rudransh Dixit
        </a>
      </div>
    </div>
  );
};

export default Contact;
