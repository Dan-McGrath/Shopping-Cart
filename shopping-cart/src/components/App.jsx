import PropTypes from "prop-types";
import Header from "./header/Header";

const App = ({ isMobile, navHandler, clickLinkHandler, navIsOpen }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandle={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <h1>Hello World</h1>
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
