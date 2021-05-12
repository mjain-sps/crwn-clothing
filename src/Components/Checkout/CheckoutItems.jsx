import React from "react";
import "./CheckoutItems.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../Actions/Cart.Actions";
function CheckoutItems({ cartItems }) {
  const dispatch = useDispatch();

  const handleQuantityIncrement = (itemToBeAdded) => {
    dispatch(addToCart(itemToBeAdded));
  };

  const handleQuantityDecrement = (itemToBeRemoved) => {
    dispatch(removeOneFromCart(itemToBeRemoved));
  };

  const handleClearCartItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      <div className="checkout-items--header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span className="remove-checkout_header">Remove</span>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div className="checkout-items--section">
              <img src={item.imageUrl} alt="checkout-item" />
              <span>{item.name}</span>
              <div className="checkout-quantity">
                <span
                  className="quantity-pointers"
                  onClick={() => handleQuantityIncrement(item)}
                >
                  &#9650;
                </span>
                <span>{item.quantity}</span>
                <span
                  className="quantity-pointers"
                  onClick={() => handleQuantityDecrement(item)}
                >
                  &#9660;
                </span>
              </div>
              <span>${item.price}</span>
              <span
                className="remove-checkout-item"
                onClick={() => handleClearCartItem(item)}
              >
                &#9747;
              </span>
            </div>
            <div className="separator" />
          </div>
        );
      })}
    </div>
  );
}

export default CheckoutItems;
