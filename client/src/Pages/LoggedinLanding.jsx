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
  getProduct,
  web3,
} from "../Services/web3";
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
        finalData.push(res2);
      }
    }
    setData(finalData);
  };
  useEffect(() => {
    retrieve();
  }, []);
  return (
    <div className=" bg-mainBg flex flex-wrap flex-col text-white gap-5 ">
      <TopBar type="landing" user={typeOfUser} />
      <Headline />
      <SeachBar />
      <Filters acc={account} />
      <div>{data && <ProductGrid val={data} />}</div>
    </div>
  );
};

export default LoggedinLanding;
