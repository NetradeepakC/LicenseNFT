import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadWeb3, transfer, loadAccount } from "../../Services/web3";
const Transfer = () => {
  const [address, setAddress] = useState("");
  const location = useLocation();
  const router = useNavigate();
  return (
    <div className="text-white md:w-4/6 mx-auto p-8 leading-10">
      <form className="flex-col flex flex-wrap mx-auto ">
        <label className="font-poppins font-bold text-2xl my-2">To</label>
        <input
          type="text"
          required
          className="rounded-xl text-black px-5"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Wallet address to transfer ownership"
        />
      </form>
      <button
        className="text-white bg-btnColor rounded-2xl mx-auto px-3 my-5 py-3 hover:font-bold"
        onClick={async (e) => {
          e.preventDefault();
          await loadWeb3();
          const account = await loadAccount(0);
          console.log(location.state.token);
          await transfer(account, address, location.state.token);
          console.log("clicked");
          router(-1);
        }}
      >
        Transfer
      </button>
    </div>
  );
};

export default Transfer;
