import React from "react";

const ForBox = () => {
  return (
    <div>
      <div className=" bg-cardColor rounded-lg md:w-3/4 flex flex-wrap flex-col mx-auto py-10 ">
        <h1 className="text-center text-white font-poppins text-5xl font-extrabold">
          For Companies
        </h1>
        <p className="text-center px-4 mt-6 self-center text-l text-white font-poppins pb-12">
          We have a large scale group to support each other in this game, Join
          us to get the news as soon
          <br /> as possible and follow our latest announcements!
        </p>
        <div className="btn flex flex-wrap justify-center w-1/3 self-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-btnColor hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join as a company
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForBox;
