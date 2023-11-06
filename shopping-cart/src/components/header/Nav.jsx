import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../App";
import { Navigation, List } from "./navStyles";

const Nav = ({ clickLinkHandler }) => {
  const { cartItems } = useContext(CartContext);

  const getTotalItems = () => {
    let total = 0;
    cartItems.forEach((ele) => {
      total += ele.quantity;
    });
    return total;
  };

  return (
    <Navigation>
      <List>
        <li onClick={clickLinkHandler}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/games">Games</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/cart">
            <span>Cart</span>
            <div className="cart-icon">{getTotalItems()}</div>
          </Link>
        </li>
      </List>
    </Navigation>
  );
};

Nav.propTypes = {
  clickLinkHandler: PropTypes.func,
};

export default Nav;
