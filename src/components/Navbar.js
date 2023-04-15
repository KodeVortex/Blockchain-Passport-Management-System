import React from 'react'
import Connect from './Connect'
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
export default function Navbar() {
  return (
    <React.Fragment>
        <header>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
    <div className="container">
      <div className="navbar-brand">
        <span style={{ color: "#5e9693" }}>Passport</span>
        <span style={{ color: "#fff",paddingLeft:"3px" }}>Verification</span>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    </React.Fragment>
  );
}
