import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import { Outlet } from "react-router-dom";

const Games = () => {
  
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

};

export default Games;
