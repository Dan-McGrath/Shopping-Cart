import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App, { loader as appLoader } from "./App.jsx";
import Cart from "./cart/Cart.jsx";
import Games, { loader as gameLoader } from "./shopping/Games.jsx";
import Game from "./Game.jsx";
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
          loader: gameLoader,
          children: [
            {
              path: "games/:gameId",
              element: <Game />,
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
