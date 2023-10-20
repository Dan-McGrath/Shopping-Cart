import PropTypes from "prop-types";

const Category = ({ name }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <li className="category" style={{ margin: "1em auto" }}>
      {name}
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string,
};

export default Category;
