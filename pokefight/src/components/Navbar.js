import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return <>
  <nav className="navbar">
    <div className="nav-container">
      <NavLink exact to="/" className="nav-logo">
        CodeBucks
      </NavLink>

      <ul>
        <div className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-links">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links">Contact Us</NavLink>
          </li>
        </div>
      </ul>

    </div>
  </nav>


  </>;
}
