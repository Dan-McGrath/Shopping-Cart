import { useState, useEffect, createContext } from "react";
import Header from "./header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchGames } from "../helpers/api";

export const CartContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: null,
});

export const loader = async () => {
  const games = await fetchGames();
  return { games };
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { games } = useLoaderData();

  const products = games;

  useEffect(() => {
    const getTotal = () => {
      let newTotal = 0;
      cartItems.forEach((game) => {
        newTotal += Number(game.price * game.quantity);
      });
      setTotal(newTotal);
    };
    getTotal();
  }, [cartItems]);

  const addToCart = (game) => {
    let inCart;
    cartItems.forEach((ele) => {
      if (ele.id === game.id) {
        inCart = true;
      }
    });

    if (inCart) {
      cartItems.forEach((ele) => {
        if (ele.id === game.id) {
          ele.quantity += 1;
          setCartItems([...cartItems]);
        }
      });
    } else {
      game.price = "59.99";
      game.quantity = 1;
      setCartItems([...cartItems, game]);
    }
    //set defult price
  };

  const removeFromCart = (game) => {
    let index = cartItems.indexOf(game);
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cartItems, products, total, addToCart, removeFromCart }}
      >
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
};

export default App;
