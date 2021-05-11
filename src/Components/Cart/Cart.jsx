import React from "react";
import { ReactComponent as CartLogo } from "../../Assets/shopping-bag.svg";
import "../../CSS/Cart/cartComponent.scss";
import { useDispatch } from "react-redux";
//Importing Actions
import { toggleCartDropDown } from "../../Actions/Cart.Actions.js";
function Cart() {
  const dispatch = useDispatch();

  //Functions
  const handleToggle = () => {
    dispatch(toggleCartDropDown());
  };
  return (
    <div className="cart-wrapper" onClick={handleToggle}>
      <CartLogo className="cart-logo" />
      <span>1</span>
    </div>
  );
}

export default Cart;
