const License = artifacts.require("License");
const BigNumber = require('bignumber.js');

contract("License",()=>{
    it('Mint license', async()=>{
        const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const metadataURI = 'cid/test.png';
        const license = await License.new();
        // const License1 = await BigNumber(await license.safeMint(recipient, metadataURI, 10));
        var temp = await BigNumber(await license.pureget10());//works
        console.log("!!!!!");
        console.log(await temp.toNumber());
        temp = await BigNumber(await license.get10());//doesn't
        console.log("!!!!!");
        console.log(await temp.toNumber());
    });
});
