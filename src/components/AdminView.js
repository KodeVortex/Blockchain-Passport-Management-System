/*
DATE: 04/12/2023
LAST MODIFIED BY: @@Kishore
*/

//Create card for giving id for searching a passport.
import React,{useState,useEffect} from 'react';
import swal from 'sweetalert';
import  './View.css';
import { address } from './AddressInput';
const ethers = require ('ethers');

let userAddress;
export default function View() {
  
  const contractAddress =  "0x77D8d510934561b0C2cd774A3F7eeb2050B177b5";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractABI = ` [
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
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [],
      "name": "ADMIN",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userId",
          "type": "address"
        }
      ],
      "name": "adminViewPassport",
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
      "name": "userViewPassport",
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
  const passport = new ethers.Contract(contractAddress,contractABI,signer);

  //creating empty object for UI.
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    nationality: '',
    dob: '',
    country: ''
  });

  //Fetching Data.
  // Call the viewPassport() function to fetch the passport details
  useEffect(() => {
      userAddress = address;
      fetchData();
    });
  const fetchData = async()=>{
    try{
      const fetchedUserData = await passport.adminViewPassport(userAddress);
      const formattedUserData = formatUserData(fetchedUserData);
      setUserData(formattedUserData);
      console.log(formattedUserData);
      const address = await signer.getAddress();
      console.log("address is : ",address);
    } catch (error) {
      swal({
        title: 'Action can only be performed by concerned officials',
        icon:"error"
      })
    }
  };

// Format the fetched user data to handle BigNumber objects
const formatUserData = (data) => {
  const formattedData = {
    firstName: data[0] || '',
    lastName: data[1] || '',
    gender: data[2] || '',
    age: data[3]?.toString() || '',
    nationality: data[4] || '',
    dob: {
      day: data[5][0]?.toString() || '',
      month: data[5][1]?.toString() || '',
      year: data[5][2]?.toString() || ''
    },
    country: data[6] || ''
  };

  return formattedData;
};

  //Setting fetched data to UI.

  return (
    <div className="verifyCard">
      <div className="textBox">
        <p>Name : {userData.firstName +" "+ userData.lastName}</p><br/>
        <p>Gender : {userData.gender}</p><br/>
        <p>Age : {userData.age}</p><br/>
        <p>Nationality : {userData.nationality}</p><br/>
        <p>DOB : {userData.dob.day<10 ? "0"+userData.dob.day:userData.dob.day}/{userData.dob.month<10 ? "0"+userData.dob.month:userData.dob.month}/{userData.dob.year}</p><br/>
        <p>Country of Issue : {userData.country}</p>
      </div>
    </div>    
  );
}