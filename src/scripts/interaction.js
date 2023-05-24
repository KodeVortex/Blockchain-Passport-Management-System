const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/50ebadf7f79845c1952826d9e26a0911`);
const contractAddress = `0xd665b8940f669c03612001cf3fe99e0233db1ad5`;
const contractABI = `[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_gender",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_nationality",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_byear",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bmonth",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bday",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_country",
          "type": "string"
        }
      ],
      "name": "createPassport",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_gender",
          "type": "string"
        }
      ],
      "name": "updatePassport",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "user",
      "outputs": [
        {
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "gender",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "nationality",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "day",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "month",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "year",
              "type": "uint256"
            }
          ],
          "internalType": "struct Passport.Year",
          "name": "dob",
          "type": "tuple"
        },
        {
          "internalType": "string",
          "name": "country",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewPassport",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "firstName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lastName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "gender",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "nationality",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "day",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "month",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "year",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Passport.Year",
              "name": "dob",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "country",
              "type": "string"
            }
          ],
          "internalType": "struct Passport.Person",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`
  
  const passport="";
  const contractInteraction = async () => {
    passport = new ethers.Contract(contractAddress,contractABI,provider);
  }

  export {passport};