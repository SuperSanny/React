import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => (
  <>
    <Header />
    {/* <Body /> */}
    <Outlet />
    <Footer />
  </>
);
const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
