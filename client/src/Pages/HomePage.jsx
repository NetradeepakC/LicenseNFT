import React from "react";
import CircularGradient from "../Components/HomePage/CircularGradient";
import Hero from "../Components/HomePage/Hero";
import FeatureBox from "../Components/HomePage/FeatureBox";
import ForBox from "../Components/HomePage/ForBox";
import Footer from "../Components/HomePage/Footer";
import NavBar from "../Components/HomePage/NavBar";
import { useLocation } from "react-router-dom";

const HomePage = (props) => {
  const location = useLocation();
  let name = props.typeOfLogin === "customer" ? "customer" : "company";

  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <NavBar typeOfLogin={name} at="home" />
      <CircularGradient />
      <Hero typeOfLogin={name} />
      <FeatureBox typeOfLogin={name} />
      <ForBox typeOfLogin={name} />
      <Footer />
    </div>
  );
};

export default HomePage;
