/*
DATE: 04/12/2023
LAST MODIFIED BY: @@Kishore
*/

//Component to add a form for collecting details of new member to be added to blockchain
import React from 'react';
import './Create.css'
export default function Create() {
  return (
    <div className="main-block">
      <form action="/">
        <div className="title">
          <i className="fas fa-pencil-alt" />
          <h2>Register here</h2>
        </div>
        <div className="info">
          <input type="text" name="fname" placeholder="First name" />
          <input type="text" name="lname" placeholder="Last name" />
          <div className="sameRow">
            <input id="age" type="text" name="age" placeholder="Age" />
            <select id="formGender" name="gender" >
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="sameRow">
          <input type="text" name="nationality" placeholder="Nationality" />
          <input type="text" name="dob" placeholder="DOB" />
          </div>
          <input id="countryField" type="text" name="country" placeholder="Country" />
        </div>

        <button id="sbmt" type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  )
}
