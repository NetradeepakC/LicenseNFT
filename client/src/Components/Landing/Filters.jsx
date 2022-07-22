import React from "react";
import { issueNFT, loadAccount, retrieveNFT, web3 } from "../../Services/web3";
const Filters = () => {
  const mint = async () => {
    await issueNFT();
  };

  const retrieve = async () => {
    const acc = await loadAccount();
    console.log(acc);
    const res = await retrieveNFT(acc);
    console.log(res);
  };
  return (
    <div className="flex flex-row-reverse flex-wrap mr-48 gap-5">
      <button
        className="border-2 border-btnColor rounded-xl px-4 py-2"
        onClick={mint}
      >
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
