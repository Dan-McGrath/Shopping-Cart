import PropTypes from "prop-types";

const Category = ({ name, clickHandler }) => {
  return (
    <li
      className="category"
      id={name}
      style={{ margin: "1em auto", cursor: "pointer" }}
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
