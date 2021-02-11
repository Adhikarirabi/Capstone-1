import React from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="nav__navitem">
          <NavLink to="/">
            <AiFillHome className="nav__navIcon" />
            <br />
            Home
          </NavLink>
        </li>
        <li className="nav__navitem">
          <NavLink to="/admin">
            <AiFillHome className="nav__navIcon" />
            <br />
            Admin
          </NavLink>
        </li>
        <li className="nav__navitem">
          <NavLink to="/cart">
            <AiOutlineShoppingCart className="nav__navIcon" />
            <br />
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
