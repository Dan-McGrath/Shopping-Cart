import PropTypes from "prop-types";

const Cart = () => {
  return (
    <>
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
