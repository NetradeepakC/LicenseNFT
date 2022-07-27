import React from "react";
import { FaWallet, FaClipboardList, FaExclamation } from "react-icons/fa";
const FeatureBox = (props) => {
  const typeOfUser = [
    {
      type: "customer",
      caption: "Secure Your Purchases Forever in the chain",
      box1Caption: "Set up your wallet",
      box2Caption: "Find your Warranties",
      box3Caption: "View, Redeem, Resell !",
      box1Body:
        "Once you've set up your wallet of choice, View your ownership of all products issued by sellers on this platform",
      box2Body:
        "Easy to access and view UI which collects all warranties belonging to you on the blockchain in one place.",
      box3Body:
        "Easily verify validity and redeem the warranties. Our platform will auto-remove expired warranties so you don't have to worry about validity. Also you can transfer ownership to any new individual to whom you sell the item to",
    },
    {
      type: "company",
      caption: "Generate Waranty for your products easily",
      box1Caption: "Set up your wallet",
      box2Caption: "List waranty for every product",
      box3Caption: "Verify warranty",
      box1Body:
        "Once you've set up your wallet of choice, connect it to our platform using the Connect Wallet button above. Feel free to issue new productss in the main page",
      box2Body:
        "List all the warranties you have issued from the main page and view their details for redeem verification",
      box3Body:
        "Our platform keeps track of current owner of products which makes evaluation of 2nd hand products easy.",
    },
  ];
  var jsx;
  typeOfUser.forEach((item) => {
    if (item.type == props.typeOfLogin) {
      jsx = (
        <>
          <div className="flex flex-wrap w-screen lg:h-screen items-center gap-20">
            <h1 className="text-center first:self-center mx-auto max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins">
              {item.caption}
            </h1>

            <div className="lg:flex px-10 lg:px-0 flex-wrap justify-center lg:my-auto w-screen lg:h-full gap-4">
              <div className=" bg-cardColor rounded-lg mb-10 lg:mb-0 lg:w-1/4 md:h-1/2 flex flex-wrap flex-col ">
                <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
                <h1 className="text-center text-white font-poppins text-2xl font-extrabold">
                  {item.box1Caption}
                </h1>
                <p className="text-center px-4 mt-6 self-center text-s text-paraColor font-poppins">
                  {item.box1Body}
                </p>
              </div>
              <div className="bg-cardColor rounded-lg mb-10 lg:mb-0 lg:w-1/4 md:h-1/2 flex flex-wrap flex-col">
                <div className="circle bg-btnColor rounded-full w-24 h-24 self-center my-6"></div>
                <h1 className="px-2 text-center text-white font-poppins text-2xl font-extrabold">
                  {item.box2Caption}
                </h1>
                <p className="text-center px-4 mt-6 self-center text-s text-paraColor font-poppins">
                  {item.box2Body}
                </p>
              </div>
              <div className="bg-cardColor rounded-lg mb-10 lg:mb-0 lg:w-1/4 md:h-1/2 flex flex-wrap flex-col">
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
