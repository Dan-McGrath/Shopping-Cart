import PropTypes from "prop-types";
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { fetchGame } from "../apiHelpers/games";

export const loader = async ({ params }) => {
  const game = await fetchGame(params.gameId);
  return { game };
};

const Game = () => {
  const { game } = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const addToCartHandler = (e) => {
    e.preventDefault();
    setInCart(true);
  };

  const removeFromCartHandler = (e) => {
    e.preventDefault();
    setInCart(false);
  };

  return (
    <div className="game" style={{ margin: "2em auto" }}>
      {game.map((ele) => (
        <div key={ele.id}>
          <h3>{ele.name}</h3>
          <img src={ele.background_image} alt={ele.title} />
          <div className="info">
            <p className="rating">Rating: {ele.rating}</p>
            <p className="released">Released: {ele.released}</p>
          </div>
          <div className="product-form">
            <Form>
              {inCart ? (
                <button onClick={removeFromCartHandler}>
                  Remove from Cart
                </button>
              ) : (
                <button onClick={addToCartHandler}>Add to Cart</button>
              )}
            </Form>
            <Form>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form>
          </div>
        </div>
      ))}
    </div>
  );
};

Game.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  released: PropTypes.string,
};

export default Game;
