const currentCart = [];

export const addToCart = (id, name, image, price = "$59.99") => {
  currentCart.push({ id: id, name: name, image: image, price: price });
};

export const removeFromCart = (game) => {
  let index = currentCart.indexOf(game);
  currentCart.slice(index, 1);
};

export const getCurrentCart = async () => currentCart;
