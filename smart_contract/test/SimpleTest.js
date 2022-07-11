const LicenseChain = artifiacts.require("./contracts/LicenseERC721.sol");

// contract("LicenseERC721",()=>{
//     it('Mint license', async()=>{
//         const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
//         const metadataURI = 'cid/test.png';
//         const licensechain = LicenseChain.new();
//         const License1 = await licensechain.safeMint(recipient, metadataURI, 10);
//         console.log(License1);
//     });
// });