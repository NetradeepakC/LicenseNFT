import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(login);

    if (!login) {
      navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
