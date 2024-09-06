import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import OrderDetails from "../components/OrderDetails/OrderDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path: "/order-details",
          element: <OrderDetails></OrderDetails>
        }

      ]
    },
  ]);

  export default router;