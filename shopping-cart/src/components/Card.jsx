import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ title, price, category, description, image }) => {
  const [quantity, setQuantity] = useState(1);

  category = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="item" style={{ margin: "2em auto" }}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="info">
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <p className="category">{category}</p>
      </div>
      <div className="buttons">
        <button>Add to Cart</button>
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
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
