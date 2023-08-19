import React from "react";
import styled from "styled-components";

import "./styles/Navbar.scss"

import companyLogo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="#">
            <img src={companyLogo} alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex justify-content-between" style={{width: '80%', padding: '0 20%'}}>
              <li className="nav-item">
                <a className="nav-link ms-5 nav-buttons" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-buttons" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5 nav-buttons" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-light" type="submit">
                Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
