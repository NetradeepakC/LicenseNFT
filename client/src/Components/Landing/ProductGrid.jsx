import React from "react";
import Card from "./Card";

const ProductGrid = () => {
  return (
    <div className="md:grid grid-cols-3 gap-5 mx-10 lg:mx-24">
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
