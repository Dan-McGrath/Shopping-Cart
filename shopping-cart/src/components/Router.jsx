import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";
import Cart from "./cart/Cart.jsx";
import Shopping from "./shopping/Shopping.jsx";
import Card from "./Card.jsx";
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
          path: "shopping",
          element: <Shopping />,
          children: [
            {
              index: true,
              element: <Shopping />,
            },
            {
              path: "product/:productId",
              element: <Card />,
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
