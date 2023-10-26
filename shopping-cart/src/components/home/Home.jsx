import PropTypes from "prop-types";
import Hero from "./Hero";
import Recommendation from "./Recommendation";

const Home = () => {
  return (
    <>
      <Hero />
      <Recommendation />
    </>
  );
};

Home.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Home;
