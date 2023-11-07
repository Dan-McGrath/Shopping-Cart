import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../App.jsx";
import {
  GameTitle,
  Title,
  List,
  ListItems,
  CartWrapper,
  Total,
  GameImg,
  GameWrapper,
  GamePrice,
  GameRightWrapper,
  RemoveButton,
  Quantity,
} from "./styles.js";

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
                <GameTitle>{game.name}</GameTitle>
                <GameWrapper>
                  <GameImg
                    src={game.background_image}
                    alt={game.name}
                  ></GameImg>
                  <GameRightWrapper>
                    <GamePrice>Price: ${game.price}</GamePrice>
                    <Quantity>Quantity: {game.quantity}</Quantity>
                    <RemoveButton
                      className="remove-game"
                      type="button"
                      onClick={() => removeFromCart(game)}
                    >
                      Remove from Cart
                    </RemoveButton>
                  </GameRightWrapper>
                </GameWrapper>
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
