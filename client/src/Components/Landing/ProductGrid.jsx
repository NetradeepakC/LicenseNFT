import React from "react";
import Card from "./Card";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mx-24">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProductGrid;
