import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Game, { loader as gameLoader } from "../games/Game";
import Cart from "../cart/Cart";
import Games, { loader as gamesLoader } from "../games/Games";
import Home from "../home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/games",
          element: <Games />,
          loader: gamesLoader,
        },
        {
          path: "games/game/:gameId",
          element: <Game />,
          loader: gameLoader,
        },

        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
