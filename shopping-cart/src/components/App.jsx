import { useState, useEffect, createContext } from "react";
import Header from "./header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchGames } from "../helpers/api";

export const CartContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const loader = async () => {
  const games = await fetchGames();
  return { games };
};

const App = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { games } = useLoaderData();

  const products = games;

  const addToCart = (game) => {
    setCartItems([...cartItems, game]);
  };

  const removeFromCart = (game) => {
    let index = cartItems.indexOf(game);
    let newCart = cartItems.splice(index, 1);
    setCartItems(newCart);
  };

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
      <CartContext.Provider
        value={{ cartItems, products, addToCart, removeFromCart }}
      >
        <Header
          isMobile={isMobile}
          navHandler={navHandler}
          clickLinkHandle={clickLinkHandler}
          navIsOpen={navIsOpen}
        />
        <Outlet />
      </CartContext.Provider>
    </>
  );
};

export default App;
