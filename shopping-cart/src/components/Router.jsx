import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App, { loader as appLoader } from "./App.jsx";
import Cart from "./cart/Cart.jsx";
import Games, { loader as gamesLoader } from "./shopping/Games.jsx";
import Game, { loader as gameLoader } from "./Game.jsx";
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
          path: "games",
          element: <Games />,
          loader: gamesLoader,
          children: [
            {
              path: "game/:gameId",
              element: <Game />,
              loader: gameLoader,
            },
          ],
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
