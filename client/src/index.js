import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";

import Home from "./views/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from "./views/Login/Login.js";
import Signup from "./views/Signup/SignUp.js";


import Contact from "./views/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/register",
    element: <Signup />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
