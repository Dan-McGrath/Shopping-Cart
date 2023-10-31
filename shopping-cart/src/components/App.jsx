import { Outlet, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header/Header";
import { fetchGenres } from "../apiHelpers/games";

export const loader = async () => {
  const genres = await fetchGenres();
  return { genres };
};

const App = () => {
  const { genres } = useLoaderData();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const navHandler = () => {
    setNavIsOpen(!navIsOpen);
  };

  const clickLinkHandler = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      <Header
        isMobile={isMobile}
        navHandler={navHandler}
        clickLinkHandle={clickLinkHandler}
        navIsOpen={navIsOpen}
      />
      <div className="secondary-nav">
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default App;
