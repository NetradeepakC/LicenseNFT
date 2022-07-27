import React from "react";
import { useState } from "react";
import { issueNFT, loadAccount, web3 } from "../../Services/web3";
export default function Content() {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [address, setAddress] = useState("");
  const [valid, setValid] = useState("");
  const [tnc, setTnc] = useState("");

  const mint = async (event, name, serial, address, tnc, valid) => {
    event.preventDefault();
    const acc = await loadAccount(0);
    console.log(acc);
    await issueNFT(acc, name, serial, address, tnc, valid);
  };

  return (
    <div className="text-white">
      <form className="grid grid-cols-2 w-1/3 m-auto">
        <label type="text">Product Name</label>
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <label type="text">Product Serial</label>
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
        />{" "}
        <label type="text">Address of Recipient</label>
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <label type="text">Valid Until</label>
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={valid}
          onChange={(e) => setValid(e.target.value)}
        />{" "}
        <label type="text">Terms And Conditions</label>
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={tnc}
          onChange={(e) => setTnc(e.target.value)}
        />{" "}
        <input
          className="mb-10 text-black rounded"
          type="text"
          value={tnc}
          onChange={(e) => setTnc(e.target.value)}
        />{" "}
        <button
          className="text-white col-span-2 px-12 py-4  border-2 border-btnColor rounded-xl hover:bg-btnColor"
          onClick={(e) => {
            mint(e, name, serial, address, tnc, valid);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
