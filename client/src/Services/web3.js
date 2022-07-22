//Login Logout Init
import { contractABI , licenseContract} from "./ABI/constants";
import {getRandom16,split16, split16arr} from "./MiscMath"
import Web3 from "web3"

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

  export const issueNFT = async(account)=>{
    try{
      var temp=[];
    for(let i=0;i<16;i++){
      temp.push(getRandom16());
    }
    console.log(temp);
          
  await instance.methods.mint("nirodh","0x5f1Ea84832A7E264682bF9CeeC2DACcB46D23754",temp,"69421",1).send({from:account});
  }
  catch (err) {
      window.alert(err);
      window.location.reload();
    };
  }

  export const retrieveBoughtNFT = async(account)=>{
    try {
      const arr = await instance.methods.getBoughtLicenses().call({from:account,});
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

// let provider = new ethers.providers.Web3Provider(web3.givenProvider);
// let deth = new ethers.Contract(
//   contractAddress,
//   contractABI,
//   provider
// );
// console.log('contract address', contract.address);
// await contract.deployTransaction.wait();


// export const registerUser = async () => {  
//   console.log(contractABI.methods)
//   const contract = new ethers.Contract(contractAddress, contractABI, signer);
//   const tx = await contract.addMember('0x162bC5Fbe704703CEa8e222D2b77cbf82D9d351A');

// };

// export const getUser = async (address) => {
//     // Optional parameter
//     if (address === undefined) {
//       const accounts = await web3.eth.getAccounts();
//       address = accounts[0];
//     }
  
//     try {
//       // const user = await WarrantyNFT_contract.methods.addrToUser(address).call();
//       const contract = new ethers.Contract(contractAddress, abi, provider);
//       const value = await contract.getValue(address);
//       return value;
//     }
//     catch (err) {
//       window.alert("User does not exist");
//       window.location.reload();
//     };
//   };
  
//   export const getUserOnNavbar = async (address) => {
//     const accounts = await web3.eth.getAccounts();
//     address = accounts[0];
//     try {
//       const user = await WarrantyNFT_contract.methods.addrToUser(address).call();
//       return user;
//     }
//     catch (e) {
//       return false;
//     }
//   };
//   export const registerUser = async (name, gender) => {
//     const accounts = await web3.eth.getAccounts();
//     const account = accounts[0];
  
//     const result = await WarrantyNFT_contract.methods
//     .registerUser(name, gender)
//     .send({
//       from: account,
//     });
//     return result;
//   };