export const addToCartFunction = (cartItems, currentCartItem) => {
  const itemExists = cartItems.find((item) => item.id === currentCartItem.id);
  if (itemExists) {
    return cartItems.map((data) =>
      data.id === currentCartItem.id
        ? { ...data, quantity: data.quantity + 1 }
        : data
    );
  }
  return [...cartItems, { ...currentCartItem, quantity: 1 }];
};
