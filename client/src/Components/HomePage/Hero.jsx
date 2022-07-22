import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Hero = (props) => {
  const router = useNavigate();

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
          <div className="lg:mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
              Discover a new era of
              {" " + item.heading}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-paraColor font-poppins">
              {item.description}
            </p>

            <button
              className="bg-btnColor text-white font-poppins lg:mr-64 px-6 py-4 content-center rounded-2xl"
              onClick={() => {
                router("/register", { state: { userType: item.type } });
              }}
            >
              Register
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
        <section className="w-full lg:mx-12">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            {jsx}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
