import React from "react";
import CircularGradient from "../Componenets/CircularGradient";
import Hero from "../Componenets/Hero";
import FeatureBox from "../Componenets/FeatureBox";
import ForBox from "../Componenets/ForBox";
const HomePage = () => {
  return (
    <div className="container bg-mainBg flex flex-wrap flex-col">
      <CircularGradient />
      <Hero name="Customer" />
      <FeatureBox name="Customer" />
      <ForBox name="Customer" />
    </div>
  );
};

export default HomePage;
