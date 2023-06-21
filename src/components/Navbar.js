import React from 'react';
import Compass from './Compass';
import Connect from './Connect';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <React.Fragment>
      <header>
        <div className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
          <Compass />
          
          <div className="container">
            <div className="navbar-brand">
              <span style={{ color: "#5e9693" }}>Passport</span>
              <span style={{ color: "#fff", paddingLeft: "3px" }}>Verification</span>
            </div>
          </div>
          
          <div className="user">
          <Link to="/"><p>Admin</p></Link>
          </div>
          <div className="user">
          <Link to="/userHome"><p>User</p></Link>
          </div>
     
          <Connect />
        </div>

      </header>
    </React.Fragment>
  );
}
