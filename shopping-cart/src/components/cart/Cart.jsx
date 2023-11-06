import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../App.jsx";
import { Title, List, ListItems, CartWrapper, Total } from "./styles.js";

const Cart = () => {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <CartWrapper>
      <Title>Cart</Title>
      <List>
        {cartItems.length === 0 ? (
          <p>No games in cart</p>
        ) : (
          cartItems.map((game) => (
            <>
              <ListItems key={game.id}>
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <p>Price: ${game.price}</p>

                <button
                  className="remove-game"
                  type="button"
                  onClick={() => removeFromCart(game)}
                >
                  Remove from Cart
                </button>
              </ListItems>
            </>
          ))
        )}
      </List>
      <Total>Total: ${total}</Total>
    </CartWrapper>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
