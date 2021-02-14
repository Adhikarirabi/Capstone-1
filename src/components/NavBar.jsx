import React, { useContext } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";

const NavBar = () => {
  let cartData = useContext(CartContext);
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
            <RiAdminLine className="nav__navIcon" />
            <br />
            Admin
          </NavLink>
        </li>
        <li className="nav__navitem">
          <NavLink to="/cart">
            <AiOutlineShoppingCart className="nav__navIcon" />
            <br />
            Cart ({cartData.cart.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
