import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as appLoader } from "../App";
import ErrorPage from "./ErrorPage";
import Game, { loader as gameLoader } from "../games/Game";
import Cart from "../cart/Cart";
import Games from "../games/Games";
import Home from "../home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: appLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/games",
          element: <Games />,
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
