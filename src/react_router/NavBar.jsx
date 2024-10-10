import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link-home" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link-about" : "")}
          >
            About
          </NavLink>
        </li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li>
          <Link to="/carrer">Carrer</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
