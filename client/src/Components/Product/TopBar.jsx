import React from "react";
import back_logo from "./imgs/left_arrow.svg";
import { Navigate, useNavigate } from "react-router-dom";

export default function TopBar(props) {
  const router = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    if (props.user == "company") router("/company");
    else router("/");
  };
  const pushBtn =
    props.user === "company" ? (
      <>
        <button
          className="px-12 py-4 mr-10 border-2 border-btnColor rounded-xl hover:bg-btnColor"
          onClick={() => {
            router("/new", { state: { userType: props.user } });
          }}
        >
          Add Product
        </button>
      </>
    ) : (
      <></>
    );
  const toPush =
    props.type == "productdetails" ? (
      <>
        <img
          src={back_logo}
          alt="back_logo"
          className="w-10 ml-10 sm:ml-24 lg:ml-36 "
        />
        <button
          className="px-12 py-4 mr-10 sm:mr-24 lg:mr-36 border-2 border-btnColor rounded-xl hover:bg-btnColor"
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <div className="">
          {" "}
          {pushBtn}
          <button
            className="px-12 py-4 mr-12 border-2 border-btnColor rounded-xl hover:bg-btnColor"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </>
    );

  return (
    <div className="text-white">
      <ul className="flex flex-row-reverse mt-10">{toPush}</ul>
    </div>
  );
}
