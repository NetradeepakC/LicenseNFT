import React from "react";
import image from "../Product/imgs/bird.png";
import { Navigate, useNavigate } from "react-router-dom";
import { getTokenURI } from "../../Services/web3";
const Card = (props) => {
  const router = useNavigate();
  return (
    <div className="bg-cardColor rounded-xl px-6 py-6">
      <img src={image} className=""></img>
      <h1
        className="font-poppins mt-6 font-bold text-2xl hover:cursor-pointer hover:text-btnColor"
        onClick={async () => {
          if (props.user === "customer") {
            if (
              (await getTokenURI(props.acc, props.token)) !=
              "License is expired"
            ) {
              router("/product/" + props.id, {
                state: {
                  data: props.data,
                  user: props.user,
                  token: props.token,
                },
              });
            } else {
              window.alert(
                "The License is expired. The product will be removed from the catalog"
              );
              window.location.reload();
            }
          } else {
            router("/product/" + props.id, {
              state: { data: props.data, user: props.user, token: props.token },
            });
          }
        }}
      >
        {props.data.name}
      </h1>
      <p className="font-poppins text-l">
        Serial Number : {props.data.serialID}
      </p>
    </div>
  );
};

export default Card;
