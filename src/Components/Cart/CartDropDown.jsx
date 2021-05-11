import React from "react";
import "../../CSS/Cart/cartDropDown.scss";
import CustomButton from "../CustomButton";
import { withRouter } from "react-router-dom";
import { toggleCartDropDown } from "../../Actions/Cart.Actions.js";
import { useDispatch } from "react-redux";
function CartDropDown({ cartItems, history }) {
  const dispatch = useDispatch();
  return (
    <div className="cartdropdown">
      {cartItems && cartItems.length > 0 ? (
        <div className="cartdropdown-wrapper">
          {cartItems.map((item) => {
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
          })}
          <div>
            <CustomButton
              matter="CHECKOUT"
              type="button"
              disabled={cartItems && cartItems.length === 0}
              onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartDropDown());
              }}
            />
          </div>
        </div>
      ) : (
        <span>You have no cart Items</span>
      )}
    </div>
  );
}

export default withRouter(CartDropDown);
{
}
