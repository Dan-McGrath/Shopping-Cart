const currentCart = [];

export const addToCart = (game) => {
  currentCart.push({
    id: game.id,
    name: game.name,
    image: game.background_image,
    price: "59.99",
  });
};

export const removeFromCart = (game) => {
  let index = currentCart.indexOf(game);
  currentCart.slice(index, 1);
};

export const getCurrentCart = async () => currentCart;
