import React from "react";

const CircularGradient = () => {
  return (
    <div>
      <div
        className="circles rounded-full bg-secondaryBg absolute top-16 right-16 blur-[700px]"
        style={{ height: "400px", width: "400px" }}
      ></div>
      <div
        className="circles rounded-full bg-secondaryBg absolute -top-[250px] -left-[200px] blur-[700px]"
        style={{ height: "400px", width: "400px" }}
      ></div>
    </div>
  );
};

export default CircularGradient;
