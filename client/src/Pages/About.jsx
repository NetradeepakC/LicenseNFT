import React from "react";
import CircularGradient from "../Components/HomePage/CircularGradient";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/HomePage/NavBar";
const About = (props) => {
  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <CircularGradient />
      <NavBar at="about" typeOfUser={props.typeOfUser}></NavBar>
      <h1 className="py-4 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins self-center">
        Who Are We ?
      </h1>
      <div className="text-paraColor w-2/3 self-center font-poppins text-xl">
        We are a group of individuals who have grown tired of looking for
        warranty cards after a year of purchase in the rabbit holes of our
        homes. Often the piece of paper is found in miserable condition making
        it difficult for redemption at the service centers. We try to bring you
        an aggregator platform for both the customers and the retailers and
        brands who can issue the warranties for your product and you can claim
        them easily. Also 2nd hand owners we got you covered. Our live tracking
        of Ownership History allows us to keep track of who the current owner
        is. So make sure you demand your warranty as a right when you buy your
        second hand goods!
      </div>
      <a
        className="bg-btnColor text-white self-center px-2 py-2 rounded-xl mt-4 hover:cursor-pointer"
        href="https://github.com/NetradeepakC/LicenseNFT"
      >
        Support us on GitHub
      </a>
    </div>
  );
};

export default About;
