import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/LOGO.svg";
import "../CSS/Headers/header.scss";

import Cart from "./Cart/Cart";
import CartDropDown from "./Cart/CartDropDown";
import { useSelector } from "react-redux";
function Header() {
  const cartFromState = useSelector((state) => state.cart);
  const { toggleDropdown } = cartFromState;

import { auth } from "../Firebase/firebase.utils";
function Header({ currentUser }) {
  console.log(currentUser);

  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo-container">
          <Link to="/">
            {" "}
            <Logo className="header-logo" />
          </Link>
        </div>
        <div className="header-items">
          <Link to="/shop">SHOP</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/signin">SIGN IN</Link>
          <div className="cart-logo">
            <Cart />
          </div>
        </div>
      </div>

      {toggleDropdown ? (
        <div>
          <CartDropDown />
        </div>
      ) : (
        ""
      )}
    </>

      <div className="header-items">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <div>
            <span onClick={() => auth.signOut()}>SIGN OUT</span>
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>

  );
}

export default Header;
