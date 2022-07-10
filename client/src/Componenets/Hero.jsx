import React from "react";

const Hero = (props) => {
  const typeOfUser = [
    {
      type: "customer",
      heading: "Warranties",
      description: "Mai customer hai bohut warrenty dede bhai , kya hee hoga",
    },
    {
      type: "company",
      heading: "Issuing Warranties",
      description:
        "Mai seller hai bohut warrenty dede bhai , kya hee hoga, customer ko thogunga",
    },
  ];
  var jsx;
  typeOfUser.forEach((item) => {
    if (item.type == props.typeOfLogin) {
      console.log("Success");
      jsx = (
        <>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white font-poppins">
              Discover a new era of
              {" " + item.heading}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-paraColor font-poppins">
              {item.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-btnColor hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </>
      );
    }
  });

  return (
    <div>
      <div classname="Hero">
        <section className="w-full mx-12">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            {jsx}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
