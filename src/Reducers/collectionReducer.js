import shopData from "../Data/shop.data";

const inititalState = {
  collection: shopData,
};

export const collectionReducer = (state = inititalState, action) => {
  switch (action.types) {
    default:
      return state;
  }
};
