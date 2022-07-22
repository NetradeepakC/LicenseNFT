import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  loadWeb3,
  getUser,
  registerUser,
  loadAccount,
} from "../../Services/web3";

const Register = () => {
  const [name, setName] = useState("");
  const location = useLocation();
  var typeOfUser = location.state.userType;
  const router = useNavigate();
  const [wallet, setWallet] = useState("");

  const register = async (event, typeOfUser) => {
    event.preventDefault();
    console.log(typeOfUser);
    var isSeller = typeOfUser === "customer" ? false : true;
    console.log(isSeller);
    await loadWeb3();
    const account = await loadAccount(0);
    setWallet(account);
    console.log(account);
    const result = await registerUser(name, account, isSeller);
    console.log(result);

    const userData = await getUser(account);
    if (userData == null) {
      window.alert("Something Went Wrong!");
      return;
    }
    router("/landing", { state: { userType: typeOfUser } });
    window.location.reload();
  };

  return (
    <>
      <div className="text-white flex flex-wrap flex-col my-40 ">
        <h1 className="mx-auto max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
          Register
        </h1>
        <form className="flex-col flex flex-wrap mx-auto ">
          <label className="font-poppins font-bold text-2xl my-2">Name</label>
          <input
            type="text"
            required
            className="rounded-xl text-black px-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </form>
        <button
          className="text-white bg-btnColor rounded-2xl mx-auto px-3 my-5 py-3 hover:font-bold "
          onClick={(e) => {
            register(e, typeOfUser);
          }}
        >
          Submit
        </button>
        <h1 className="mx-auto font-poppins font-bold text-2xl my-10">
          Already have an account ? Click{" "}
          <span className="text-btnColor hover:cursor-pointer">Here</span> to
          sign in
        </h1>
      </div>
    </>
  );
};

export default Register;
