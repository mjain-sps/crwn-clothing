import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/LOGO.svg";
import "../CSS/Headers/header.scss";
function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-logo-container">
        <Logo className="header-logo" />
      </div>
      <div className="header-items">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/signin">SIGN IN</Link>
      </div>
    </div>
  );
}

export default Header;
