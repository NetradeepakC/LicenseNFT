import BigNumber from "bignumber.js";
import React from "react";
import { split16, split16arr } from "../../Services/MiscMath";
import {
  issueNFT,
  loadAccount,
  retrieveBoughtNFT,
  getProduct,
  web3,
  getTokenURI,
} from "../../Services/web3";

const Filters = (props) => {
  // const retrieve = async () => {
  //   const acc = await loadAccount(0);
  //   console.log(acc);
  //   const res = await retrieveBoughtNFT(acc);
  //   //loop lagake res[i] will give all object
  //   const res2 = await getProduct(acc, res[0]);
  //   console.log(res2);
  // };

  return (
    <div className="flex flex-row-reverse flex-wrap mr-48 gap-5">
      <button className="border-2 border-btnColor rounded-xl px-4 py-2">
        mint
      </button>
      <button
        className="border-2 border-btnColor rounded-xl px-4 "
        onClick={async () => {
          let list = await retrieveBoughtNFT(props.acc);
          await getTokenURI(list[0]);
        }}
      >
        getTokenURI
      </button>
    </div>
  );
};

export default Filters;
