import React from "react";
import Card from "./Card";

const ProductGrid = (props) => {
  const data = props.val;
  console.log(data);
  var jsx = [];
  for (var i = 0; i < data.length; i++) {
    jsx.push(
      <Card
        name={data[i][1].name}
        description={data[i][1].serialID}
        key={i}
        id={i}
        token={data[i][0]}
        acc={props.acc}
        user={props.user}
      />
    );
  }

  return <div className="md:grid grid-cols-3 gap-5 mx-10 lg:mx-24">{jsx}</div>;
};

export default ProductGrid;
