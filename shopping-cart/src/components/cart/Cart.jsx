import PropTypes from "prop-types";
import { getCurrentCart } from "../../helpers/cart.js";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const currentCart = await getCurrentCart();
  return { currentCart };
};

const Cart = () => {
  const { currentCart } = useLoaderData();
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {currentCart.length === 0 ? (
          <p>No games in cart</p>
        ) : (
          currentCart.map((game) => (
            <>
              <li key={game.id}>
                <h2>{game.name}</h2>
                <img src={game.image} alt={game.name} />
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
