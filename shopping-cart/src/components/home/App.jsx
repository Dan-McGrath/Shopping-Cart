import PropTypes from "prop-types";
import Header from "../header/Header";
import Hero from "./Hero";

const App = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandle={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <Hero />
    </>
  );
};

App.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default App;
