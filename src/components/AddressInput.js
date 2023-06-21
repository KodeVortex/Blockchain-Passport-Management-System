import React from 'react';
import './AddressInput.css';
import { Link } from 'react-router-dom';

export let address='';

export default function AddressInput() {
  const handleChange = (e) =>{
    e.preventDefault();
    address = e.target.value; 
    console.log(address);     
  };
  console.log(address);  
  return (
    <div className="addressCard">
      <form action="">
        <h5 style={{ color: "green" }}>Enter the User Address</h5>
        <br />
        <input type="text" name="address" id="address" onChange={handleChange} placeholder="Address" />
        <Link to="/adminView"><button id="sbmt2" type="submit" href="/">
          Submit
        </button></Link>
      </form>
    </div>
  )
}