import React from "react";
import TopBar from "../Components/Account/TopBar";
import CircularGradient from "../Components/HomePage/CircularGradient";
import Filters from "../Components/Landing/Filters";
import Headline from "../Components/Landing/Headline";
import ProductGrid from "../Components/Landing/ProductGrid";
import SeachBar from "../Components/Landing/SeachBar";
import { useLocation } from "react-router-dom";
const LoggedinLanding = () => {
  const location = useLocation();
  const typeOfUser = location.state.userType;
  console.log(typeOfUser);
  return (
    <div className=" bg-mainBg flex flex-wrap flex-col text-white gap-5 ">
      <TopBar type="landing" />
      <Headline />
      <SeachBar />
      <Filters />
      <ProductGrid />
    </div>
  );
};

export default LoggedinLanding;
