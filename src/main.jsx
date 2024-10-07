import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Pages/login.jsx";
import RegisterPage from "./components/Pages/register.jsx";
import ErrorPage from "./components/Pages/404.jsx";
import Productpage from "./components/Pages/ProductPage.jsx";
import ProfilePage from "./components/Pages/profile.jsx";
import DetailProductPage from "./components/Pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Productpage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/products/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
