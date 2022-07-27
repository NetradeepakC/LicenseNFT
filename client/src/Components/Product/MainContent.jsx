import React from "react";
import bird from "./imgs/bird.png";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SmartHome from "../ProductImages/SmartHome.webp";
import Smartphone from "../ProductImages/Phone.jpeg";
import Computer from "../ProductImages/Laptop.webp";
import Appliance from "../ProductImages/Appliance.jpeg";
import Car from "../ProductImages/Car.jpeg";
import Clothing from "../ProductImages/Clothing.png";

export default function MainContent() {
  let location = useLocation();
  let { id } = useParams();
  const [image, setImage] = useState(null);
  const price_css = {
    text: "text-sm text-[#ADB9C7] ",
    price: "text-2xl font-bold py-8 ",
  };

  const info_css = {
    company: "text-gray-600 text-sm pt-4 pb-1 mx-4 ",
    name: "pt-1 pb-4 mx-4 ",
  };
  console.log(location.state.data);
  const date = new Date(location.state.data.birthtime * 1000);
  const expiryDate = new Date(
    location.state.data.birthtime * 1000 + location.state.data.lifespan * 1000
  );
  console.log(location.state.data.pType);
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
    selectImage(location.state.data.pType);
  }, []);
  return (
    <div className="lg:grid grid-cols-2 text-white mx-auto w-3/4">
      <div className="h-1/2 p-10">
        <img src={image} alt={location.state.pType} />
      </div>
      <div className="p-10 flex flex-col">
        <h1 className="text-6xl font-bold">{location.state.data.name}</h1>
        <p className="text-xl text-[#ADB9C7] py-10 leading-8">
          Serial Number : {location.state.data.serialID}
        </p>
        <div className="flex w-full"></div>
        <div className="flex bg-gray-900 rounded-2xl">
          <div className="basis-1/2 ">
            <h1 className={info_css.company}>Issued On</h1>
            <h2 className={info_css.name}>{date.toString()}</h2>
          </div>
          <div className="basis-1/2">
            <h1 className={info_css.company + "text-right"}>Valid Till</h1>
            <h2 className={info_css.name + "text-right"}>
              {expiryDate.toString()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
