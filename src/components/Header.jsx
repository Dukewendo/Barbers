import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <NavLink className="nav-item" to="/">
        <h2 className="header-title">Joe's Barber Shop</h2>
      </NavLink>

      <header>
        <nav className="header-nav">
          <ul className="header-list">
            <li>
              <NavLink
                className="nav-item"
                to="/about"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
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
