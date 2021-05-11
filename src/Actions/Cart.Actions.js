import { CART_TYPES } from "../Action.Types/Cart.Types";

//Action to Toggle DropDown
export const toggleCartDropDown = () => (dispatch) => {
  dispatch({ type: CART_TYPES.TOGGLE_CART_DROPDOWN });
};

//Action to Add To Cart
export const addToCart = (item) => (dispatch) => {
  dispatch({ type: CART_TYPES.ADD_TO_CART, payload: item });
};
