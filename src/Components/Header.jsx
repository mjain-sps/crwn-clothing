import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/LOGO.svg";
import "../CSS/Headers/header.scss";
import { auth } from "../Firebase/firebase.utils";
function Header({ currentUser }) {
  console.log(currentUser);
  return (
    <div className="header-wrapper">
      <div className="header-logo-container">
        <Logo className="header-logo" />
      </div>
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
