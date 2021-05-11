import React from "react";
import "../../CSS/Cart/cartDropDown.scss";
function CartDropDown({ cartItems }) {
  return (
    <div className="cartdropdown-wrapper">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div key={item.id} className="cartdropdown-cartItems">
              <img src={item.imageUrl} />
              <div>
                <span>{item.name}</span>
                <span>
                  $ {item.price} X {item.quantity}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <span>You have no cart Items</span>
      )}
    </div>
  );
}

export default CartDropDown;
