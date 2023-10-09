import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App.jsx";
import Shopping from "./shopping/Shopping.jsx";
import Cart from "./cart/Cart.jsx";

const Router = () => {
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
      //errorElement: <ErrorPage />
    },
    {
      path: "/shopping",
      element: (
        <Shopping
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
      //errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: (
        <Cart
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandler={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
      ),
      //errorElement: <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
