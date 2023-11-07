import PropTypes from "prop-types";
import Nav from "./Nav";
import logo from "../../assets/logo.svg";
import { MainHeader, Logo } from "./headerStyles";

const Header = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return isMobile ? (
    navIsOpen ? (
      <header className="nav-mobile">
        <div className="hamburger">
          <div className="close-icon" onClick={navHandler}>
            <p className="sr-only">Close</p>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <Nav clickLinkHandler={clickLinkHandler} />
      </header>
    ) : (
      <header>
        <div className="logo">
          <Logo src={logo} alt="logo"></Logo>
        </div>
        <div className="hamburger">
          <div className="open-icon" onClick={navHandler}>
            <p className="sr-only">Menu</p>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
    )
  ) : (
    <MainHeader>
      <Logo src={logo} alt="logo"></Logo>
      <Nav />
    </MainHeader>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Header;
