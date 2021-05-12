import { CART_TYPES } from "../Action.Types/Cart.Types";
import {
  addToCartFunction,
  removeFromCartFunction,
  removeOneFromCartFunction,
} from "./Utils/cart.utils";
const initialState = {
  toggleDropdown: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        toggleDropdown: !state.toggleDropdown,
      };

    case CART_TYPES.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCartFunction(state.cartItems, action.payload),
      };

    case CART_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCartFunction(state.cartItems, action.payload),
      };

    case CART_TYPES.REMOVE_ONE_FROM_CART:
      return {
        ...state,
        cartItems: removeOneFromCartFunction(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
