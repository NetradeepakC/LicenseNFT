import React from "react";
import image from "../Account/imgs/bird.png";
const Card = () => {
  return (
    <div className="bg-cardColor rounded-xl px-6 py-6">
      <img src={image} className=""></img>
      <h1 className="font-poppins mt-6 font-bold text-2xl">
        Samsung Galaxy S69
      </h1>
      <p className="font-poppins text-l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse,
        ducimus blanditiis excepturi alias voluptatum commodi temporibus eveniet
        quisquam hic!
      </p>
    </div>
  );
};

export default Card;
