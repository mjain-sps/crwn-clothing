import { CART_TYPES } from "../Action.Types/Cart.Types";

export const toggleCartDropDown = () => (dispatch) => {
  dispatch({ type: CART_TYPES.TOGGLE_CART_DROPDOWN });
};
