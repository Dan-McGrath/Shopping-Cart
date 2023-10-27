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
  games: PropTypes.array,
};

export default Home;
