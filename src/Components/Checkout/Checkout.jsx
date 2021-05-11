import React from "react";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";
import CheckoutItems from "./CheckoutItems";
function Checkout() {
  const cartFromState = useSelector((state) => state.cart);
  const { cartItems } = cartFromState;
  return (
    <div className="checkout--wrapper">
      {cartItems && cartItems.length > 0 ? (
        <CheckoutItems cartItems={cartItems} />
      ) : (
        <h5>You have no Items in Cart</h5>
      )}
    </div>
  );
}

export default Checkout;
