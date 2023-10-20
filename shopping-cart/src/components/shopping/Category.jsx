import PropTypes from "prop-types";

const Category = ({ name, clickHandler }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <li
      className="category"
      id={name}
      style={{ margin: "1em auto" }}
      onClick={clickHandler}
    >
      {name}
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Category;
