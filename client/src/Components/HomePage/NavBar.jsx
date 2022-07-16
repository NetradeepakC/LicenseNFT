import React from "react";

export default function NavBar() {
    return (
        <nav>
            <div className="text-white flex place-content-center py-12 text-center">
                <h1 className="pl-64 justify-center self-center m-0 font-bold">Panda NFT</h1>
                <ul className="flex grow justify-center self-center">
                    <li className="px-12 font-bold decoration-sky-500 decoration-2 underline underline-offset-8">Home</li>
                    <li className="px-12">About Us</li>
                    <li className="px-12">Contact Us</li>
                </ul>
                <button className="mr-64 font-bold border-2 px-6 py-4 content-center rounded-2xl border-sky-500">Connect Wallet</button>
            </div>

        </nav>
    )
}