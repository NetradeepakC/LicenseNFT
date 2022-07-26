import React from "react";
import { useEffect } from "react";
import { getCurrentOwner, loadAccount } from "../../Services/web3";
import { useState } from "react";
export default function Description(props) {
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
        <h1 className="font-bold">Owned By</h1>
        <p className="mb-10 md:mb-0 justify-self-end">{owner}</p>
      </>
    );
  return (
    <div className="text-white md:w-4/6 mx-auto p-8 leading-10">
      <p className="w-4/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        assumenda reiciendis, tempore totam maxime ab nobis consequatur magnam
        odio ea harum dignissimos minus ipsum eum cupiditate nesciunt, fuga
        voluptatibus fugit?
      </p>

      <div className="grid grid-cols-2 md:w-4/5 gap-y-4 mt-8">
        {jsx}

        <h1 className="font-bold">Blockchain</h1>
        <p className="mb-10 md:mb-0 justify-self-end">Ethereum</p>
        <h1 className="font-bold">Network</h1>
        <p className="mb-10 md:mb-0 justify-self-end">Polgon Mumbai Testnet</p>
      </div>
    </div>
  );
}
