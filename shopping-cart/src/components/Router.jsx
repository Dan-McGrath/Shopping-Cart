import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";
import Cart from "./cart/Cart.jsx";
import Games from "./shopping/Games.jsx";
import Game from "./Game.jsx";
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
          path: "games",
          element: <Games />,
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
