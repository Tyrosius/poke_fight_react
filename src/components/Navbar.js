import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo"></div>
          <NavLink exact to="/" className="nav-logo">
            PokeMon
          </NavLink>

          <ul>
            <div className="nav-menu-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/arena" className="nav-links">
                  Arena
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-links">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-links">
                  Register
                </NavLink>
              </li>
            </div>
          </ul>
          <div className="icon menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}