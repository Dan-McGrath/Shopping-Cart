import PropTypes from "prop-types";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Game = ({ slug, title, rating, genre, image }) => {
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
    <Link to={`product/${slug}`}>
      <div className="item" style={{ margin: "2em auto" }}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <div className="info">
          <p className="price">Rating: {rating}</p>
          <p className="category">{genre}</p>
        </div>
        <div className="product-form">
          <Form>
            {inCart ? (
              <button onClick={removeFromCartHandler}>Remove from Cart</button>
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
    </Link>
  );
};

Game.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.number,
};

export default Game;
