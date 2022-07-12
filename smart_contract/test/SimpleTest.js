const License = artifacts.require("License");

contract("License",()=>{
    it('Mint license', async()=>{
        const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const metadataURI = 'cid/test.png';
        const license = await License.new();
        const License1 = await license.safeMint(recipient, metadataURI, 10);
        console.log(License1);
    });
});
