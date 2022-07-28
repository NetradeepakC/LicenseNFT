import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto my-auto g-transparent text-center lg:text-left">
      <div className="container p-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-poppins text-white font-extrabold">
              Note to testers and developers
            </h5>
            <p className="mb-4 text-paraColor font-poppins">
              This is a product is still in developement and is to be tested in
              a devoloper environment. Make sure not to use test accounts and
              not your actual accounts to make transactions!
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-poppins text-white font-extrabold">
              GitHub Repository Link
            </h5>
            <p className="mb-4 text-paraColor font-poppins text-bold">
              <a href="https://github.com/NetradeepakC/LicenseNFT">
                github.com/NetradeepakC/LicenseNFT
              </a>{" "}
              <br /> Created By: Netradeepak Manoj Chinchwadkar, Monjoy Narayan
              Choudhury and Rudransh Dixit
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-paraColor p-4">
        © 2022 Copyright:
        <a className="text-white">&nbsp;WarrantyIt!</a>
      </div>
    </footer>
  );
};

export default Footer;
