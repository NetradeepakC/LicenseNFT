const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("MyNFT", function() {
    it("Should mint and transfer an NFT to someone", async function() {
        const FiredGuys =await ethers.getContractFactory("LicenseERC721");
        const firedguys = await FiredGuys.deploy();
        await firedguys.deployed();

        const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const metadataURI = 'cid/test.png'

        let balance = await firedguys.balanceOf(recipient);
        expect(balance).to.equal(0);

        const newlyMintedToken =  await firedguys.safeMint(recipient, metadataURI, 10, 10);
        //console.log(newlyMintedToken);
        const metadataURI2 = 'cid/test2.png'
        const newlyMintedToken2 =  await firedguys.safeMint(recipient, metadataURI2, 20, 10);
        //console.log(newlyMintedToken2);
    })
})