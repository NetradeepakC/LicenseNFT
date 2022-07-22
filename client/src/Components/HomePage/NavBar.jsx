import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loadWeb3, getUser, loadAccount } from "../../Services/web3";

export default function NavBar(props) {
  const router = useNavigate();
  const [wallet, setWallet] = useState("");
  const connect = async (event) => {
    event.preventDefault();
    await loadWeb3();
    const account = await loadAccount();
    setWallet(account);

    const userData = await getUser(account);
    console.log(userData);
    if (userData != null) {
      router("/landing", { state: { userType: props.typeOfLogin } });
      // window.location.reload();
    } else {
      window.alert("Account does not exist. Please register!");
    }
  };

  return (
    <nav>
      <div className="text-white lg:flex place-content-center py-12 text-center">
        <h1 className="mb-5 lg:mb-0 lg:pl-64 justify-center self-center m-0 font-bold">
          WarrantyIt !
        </h1>
        <ul className="mb-5 lg:mb-0 flex grow justify-center self-center">
          <li className="px-3 lg:px-12 font-bold decoration-sky-500 decoration-2 underline underline-offset-8">
            Home
          </li>
          <li className="px-3 lg:px-12">About Us</li>
          <li className="px-3 lg:px-12">Contact Us</li>
        </ul>
        <button
          className="lg:mr-64 font-bold border-2 px-6 py-4 content-center rounded-2xl border-sky-500"
          onClick={connect}
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );

  // const connectWalletHandler = () => {
  //   if (window.ethereum) {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         accountChangedHandler(result[0]);
  //         router("/landing");
  //       });
  //   } else {
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // };
  // const accountChangedHandler = (newAccount) => {
  //   setDefaultAccount(newAccount);
  // };
}
