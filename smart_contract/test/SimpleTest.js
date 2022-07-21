const License = artifacts.require("License");
const BigNumber = require('bignumber.js');
const MiscMath = require('../scripts/MiscMath.js');
const Web3 = require('web3');

contract("License",()=>{
    it('Mint license', async()=>{
        let accounts = await web3.eth.getAccounts();
        var metadataURI = 'cid/test.png';
        var metadataURI2 = 'cid/test2.png';
        const license = await License.new();
        //console.log(accounts);
        var License1;
        while(true){
            try{
                var temp=[];
                for(let i=0;i<16;i++){
                    temp.push(MiscMath.getRandom16());
                }
                console.log(temp);
                License1=(await BigNumber(await license.mint(accounts[1], temp, metadataURI, 2, {from: accounts[0]})));
                console.log(License1.toString());
                break;
            }
            catch(err){
                console.log(err);
            }
        }
        while(true){
            try{
                var temp=[];
                for(let i=0;i<16;i++){
                    temp.push(MiscMath.getRandom16());
                }
                console.log(temp);
                License1=(await BigNumber(await license.mint(accounts[1], temp, metadataURI2, 2, {from: accounts[0]})));
                console.log(License1.toString());
                break;
            }
            catch(err){
                console.log(err);
            }
        }
        License1=(await BigNumber(await license.getUINT256()));
        console.log(await License1.toNumber());
        temp=await MiscMath.split16(License1);
        console.log(temp);
        // console.log("Timer start");
        // await new Promise(r => setTimeout(r, 4000));
        // console.log("Timer end");
        console.log(await license.getTokenURI(temp));
        var arr=await license.getBoughtLicenses({from: accounts[1]});
        for(var i=0;i<arr.length;i++){
            arr[i]=await BigNumber(arr[i]);
            console.log(await arr[i].toNumber());
            console.log(i);
        }
        // console.log(await license.tokenURI(await license.getUINT256()));
        // await license.safeBurn(MiscMath.split16(License1),{from: accounts[0]});
        // await license.addMember(accounts[1], {from: accounts[0]});
        // metadataURI = 'cid/test2.png'
        // var License2;
        // while(true){
        //     try{
        //         var temp=[];
        //         for(let i=0;i<16;i++){
        //             temp.push(MiscMath.getRandom16());
        //         }
        //         await license.mint(accounts[1], temp, metadataURI, 10, {from: accounts[0]});
        //         break;
        //     }
        //     catch(err){
        //         console.log("!!!");
        //     }
        // }
        // License2=(await BigNumber(await license.getUNT256()));
        // console.log(await License2.toNumber());
        // console.log(await license.tokenURI(0));
        // await license.safeBurn(1,{from: accounts[1]});
    });
});
