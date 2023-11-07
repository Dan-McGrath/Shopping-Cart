import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { Navigation, List, LinkItem, CartIcon } from "./navStyles";

const Nav = ({ clickLinkHandler }) => {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotalItems = () => {
      let newTotal = 0;
      cartItems.forEach((ele) => {
        newTotal += ele.quantity;
      });
      setTotal(newTotal);
    };
    getTotalItems();
  }, [cartItems]);

  return (
    <Navigation>
      <List>
        <LinkItem onClick={clickLinkHandler}>
          <Link to="/">Home</Link>
        </LinkItem>
        <LinkItem onClick={clickLinkHandler}>
          <Link to="/games">Games</Link>
        </LinkItem>
        <LinkItem onClick={clickLinkHandler}>
          <Link to="/cart">
            <span>Cart</span>
            <CartIcon>
              {total > 0 ? <p className="total">{total}</p> : <p></p>}
            </CartIcon>
          </Link>
        </LinkItem>
      </List>
    </Navigation>
  );
};

Nav.propTypes = {
  clickLinkHandler: PropTypes.func,
};

export default Nav;
