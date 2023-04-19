import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar({status}) {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="file:///Users/fatimayilmaz/Desktop/wbs%20coding%20school/GruppenProjekte/Pokemon/poke_fight_react/public/images/logo.png" alt="" />
          <NavLink exact to="/" className="nav-logo">
            PokeMon
          </NavLink>
          </div>
          

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
              {status?
              <li className="nav-item">
              <NavLink to="/logout"  className="nav-links">
                Log Out
              </NavLink>
            </li>:<>
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
              </>}
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
