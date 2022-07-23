import React from "react";
import MainContent from "../Components/Product/MainContent";
import Details from "../Components/Product/Details";
import Footer from "../Components/HomePage/Footer";
import TopBar from "../Components/Product/TopBar";
import CircularGradient from "../Components/HomePage/CircularGradient";

export default function Product() {
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
