import React from "react";

export default function NavBar() {
    const nav_padding = " px-10 py-4 ";
    const selected = " bg-btnColor rounded-xl "
    return (
        <div className="text-white w-3/4 mx-auto mt-12">
            <ul className="flex justify-around">
                <li className={nav_padding + selected}>Description</li>
                <li className={nav_padding}>Offers</li>
                <li className={nav_padding}>Transfer This Warranty</li>
            </ul>
        </div>
    );
}