import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { Outlet } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);
  //electronics/jewlery/mens clothing/womens clothing

  return (
    <>
      <h1>Games</h1>
      <Outlet />
      <div className="games"></div>
      <Categories clickHandler={changeCategoryHandler} />
    </>
  );
};

Games.propTypes = {
  isMobile: PropTypes.bool,
  navHandler: PropTypes.func,
  clickLinkHandler: PropTypes.func,
  navIsOpen: PropTypes.bool,
};

export default Games;
