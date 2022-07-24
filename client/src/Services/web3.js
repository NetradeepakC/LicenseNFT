//Login Logout Init
import { contractABI , licenseContract} from "./ABI/constants";
import {getRandom16,split16, split16arr} from "./MiscMath"
import Web3 from "web3"
const SmartHome=0
const MobileDevice=1
const Computer=2
const Appliance=3
const Clothing=4
const Car=5

export const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  
  export const web3 =  new Web3(Web3.givenProvider);
  

  const networkID = await web3.eth.net.getId();
  const deployedNetwork = licenseContract.networks[networkID];
  const instance = new web3.eth.Contract(
    licenseContract.abi,deployedNetwork&&deployedNetwork.address
  );
  
  export const loadAccount = async (i) => {
    try{
    const accounts = await web3.eth.getAccounts();
    const account = accounts[i];
    return account;
    }
      catch (err) {
      window.alert(err);
      window.location.reload();
    };
  };

  export const getTokenURI=async (account, parts)=>{
    try{
    await instance.methods.setTokenURI(parts);
    const result=await instance.methods.getTokenURI(parts);
    return result;
    }
      catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const registerUser = async (name, account, isSeller) => {
    try {
    await instance.methods.addUser(name, account, isSeller)
    .send({
      from: account,
    }); 
    }
      catch (err) {
      window.alert(err);
      window.location.reload();
    };
  };

  export const getUser = async (address) => {
    try {   
      const name = await instance.methods.getName().call({from:address});
      return name ;
    }
      catch (err) {
      window.alert(err);
      window.location.reload();
    };
  };

  export const issueNFT = async(fromAddress,name,serialid,toAddress,uri,expiry)=>{
    try{
      var temp=[];
    for(let i=0;i<16;i++){
      temp.push(getRandom16());
    }
    console.log(temp);
          
    await instance.methods.mint(name,serialid,toAddress,temp,uri,expiry).send({from:fromAddress});
  }
  catch (err) {
      window.alert(err);
      //window.location.reload();
    };
  }

  export const retrieveBoughtNFT = async(account)=>{
    try {
      const arr = await instance.methods.getBoughtLicenses().call({from:account,});
      for(var i=0;i<arr.length;i++){
        arr[i]=await BigNumber(arr[i]);
      }
      return split16arr(arr);
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }
  
  export const retrieveIssuedNFT = async(account)=>{
    try {
      const arr = await instance.methods.getIssuedLicenses().call({from:account,});
      return split16arr(arr);
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }
  
  export const retrieveNFTHistory = async(account)=>{
    try {
      const arr = await instance.methods.getOwnerList().call({from:account});
      return arr;
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const getProduct = async(account, tokenId)=>{
    try {
      const result = await instance.methods.getProduct(tokenId).call({from:account,});
      return result;
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const makeSellar = async(account)=>{
    try{
      await instance.methods.makeSellar().send({from:account,});
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const kickSellar = async(account)=>{
    try{
      await instance.methods.kickSellar().send({from:account,});
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const isRegistered = async(account)=>{
    try {
      await instance.methods.isRegistered().call({from:account});
    }
    catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

export const getOwnerList = async(account, tokenId)=>{
  try {
    const result=await instance.methods.getOwnerList().call(tokenId,{from:account});
    return result;
  }
  catch (err) {
    window.alert(err);
    window.location.reload();
  };
}

export const setOnSale = async(account, tokenId)=>{
  try {
    await instance.methods.setOnSale().send(tokenId, {from:account});
  }
  catch (err) {
    window.alert(err);
    window.location.reload();
  };
}

export const takeDownFromSale = async(account, tokenId)=>{
  try {
    await instance.methods.takeDownFromSale().send(tokenId, {from:account});
  }
  catch (err) {
    window.alert(err);
    window.location.reload();
  };
}

export const getCurrentOwner = async(account, tokenId)=>{
  try {
    const result=await instance.methods.getCurrentOwner().call(tokenId,{from:account});
    return result;
  }
  catch (err) {
    window.alert(err);
    window.location.reload();
  };
}