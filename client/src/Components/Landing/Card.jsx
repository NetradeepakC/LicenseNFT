import React from "react";
import image from "../Product/imgs/bird.png";
const Card = (props) => {
  console.log(props.name);
  console.log(props.description);
  return (
    <div className="bg-cardColor rounded-xl px-6 py-6">
      <img src={image} className=""></img>
      <h1 className="font-poppins mt-6 font-bold text-2xl">{props.name}</h1>
      <p className="font-poppins text-l">Serial Number : {props.description}</p>
    </div>
  );
};

export default Card;
