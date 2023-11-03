import PropTypes from "prop-types";
import {
  addToCart,
  getCurrentCart,
  removeFromCart,
} from "../../helpers/cart.js";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App.jsx";

export const loader = async () => {
  const currentCart = await getCurrentCart();
  return { currentCart };
};

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.length === 0 ? (
          <p>No games in cart</p>
        ) : (
          cartItems.map((game) => (
            <>
              <li key={game.id}>
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <p>Price: $59.99</p>
              </li>
            </>
          ))
        )}
      </ul>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
