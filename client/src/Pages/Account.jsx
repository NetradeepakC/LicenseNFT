import React from "react";
import MainContent from "../Account/MainContent";
import Details from "../Account/Details";
import Footer from "../Componenets/Footer";
import TopBar from "../Account/TopBar";
import CircularGradient from "../Componenets/CircularGradient";

export default function Account() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <CircularGradient />
      <MainContent />
      <Details />
      <Footer />
    </div>
  );
}
