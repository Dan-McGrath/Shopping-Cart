import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import Shopping from "./shopping/Shopping.jsx";
import Cart from "./cart/Cart.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/:name",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
