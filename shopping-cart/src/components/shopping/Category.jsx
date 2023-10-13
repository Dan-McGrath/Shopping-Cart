import PropTypes from "prop-types";

const Category = ({ name }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return <li className="category">{name}</li>;
};

Category.propTypes = {
  name: PropTypes.string,
};

export default Category;
