let currentCart = [];

export const addToCart = (game) => {
  currentCart.push(game);
};

export const removeFromCart = (game) => {
  let index = currentCart.indexOf(game);
  currentCart.slice(index, 1);
};

export const getCurrentCart = async () => currentCart;
