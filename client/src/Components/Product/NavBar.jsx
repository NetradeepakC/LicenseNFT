import React from "react";
import { useState } from "react";
export default function NavBar(props) {
  const [sel, setSel] = useState(props.selected);
  let nav_padding = " px-10 py-4 hover:cursor-pointer";
  const selected = " bg-btnColor rounded-xl ";
  let toPut1 = sel === "description" ? nav_padding + selected : nav_padding;
  let toPut2 = sel === "description" ? nav_padding : nav_padding + selected;
  console.log(sel);
  return (
    <div className="text-white w-3/4 mx-auto mt-12">
      <ul className="flex justify-around">
        <li
          className={toPut1}
          onClick={() => {
            setSel("description");
          }}
        >
          Description
        </li>

        <li
          className={toPut2}
          onClick={() => {
            setSel("transfer");
          }}
        >
          Transfer This Warranty
        </li>
      </ul>
    </div>
  );
}
