import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto my-auto g-transparent text-center lg:text-left">
      <div className="container p-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-poppins text-white font-extrabold">
              Footer text
            </h5>
            <p className="mb-4 text-paraColor font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-poppins text-white font-extrabold">
              Footer text
            </h5>
            <p className="mb-4 text-paraColor font-poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-paraColor p-4">
        © 2022 Copyright:
        <a className="text-white" href="#">
          &nbsp;WarrantyIt!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
