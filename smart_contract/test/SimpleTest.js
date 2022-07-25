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

split16 = function(bgn) {
    let base=1<<16;
    var split=[];
    while(!bgn.isEqualTo(0)){
        split.push((bgn.modulo(base)).toNumber());
        bgn=bgn.dividedToIntegerBy(base);
    }
    return split;
};

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
        while(true){
            try{
                var temp=[];
                for(let i=0;i<16;i++){
                    temp.push(MiscMath.getRandom16());
                }
                console.log(temp);
                await license.mint("Item1", 234,accounts[1], temp, metadataURI2, 500, SmartHome, {from: accounts[0]});
                break;
            }
            catch(err){
                console.log(err);
            }
        }
        await license.setOnSale(temp,{from: accounts[1]});
        var arr=await license.getBoughtLicenses({from: accounts[1]});
        for(var i=0;i<arr.length;i++){
            console.log(BigNumber(arr[i]).toNumber());
        }
        console.log("Timer start");
        await new Promise(r => setTimeout(r, 10000));
        console.log("Timer end");
        var arr=await license.getBoughtLicenses({from: accounts[1]});
        // if(await !license.isDeleted(temp)){
        arr=await license.getBoughtLicenses({from: accounts[1]});
        for(var i=0;i<arr.length;i++){
            await license.setTokenURI(split16(BigNumber(arr[i])), { from: accounts[0], gas: 5000000, gasPrice: 500000000 });
        }
        arr=await license.getBoughtLicenses({from: accounts[1]});
        for(var i=0;i<arr.length;i++){
            console.log(BigNumber(arr[i]).toNumber());
        }
        // }
        // else{
        //     console.log("Fuck")
        // }
    });
});
