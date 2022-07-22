//Login Logout Init
import { contractABI , licenseContract} from "./ABI/constants";
import {getRandom16,split16} from "./MiscMath"
import Web3 from "web3"
import BigNumber from "bignumber.js";

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
  
  export const loadAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
   
    
    return account;
  };

  export const registerUser = async (name,isSeller) => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    const result = await instance.methods.addUser(name,account,isSeller)
    .send({
      from: account,
    }); 
    return result;
  };
  export const getUser = async (address) => {
    // Optional parameter
    if (address === undefined) {
      const accounts = await web3.eth.getAccounts();
      address = accounts[0];
    }
    try {  
        console.log(address)     
        await instance.methods.isRegistered().call({from:address,});
        const name = await instance.methods.getName().call({from:address,});
        return name ;
      }
      catch (err) {
        window.alert(err);
        window.location.reload();
      };
    
   
  };
  export const issueNFT = async()=>{
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    try{
      var temp=[];
    for(let i=0;i<16;i++){
      temp.push(getRandom16());
    }
    console.log(temp);
          
   await instance.methods.mint("nirodh","0x5f1Ea84832A7E264682bF9CeeC2DACcB46D23754",temp,"69421",1).send({from:account,});
  }
  catch (err) {
      window.alert(err);
      // window.location.reload();
    };


  }
  export const retrieveNFT = async(account)=>{
   // try {
      const arr = await instance.methods.getBoughtLicenses().call({from:account,});
      console.log(arr)
      for(var i=0;i<arr.length;i++){
        arr[i]=await BigNumber(arr[i]);
        console.log(await arr[i].toNumber());
        console.log(i);
    }
    var temp=await split16(arr[arr.length-1]);
    console.log(temp);
    console.log(await license.getTokenURI(temp));
    return temp ;
    //}
    // catch (err) {
    //   window.alert(err);
    //   // window.location.reload();
    // };

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