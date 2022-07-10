import React from "react";
import CircularGradient from "../Componenets/CircularGradient";
import Hero from "../Componenets/Hero";
import FeatureBox from "../Componenets/FeatureBox";
import ForBox from "../Componenets/ForBox";
import Footer from "../Componenets/Footer";
import NavBar from "../Componenets/NavBar";
const HomePage = () => {
  return (
    <div className="container bg-mainBg flex flex-wrap flex-col">
      <NavBar />
      <CircularGradient />
      <Hero name="Customer" />
      <FeatureBox name="Customer" />
      <ForBox name="Customer" />
      <Footer />
    </div>
  );
};

export default HomePage;
