import React from "react";
import NavBar from "./NavBar";
import Description from "./Description";
import Transfer from "./Transfer";
import History from "./History";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Details(props) {
  const [sel, setSel] = useState(props.default);
  let location = useLocation();
  let nav_padding = " px-10 py-4 hover:cursor-pointer";
  const selected = " bg-btnColor rounded-xl ";
  let toPut1 = sel === "description" ? nav_padding + selected : nav_padding;
  let toPut2 = sel === "description" ? nav_padding : nav_padding + selected;
  const jsx =
    location.state.user === "company" ? (
      <>
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
            setSel("History");
          }}
        >
          History of Ownership
        </li>
      </>
    ) : (
      <>
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
      </>
    );
  const jsx2 =
    location.state.user === "company" ? (
      <>
        <History token={location.state.token} />
      </>
    ) : (
      <>
        <Transfer></Transfer>
      </>
    );
  return (
    <div>
      <div className="text-white w-3/4 mx-auto mt-12">
        <ul className="flex justify-around">{jsx}</ul>
      </div>
      {sel === "description" ? (
        <Description
          data={location.state.data}
          user={location.state.user}
          token={location.state.token}
        ></Description>
      ) : (
        jsx2
      )}
    </div>
  );
}
