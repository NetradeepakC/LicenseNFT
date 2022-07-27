import React from "react";
import { useEffect, useState } from "react";
import { getCurrentOwner, loadAccount } from "../../Services/web3";
export default function Description(props) {
  const typeOfDevice = [
    "Smart Home",
    "Smartphone",
    "Computer",
    "Appliance",
    "Clothing",
    "Car",
  ];
  const [owner, setOwner] = useState("");
  const loadStuff = async () => {
    const account = await loadAccount(0);
    setOwner(await getCurrentOwner(account, props.token));
    console.log(owner);
  };

  useEffect(() => {
    if (props.user === "company") loadStuff();
    else {
    }
  }, []);

  const jsx =
    props.user === "customer" ? (
      <>
        <h1 className="font-bold">Seller Address</h1>
        <p className="mb-10 md:mb-0 justify-self-end">{props.data.sellar}</p>
      </>
    ) : (
      <>
        <h1 className="font-bold text-white">Owned By</h1>
        <p className="mb-10 md:mb-0 justify-self-end">{owner}</p>
      </>
    );
  return (
    <div className="text-paraColor md:w-4/6 mx-auto p-8 leading-10">
      <div className="grid grid-cols-2 md:w-4/5 gap-y-4 mt-8">
        <h1 className="font-bold text-white">Product Type</h1>
        <p className="mb-10 md:mb-0 justify-self-end">
          {typeOfDevice[props.data.pType]}
        </p>
        {jsx}

        <h1 className="font-bold text-white">Blockchain</h1>
        <p className="mb-10 md:mb-0 justify-self-end">Ethereum</p>
        <h1 className="font-bold text-white">Network</h1>
        <p className="mb-10 md:mb-0 justify-self-end">Polygon Mumbai Testnet</p>
      </div>
    </div>
  );
}
