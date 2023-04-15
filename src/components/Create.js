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
            <input
              className="fname"
              type="text"
              name="name"
              placeholder="Full name"
            />
            <input type="text" name="name" placeholder="Email" />
            <input type="text" name="name" placeholder="Phone number" />
            <input type="password" name="name" placeholder="Password" />
          </div>
        
          <button id="sbmt" type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
  )
}
