import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header/Header";

const App = () => {
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
      <Outlet />
    </>
  );
};

export default App;
