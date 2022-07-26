import React from "react";
import TopBar from "../Components/Product/TopBar";

import Filters from "../Components/Landing/Filters";
import Headline from "../Components/Landing/Headline";
import ProductGrid from "../Components/Landing/ProductGrid";
import SeachBar from "../Components/Landing/SeachBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  issueNFT,
  loadAccount,
  retrieveBoughtNFT,
  retrieveIssuedNFT,
  getProduct,
  web3,
} from "../Services/web3";
import CircularGradient from "../Components/HomePage/CircularGradient";
const LoggedinLanding = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [account, setAccount] = useState(null);
  const typeOfUser = location.state.userType;
  console.log(typeOfUser);

  const retrieve = async () => {
    var finalData = [];
    const acc = await loadAccount(0);
    setAccount(acc);

    const res = await retrieveBoughtNFT(acc);

    if (res != null) {
      for (var i = 0; i < res.length; i++) {
        var res2 = await getProduct(acc, res[i]);
        finalData.push([res[i], res2]);
      }
    }
    setData(finalData);
    console.log(data);
  };

  const retrieveForSeller = async () => {
    var finalData = [];
    const acc = await loadAccount(0);
    setAccount(acc);

    const res = await retrieveIssuedNFT(acc);

    if (res != null) {
      for (var i = 0; i < res.length; i++) {
        try {
          var res2 = await getProduct(acc, res[i]);
          finalData.push([res[i], res2]);
        } catch {}
      }
    }
    setData(finalData);
  };
  useEffect(() => {
    if (typeOfUser === "company") retrieveForSeller();
    else retrieve();
  }, []);
  return (
    <div className=" bg-mainBg flex flex-wrap flex-col text-white gap-5 ">
      <TopBar type="landing" user={typeOfUser} />
      <CircularGradient></CircularGradient>
      <Headline />

      <div>
        {data && <ProductGrid val={data} acc={account} user={typeOfUser} />}
      </div>
    </div>
  );
};

export default LoggedinLanding;
