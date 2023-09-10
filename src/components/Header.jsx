import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <nav className="nav-container" >
          <NavLink to="/MockBarbers">
            <img className="header-logo" alt="shop-logo" src={logo} ></img>
          </NavLink>
          <ul className="header-list">
            <li>
              <NavLink className="nav-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/barbers">
                Barbers
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
