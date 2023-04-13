import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return <>
  <nav className="navbar">
    <div className="container">
      <div className="logo">
      </div>
      <NavLink exact to="/" className="nav-logo">
        PokeMon
      </NavLink>

      <ul>
        <div className="nav-menu-list">
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
      <div className="icon menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </div>
  </nav>



  </>;
}
