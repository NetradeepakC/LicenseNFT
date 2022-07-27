import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getTokenURI } from "../../Services/web3";
import SmartHome from "../ProductImages/SmartHome.webp";
import Smartphone from "../ProductImages/Phone.jpeg";
import Computer from "../ProductImages/Laptop.webp";
import Appliance from "../ProductImages/Appliance.jpeg";
import Car from "../ProductImages/Car.jpeg";
import Clothing from "../ProductImages/Clothing.png";
import { useState } from "react";
import { useEffect } from "react";

const Card = (props) => {
  const router = useNavigate();
  const [image, setImage] = useState(null);
  const selectImage = (val) => {
    if (val == 0) {
      setImage(SmartHome);
    }
    if (val == 1) {
      setImage(Smartphone);
    }
    if (val == 2) {
      setImage(Computer);
    }
    if (val == 3) {
      setImage(Appliance);
    }
    if (val == 4) {
      setImage(Clothing);
    }
    if (val == 5) {
      setImage(Car);
    }
  };
  useEffect(() => {
    selectImage(props.data.pType);
  }, []);
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
