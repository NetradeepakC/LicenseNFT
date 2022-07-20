//Login Logout Init
import { License_ABI } from "./ABI/License";
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
export const web3 = new Web3(Web3.givenProvider);

export const loadAccount = async () => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  return account;
};
//Contracts init 
const WarrantyNFT_contract = new web3.eth.Contract(
    License_ABI
  );


//Account related

// export const getUser = async (address) => {
//     // Optional parameter
//     if (address === undefined) {
//       const accounts = await web3.eth.getAccounts();
//       address = accounts[0];
//     }
  
//     try {
//       const user = await WarrantyNFT_contract.methods.addrToUser(address).call();
//       return user;
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