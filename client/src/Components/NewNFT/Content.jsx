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
      <form>
        <label type="text">Product Name</label>
        <input
          className="mb-10 text-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label type="text">Product Serial</label>
        <input
          className="mb-10 text-black"
          type="text"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
        />{" "}
        <br />
        <label type="text">Address of Recipient</label>
        <input
          className="mb-10 text-black"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <br />
        <label type="text">Valid Until</label>
        <input
          className="mb-10 text-black"
          type="text"
          value={valid}
          onChange={(e) => setValid(e.target.value)}
        />{" "}
        <br />
        <label type="text">Terms And Conditions</label>
        <input
          className="mb-10 text-black"
          type="text"
          value={tnc}
          onChange={(e) => setTnc(e.target.value)}
        />{" "}
        <br />
        <button
          className="text-white"
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
