import React from 'react'
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './connect.css'
const ethers = require("ethers")


export default function Connect() {
  const [connect, setConnect] = useState(false);

  const hasWallet = () => {
    if (typeof window.ethereum !== 'undefined') {
      isConnected().then(result => {

        if (result) {
          console.log('Connected to account')
        }
        else {
          swal({
            title : "Disconnected!",
            text : "Connect your wallet to continue."
          });
        }
      });
    }

    else {
      swal('Please install Metamask to connect to this app.');
    }

  };

  const isConnected = () => {
    return window.ethereum.request({ method: 'eth_accounts' })
      .then(accounts => {
        if (accounts.length > 0) {
          console.log("length is : ", accounts.length);
          return true;
        } else {
          console.log("length is : ", accounts.length);
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  };

  if (!connect) {
    hasWallet();
  }

  function connectToMetamask() {
    setConnect(true);
    if (typeof window.ethereum == 'undefined') {
      swal('Please install Metamask to connect to this app.');
    }
    else{
    isConnected().then(async result => {
      if (result) {
        swal({
          title : "Connected",
          text : "Already connected to an account!",
          icon:"success",
          className: "green-overlay"
        });
      }
      else {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(`Connected to ${await signer.getAddress()}`);
      }
    });
  }
  }
  return (
    <button onClick={connectToMetamask} id="wallet-button">Connect</button>

  )
}
