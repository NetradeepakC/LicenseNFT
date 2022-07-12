import React from "react";
import { Link } from "react-router-dom";

const ForBox = (props) => {
  const clickHandler = () => {};
  const typeOfUser = [
    {
      type: "customer",
      caption: "For Organisations ",
      description:
        "We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!",
      btn_desc: "Join as a company",
    },
    {
      type: "company",
      caption: "For Customers",
      description:
        "We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!",
      btn_desc: "Join as a customer",
    },
  ];
  var jsx;
  typeOfUser.forEach((item) => {
    if (item.type == props.typeOfLogin) {
      var redirectLink = item.type == "customer" ? "/company" : "/";
      jsx = (
        <>
          <h1 className="text-center text-white font-poppins text-5xl font-extrabold">
            {item.caption}
          </h1>
          <p className="text-center px-12 mt-6 self-center text-l text-paraColor font-poppins pb-12">
            {item.description}
          </p>
          <div className="btn flex flex-wrap justify-center w-1/3 self-center">
            <div
              className="cursor-pointer inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-btnColor hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              onClick={() => {
                window.location.href = redirectLink;
              }}
            >
              {item.btn_desc}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </>
      );
    }
  });
  return (
    <div>
      <div className=" bg-cardColor rounded-lg md:w-3/4 flex flex-wrap flex-col mx-auto py-10 ">
        {jsx}
      </div>
    </div>
  );
};

export default ForBox;
