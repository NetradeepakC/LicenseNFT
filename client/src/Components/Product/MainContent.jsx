import React from "react";
import bird from "./imgs/bird.png";

export default function MainContent() {
  const price_css = {
    text: "text-sm text-[#ADB9C7] ",
    price: "text-2xl font-bold py-8 ",
  };

  const info_css = {
    company: "text-gray-600 text-sm pt-4 pb-1 mx-4 ",
    name: "pt-1 pb-4 mx-4 ",
  };

  return (
    <div className="lg:grid grid-cols-2 text-white mx-auto w-3/4">
      <div className="h-1/2 p-10">
        <img src={bird} alt="I am a bird" />
      </div>
      <div className="p-10 flex flex-col">
        <h1 className="text-6xl font-bold">#id Seagull</h1>
        <p className="text-sm text-[#ADB9C7] py-10 leading-8">
          This is some description Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque cum provident doloribus, beatae magni
          mollitia? Veniam odio adipisci doloribus facilis aut sint. Accusamus
          tenetur quam, sed incidunt porro deleniti itaque.
        </p>
        <div className="flex w-full">
          <div className="basis-1/2">
            <h1 className={price_css.text}>Initial Price</h1>
            <h2 className={price_css.price}>10.89 ETH</h2>
          </div>
          <div className="basis-1/2">
            <h1 className={price_css.text + "text-right"}>Current Price</h1>
            <h2 className={price_css.price + "text-right"}>10.89 ETH</h2>
          </div>
        </div>
        <div className="flex bg-gray-900 rounded-2xl">
          <div className="basis-1/2 ">
            <h1 className={info_css.company}>Company</h1>
            <h2 className={info_css.name}>SalvadorDali</h2>
          </div>
          <div className="basis-1/2">
            <h1 className={info_css.company + "text-right"}>Owner</h1>
            <h2 className={info_css.name + "text-right"}>SalvadorDali</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full flex-grow items-end">
          <button className="box-border col-span-1 h-20 rounded-xl w-auto border-2 border-[#1E50FF]">
            Purchase Now
          </button>
          <button className="box-border col-span-1 h-20 rounded-xl w-auto bg-[#1E50FF]">
            Make a Bid
          </button>
        </div>
      </div>
    </div>
  );
}
