import React from "react";
import CircularGradient from "../Componenets/CircularGradient";
import Hero from "../Componenets/Hero";
import FeatureBox from "../Componenets/FeatureBox";
const HomePage = () => {
  return (
    <div className="container bg-mainBg">
      <CircularGradient />
      <Hero name="Customer" />
      <FeatureBox name="Customer" />
    </div>
  );
};

export default HomePage;
