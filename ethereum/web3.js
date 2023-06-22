import Web3 from "web3";
require('dotenv').config();
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://eth-sepolia.g.alchemy.com/v2/XEswdGg1Vw46wb7Ft4VvQbDQv1nboYis"
  );
  web3 = new Web3(provider);
}
 
export default web3;