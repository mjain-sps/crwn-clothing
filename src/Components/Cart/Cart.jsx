import React from "react";
import { ReactComponent as CartLogo } from "../../Assets/shopping-bag.svg";
import "../../CSS/Cart/cartComponent.scss";
import { useDispatch, useSelector } from "react-redux";
//Importing Actions
import { toggleCartDropDown } from "../../Actions/Cart.Actions.js";
function Cart() {
  const dispatch = useDispatch();

  const cartFromState = useSelector((state) => state.cart);
  const { cartItems } = cartFromState;
  //Functions
  const handleToggle = () => {
    dispatch(toggleCartDropDown());
  };
  return (
    <div className="cart-wrapper" onClick={handleToggle}>
      <CartLogo className="cart-logo" />
      <span>{cartItems && cartItems.length}</span>
    </div>
  );
}

export default Cart;
