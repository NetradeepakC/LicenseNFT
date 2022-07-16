const License = artifacts.require("License");
const BigNumber = require('bignumber.js');
const RandomUINT256 = require('../scripts/RandomUINT256.js');

contract("License",()=>{
    it('Mint license', async()=>{
        let accounts = await web3.eth.getAccounts();
        var metadataURI = 'cid/test.png';
        const license = await License.new();
        //console.log(accounts);
        var License1;
        while(true){
            try{
                const rand=RandomUINT256.getRandom();
                console.log(rand.toNumber());
                License1 = await BigNumber(await license.safeMint(accounts[1], rand.toNumber(), metadataURI, 10, {from: accounts[0]}));
                break;
            }
            catch(err){
                console.log("!!!");
            }
        }
        console.log(await License1.toNumber());
        //await license.safeBurn(0,{from: accounts[0]});
        await license.addMember(accounts[1], {from: accounts[0]});
        metadataURI = 'cid/test2.png'
        var License2;
        while(true){
            try{
                License2 = await BigNumber(await license.safeMint(accounts[1], RandomUINT256.getRandom().toNumber(), metadataURI, 10, {from: accounts[0]}));
                break;
            }
            catch(err){}
        }
        console.log(await License2.toNumber());
        console.log(await license.tokenURI(0));
        await license.safeBurn(1,{from: accounts[1]});
        // var temp = await BigNumber(await license.pureget10());//works
        // console.log("!!!!!");
        // console.log(await temp.toNumber());
        // await license.get10();
        // temp = await BigNumber(await license.getUINT256());//doesn't
        // console.log("!!!!!");
        // console.log(await temp.toNumber());
    });

    // it('Burn license', async()=>{
    //     const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    //     const metadataURI = 'cid/test.png';
    //     const license = await License.new();
    // });
});
