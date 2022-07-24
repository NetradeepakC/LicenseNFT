const License = artifacts.require("License");
const BigNumber = require('bignumber.js');
const MiscMath = require('../scripts/MiscMath.js');
const Web3 = require('web3');
const SmartHome=0
const MobileDevice=1
const Computer=2
const Appliance=3
const Clothing=4
const Car=5

contract("License",()=>{
    it('Mint license', async()=>{
        let accounts = await web3.eth.getAccounts();
        var metadataURI = 'cid/test.png';
        var metadataURI2 = 'cid/test2.png';
        const license = await License.new();
        //console.log(accounts);
        //await license.isRegistered();
        await license.addUser("User1",accounts[0], true, {from: accounts[0]});
        await license.addUser("User2",accounts[1], true, {from: accounts[1]});
        console.log(await license.getName());
        var License1;
        while(true){
            try{
                var temp=[];
                for(let i=0;i<16;i++){
                    temp.push(MiscMath.getRandom16());
                }
                console.log(temp);
                await license.mint("Item1",123,accounts[1], temp, metadataURI, 5, MobileDevice, {from: accounts[0]});
                break;
            }
            catch(err){
                console.log(err);
            }
        }
        // while(true){
        //     try{
        //         var temp=[];
        //         for(let i=0;i<16;i++){
        //             temp.push(MiscMath.getRandom16());
        //         }
        //         console.log(temp);
        //         await license.mint("Item1",accounts[1], temp, metadataURI2, 5, {from: accounts[0]});
        //         console.log(await license.getTime());
        //         break;
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
        // }
        await license.setOnSale(temp,{from: accounts[1]});
        var arr=await license.getBoughtLicenses({from: accounts[1]});
        console.log(BigNumber(arr[0]).toNumber());
        console.log("Timer start");
        await new Promise(r => setTimeout(r, 10000));
        console.log("Timer end");
        try{
            await license.setTokenURI(temp);
            console.log(await license.getTokenURI());
            console.log("@");
        }
        catch (err){
        // console.log(await BigNumber(await license.getLast()).toNumber());
        // arr=await license.getBoughtLicenses({from: accounts[1]});
        // console.log("!");
        // console.log(arr);
            console.log(err);
        console.log(await license.getOwnerList(temp));
        console.log(accounts[1]);
        }
        console.log(await BigNumber(await license.getTemp()).toString());
        // await license.addUser("User2",accounts[2], true, {from: accounts[0]});
        // for(var i=0;i<arr.length;i++){
        //     arr[i]=await BigNumber(arr[i]);
        //     console.log(await arr[i].toNumber());
        //     console.log(i);
        // }
        // temp=await MiscMath.split16(arr[0]);
        // console.log(temp);
        // await license.setTokenURI(temp);
        // console.log(await license.getTokenURI());
        // console.log(await license.getProduct(temp));
        // console.log(await license.getOwnerList(temp));
        // await license.setOnSale(temp,{from: accounts[1]});
        // console.log(await license.getCurrentOwner(temp,{from: accounts[2]}));
        // await license.takeDownFromSale(temp,{from: accounts[1]});
        //console.log(await license.getCurrentOwner(temp,{from: accounts[2]}));
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
