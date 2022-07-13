import React from "react";

export default function Description() {

    return (
        <div className="text-white w-4/6 mx-auto p-8 leading-10">
            <p className="w-4/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda reiciendis,
                tempore totam maxime ab nobis consequatur magnam odio ea harum dignissimos minus ipsum eum 
                cupiditate nesciunt, fuga voluptatibus fugit?
            </p>

            <div className="grid grid-cols-2 w-2/5 gap-y-4 mt-8">
                    <h1 className="font-bold">Contract Address</h1>
                    <p className="justify-self-end">0x49cf...a28b</p>
                    <h1 className="font-bold">Token ID</h1>
                    <p className="justify-self-end">4133</p>
                    <h1 className="font-bold">Blockchain</h1>
                    <p className="justify-self-end">Ethereum</p>
            </div>

        </div>
    );

}