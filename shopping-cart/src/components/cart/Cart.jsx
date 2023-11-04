import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../App.jsx";

const Cart = () => {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

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
                <p>Price: ${game.price}</p>
              </li>
              <button
                className="remove-game"
                type="button"
                onClick={() => removeFromCart(game)}
              >
                Remove from Cart
              </button>
            </>
          ))
        )}
      </ul>
      <div className="total">Total: ${total}</div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
