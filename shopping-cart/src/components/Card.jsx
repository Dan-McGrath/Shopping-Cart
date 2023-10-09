import PropTypes from "prop-types";

const Card = ({ title, price, category, description, image }) => {
  category = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="item">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div className="info">
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <p className="category">{category}</p>
      </div>
      <div className="buttons"></div>
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
