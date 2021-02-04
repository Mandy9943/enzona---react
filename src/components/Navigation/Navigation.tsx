import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation: React.FC<{}> = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <NavLink
            to="/home"
            className="navbar-link"
            activeClassName="nav-active"
          >
            <i className="icon-dashboard"></i>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/notifications"
            className="navbar-link"
            activeClassName="nav-active"
          >
            <i className="icon-notifications-outline"></i>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/friends"
            className="navbar-link"
            activeClassName="nav-active"
          >
            <i className="icon-users"></i>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/config"
            className="navbar-link"
            activeClassName="nav-active"
          >
            <i className="icon-user"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
