import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import './index.css';
import App from './App';
import Home from './views/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
