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

//This function will give back the total of cart items.
export const getCartItemCount = (cartItems) => {
  if (cartItems.length > 0) {
    const qty = cartItems.reduce(
      (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
      0
    );
    return qty;
  }
  return cartItems.length;
};

//Function to remove an item from the cart items

export const removeFromCartFunction = (cartItems, currentCartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== currentCartItem.id);
};

//Function which reduces the cart Quantity by 1, also if qty is already 1, it will remove it from cart

export const removeOneFromCartFunction = (cartItems, currentCartItem) => {
  const itemExists = cartItems.filter(
    (cartItem) => cartItem.id === currentCartItem.id
  );

  if (itemExists && currentCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== currentCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === currentCartItem.id
      ? { ...currentCartItem, quantity: currentCartItem.quantity - 1 }
      : cartItem
  );
};
