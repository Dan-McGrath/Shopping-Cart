import PropTypes from "prop-types";

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
