import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  loadWeb3,
  loadAccount,
  getUser,
  registerUser,
} from "../../Services/web3";
export default function NavBar() {
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [defaultAccount, setDefaultAccount] = useState(null);
  const router = useNavigate();
  const [wallet, setWallet] = useState("");
  const [name, setName] = useState("");

  const register = async (event) => {
    event.preventDefault();
    await loadWeb3();
    const account = await loadAccount();
    setWallet(account);

    const result = await registerUser(name);
    if (result) {
      const userData = await getUser(account);
      if (userData.id === 0) {
        window.alert("Something Went Wrong!");
        return;
      }
      router.push("/landing", { state: { user: userData, wallet: wallet } });
      window.location.reload();
    }
  };
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

  return (
    <nav>
      <div className="text-white flex place-content-center py-12 text-center">
        <h1 className="pl-64 justify-center self-center m-0 font-bold">
          Panda NFT
        </h1>
        <ul className="flex grow justify-center self-center">
          <li className="px-12 font-bold decoration-sky-500 decoration-2 underline underline-offset-8">
            Home
          </li>
          <li className="px-12">About Us</li>
          <li className="px-12">Contact Us</li>
        </ul>
        <button
          className="mr-64 font-bold border-2 px-6 py-4 content-center rounded-2xl border-sky-500"
          onClick={connectWalletHandler}
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
