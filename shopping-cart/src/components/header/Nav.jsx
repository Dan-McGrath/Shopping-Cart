import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ clickLinkHandler }) => {
  return (
    <nav>
      <ul>
        <li onClick={clickLinkHandler}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/games">Shopping</Link>
        </li>
        <li onClick={clickLinkHandler}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  clickLinkHandler: PropTypes.func,
};

export default Nav;
