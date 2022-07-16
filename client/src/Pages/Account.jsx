import React from "react";
import MainContent from "../Components/Account/MainContent";
import Details from "../Components/Account/Details";
import Footer from "../Components/HomePage/Footer";
import TopBar from "../Components/Account/TopBar";
import CircularGradient from "../Components/HomePage/CircularGradient";

export default function Account() {
  return (
    <div className="flex flex-col">
      <TopBar type="productdetails" />
      <CircularGradient />
      <MainContent />
      <Details />
      <Footer />
    </div>
  );
}
