import React from "react";
import CircularGradient from "../Componenets/CircularGradient";
import Hero from "../Componenets/Hero";
import FeatureBox from "../Componenets/FeatureBox";
import ForBox from "../Componenets/ForBox";
import Footer from "../Componenets/Footer";
import NavBar from "../Componenets/NavBar";
const HomePage = (props) => {
  var name = props.typeOfLogin == "customer" ? "customer" : "company";
  console.log(name);
  return (
    <div className="container bg-mainBg flex flex-wrap flex-col">
      <NavBar />
      <CircularGradient />
      <Hero typeOfLogin={name} />
      <FeatureBox typeOfLogin={name} />
      <ForBox typeOfLogin={name} />
      <Footer />
    </div>
  );
};

export default HomePage;
