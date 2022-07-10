import React from "react";

const FeatureBox = (props) => {
  return (
    <div className="flex flex-wrap w-screen h-screen items-center gap-20">
      <h1 className="self-center mx-auto max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-poppins">
        Secure Your Purchases
        <br />
        Forever in the chain
      </h1>

      <div className="flex flex-wrap justify-center my-auto w-screen h-full gap-4">
        <div className=" bg-cardColor rounded-lg md:w-1/4 md:h-1/2 flex flex-wrap flex-col ">
          <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
          <h1 className="text-center text-white font-poppins text-2xl font-extrabold">
            Set up your wallet
          </h1>
          <p className="text-center px-4 mt-6 self-center text-s text-white font-poppins">
            Once you’ve set up your wallet of choice,
            <br /> connect it to OpenSea by clicking the wallet icon in the top
            right corner.
          </p>
        </div>
        <div className="bg-cardColor rounded-lg w-1/4 md:h-1/2 flex flex-wrap flex-col">
          <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
          <h1 className="px-2 text-center text-white font-poppins text-2xl font-extrabold">
            List Warranty for every product
          </h1>
          <p className="text-center px-4 mt-6 self-center text-s text-white font-poppins">
            Once you’ve set up your wallet of choice,
            <br /> connect it to OpenSea by clicking the wallet icon in the top
            right corner.
          </p>
        </div>
        <div className="bg-cardColor rounded-lg w-1/4 md:h-1/2 flex flex-wrap flex-col">
          <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
          <h1 className="text-center text-white font-poppins text-2xl font-extrabold">
            Transfer Ownership
          </h1>
          <p className="text-center px-4 mt-6 self-center text-s text-white font-poppins">
            Once you’ve set up your wallet of choice,
            <br /> connect it to OpenSea by clicking the wallet icon in the top
            right corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
