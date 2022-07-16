import React from "react";

const FeatureBox = (props) => {
  const typeOfUser = [
    {
      type: "customer",
      caption: "Secure Your Purchases Forever in the chain",
      box1Caption: "Set up your wallet",
      box2Caption: "Find your Warranties",
      box3Caption: "View, Redeem, Resell !",
      box1Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      box2Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      box3Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
    {
      type: "company",
      caption: "Generate Waranty for your products easily",
      box1Caption: "Set up your wallet",
      box2Caption: "List waranty for every product",
      box3Caption: "Verify warranty after reselling of products!",
      box1Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      box2Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      box3Body:
        "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
    },
  ];
  var jsx;
  typeOfUser.forEach((item) => {
    if (item.type == props.typeOfLogin) {
      jsx = (
        <>
          <div className="flex flex-wrap w-screen h-screen items-center gap-20">
            <h1 className="text-center first:self-center mx-auto max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
              {item.caption}
            </h1>

            <div className="flex flex-wrap justify-center my-auto w-screen h-full gap-4">
              <div className=" bg-cardColor rounded-lg md:w-1/4 md:h-1/2 flex flex-wrap flex-col ">
                <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
                <h1 className="text-center text-white font-poppins text-2xl font-extrabold">
                  {item.box1Caption}
                </h1>
                <p className="text-center px-4 mt-6 self-center text-s text-paraColor font-poppins">
                  {item.box1Body}
                </p>
              </div>
              <div className="bg-cardColor rounded-lg w-1/4 md:h-1/2 flex flex-wrap flex-col">
                <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
                <h1 className="px-2 text-center text-white font-poppins text-2xl font-extrabold">
                  {item.box2Caption}
                </h1>
                <p className="text-center px-4 mt-6 self-center text-s text-paraColor font-poppins">
                  {item.box2Body}
                </p>
              </div>
              <div className="bg-cardColor rounded-lg w-1/4 md:h-1/2 flex flex-wrap flex-col">
                <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
                <h1 className="text-center text-white font-poppins text-2xl font-extrabold">
                  {item.box3Caption}
                </h1>
                <p className="text-center px-4 mt-6 self-center text-s text-paraColor font-poppins">
                  {item.box3Body}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
  return <>{jsx}</>;
};

export default FeatureBox;
