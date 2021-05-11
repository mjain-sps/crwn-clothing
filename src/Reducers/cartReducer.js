import { CART_TYPES } from "../Action.Types/Cart.Types";

const initialState = {
  toggleDropdown: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        toggleDropdown: !state.toggleDropdown,
      };

    default:
      return state;
  }
};
