import React from "react";
import back_logo from "../imgs/left_arrow.svg"

export default function TopBar() {
    return (
        <div className="text-white">
            <ul className="flex justify-between content-center mt-10">
                <img src={back_logo} alt="back_logo" className="w-10 ml-36 " />
                <button className="px-12 py-4 mr-36 border-2 border-btnColor rounded-xl">Logout</button>
            </ul>
        </div>
    );
}