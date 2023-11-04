import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../App";

const Nav = ({ clickLinkHandler }) => {
  const { cartItems } = useContext(CartContext);

  const ulStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    gap: "1rem",
    margin: "1rem",
  };

  const navStyles = {
    background: "grey",
    fontSize: "20px",
  };

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li onClick={clickLinkHandler}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/games">Games</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/cart">
            <span>Cart</span>
            <div className="cart-icon">{cartItems.length}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  clickLinkHandler: PropTypes.func,
};

export default Nav;
