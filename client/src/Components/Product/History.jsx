import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loadAccount, retrieveNFTHistory } from "../../Services/web3";
const History = (props) => {
  const [history, setHistory] = useState([]);
  const init = async () => {
    const account = await loadAccount(0);
    let list = await retrieveNFTHistory(account, props.token);
    setHistory(list);
  };
  useEffect(() => {
    init();
  }, []);
  const jsx = [];
  for (let i = 0; i < history.length; i++) {
    jsx.push(<li className="text-paraColor">{history[i]}</li>);
  }
  jsx.reverse();
  return (
    <>
      <div className="text-white md:w-4/6 mx-auto p-8 leading-10">
        <h1 className="font-poppins font-bold text-4xl  text-white">
          History of Ownership
        </h1>

        <p className="font-poppins text-sm my-2">
          Organised from recent onwards
        </p>

        <ul>{jsx}</ul>
        <p className="my-2 text-sm">
          Note that the topmost is the current owner
        </p>
      </div>
    </>
  );
};

export default History;
