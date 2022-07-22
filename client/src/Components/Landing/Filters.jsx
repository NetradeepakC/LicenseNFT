import React from "react";
import {
  issueNFT,
  loadAccount,
  retrieveBoughtNFT,
  getProduct,
  web3,
} from "../../Services/web3";

const Filters = () => {
  const retrieve = async () => {
    const acc = await loadAccount(0);
    console.log(acc);
    const res = await retrieveBoughtNFT(acc);
    //loop lagake res[i] will give all object
    const res2 = await getProduct(acc, res[0]);
    console.log(res2);
  };
  return (
    <div className="flex flex-row-reverse flex-wrap mr-48 gap-5">
      <button className="border-2 border-btnColor rounded-xl px-4 py-2">
        mint
      </button>
      <button
        className="border-2 border-btnColor rounded-xl px-4 "
        onClick={retrieve}
      >
        retrieve
      </button>
    </div>
  );
};

export default Filters;
