import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Shopping from "../shopping/Shopping";
import Cart from "../cart/Cart";
import Contact from "./Contact";
import Recommendation from "./Recommendation";
import ErrorPage from "../ErrorPage";

const Home = () => {
  const { name } = useParams();
  return (
    <>
      {name === "shopping" ? (
        <Shopping />
      ) : name === "cart" ? (
        <Cart />
      ) : (
        <ErrorPage />
      )}
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
