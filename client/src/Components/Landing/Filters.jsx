import React from "react";
import {
  issueNFT,
  loadAccount,
  retrieveBoughtNFT,
  web3,
} from "../../Services/web3";

const Filters = () => {
  const retrieve = async () => {
    const acc = await loadAccount(0);
    console.log(acc);
    const res = await retrieveBoughtNFT(acc);
    console.log(res);
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
