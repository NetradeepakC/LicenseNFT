const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("MyNFT", function() {
    it("Should mint and transfer an NFT to someone", async function() {
        const FiredGuys =await ethers.getContractFactory("LicenseERC721");
        const firedguys = await FiredGuys.deploy();
        await firedguys.deployed();

        const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
        const recipient2 = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
        const metadataURI = 'cid/test.png';
        const metadataURI2 = 'cid/test2.png';
        const metadataURI3 = 'cid/test3.png';

        let balance = await firedguys.balanceOf(recipient);
        expect(balance).to.equal(0);

        const newlyMintedToken =  await firedguys.safeMint(recipient, metadataURI, 10);
        //console.log(newlyMintedToken);
        //console.log("!!!");console.log(firedguys);
        //firedguys.connect(recipient2);
        //console.log("@@@");console.log(firedguys.connect(recipient2));
        const firedguys2 = firedguys.connect(recipient2);
        const newlyMintedToken2 =  await firedguys2.safeMint(recipient2, metadataURI2, 10);
        //console.log(newlyMintedToken2);
        firedguys.addMember(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        const newlyMintedToken3 =  await firedguys2.safeMint(recipient2, metadataURI3, 10);
    })
})