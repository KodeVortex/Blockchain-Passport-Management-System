import React from 'react'
const ethers = require("ethers") 


export default function Connect() {
  const isConnected = () =>{ 
    if (typeof window.ethereum !== 'undefined'){
      alert("Connect to the wallet!");
    }
    else {
      alert('Please install Metamask to connect to this dapp.');
    }
  }


  async function connectToMetamask() {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(`Connected to ${await signer.getAddress()}`);

  }
  return (
    <button onClick={connectToMetamask} id="wallet-button">Connect</button>

  )
}

