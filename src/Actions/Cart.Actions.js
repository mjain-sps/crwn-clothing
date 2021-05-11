import { CART_TYPES } from "../Action.Types/Cart.Types";

//Action to Toggle DropDown
export const toggleCartDropDown = () => (dispatch) => {
  dispatch({ type: CART_TYPES.TOGGLE_CART_DROPDOWN });
};

//Action to Add To Cart
export const addToCart = (item) => (dispatch) => {
  dispatch({ type: CART_TYPES.ADD_TO_CART, payload: item });
};

//Action to Remove from Cart
export const removeFromCart = (item) => (dispatch) => {
  dispatch({ type: CART_TYPES.REMOVE_FROM_CART, payload: item });
};

//Action which reduces the Quantity of item by 1
export const removeOneFromCart = (item) => (dispatch) => {
  dispatch({ type: CART_TYPES.REMOVE_ONE_FROM_CART, payload: item });
};
