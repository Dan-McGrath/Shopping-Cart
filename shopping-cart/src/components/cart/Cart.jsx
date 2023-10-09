import PropTypes from "prop-types";
import Header from "../header/Header";

const Cart = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandle={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>Cart</h1>
    </>
  );
};

Cart.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Cart;
