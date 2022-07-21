import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  loadWeb3,
  getUser,
  registerUser,
  loadAccount,
} from "../../Services/web3";

const Hero = (props) => {
  const router = useNavigate();
  const [wallet, setWallet] = useState("");
  const [name, setName] = useState("");

  const register = async (event) => {
    event.preventDefault();
    await loadWeb3();
    const account = await loadAccount();
    setWallet(account);

    const result = await registerUser();
    if (result) {
      const userData = await getUser(account);
      if (userData.id === 0) {
        window.alert("Something Went Wrong!");
        return;
      }
      router.push("/landing");
      window.location.reload();
    }
  };
  const typeOfUser = [
    {
      type: "customer",
      heading: "Warranties",
      description: "Mai customer hai bohut warrenty dede bhai , kya hee hoga",
    },
    {
      type: "company",
      heading: "Issuing Warranties",
      description:
        "Mai seller hai bohut warrenty dede bhai , kya hee hoga, customer ko thogunga",
    },
  ];
  var jsx;
  typeOfUser.forEach((item) => {
    if (item.type == props.typeOfLogin) {
      console.log("Success");
      jsx = (
        <>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
              Discover a new era of
              {" " + item.heading}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-paraColor font-poppins">
              {item.description}
            </p>

            <button className="bg-btnColor" onClick={register}>
              Get started
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </>
      );
    }
  });

  return (
    <div>
      <div classname="Hero">
        <section className="w-full mx-12">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            {jsx}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
