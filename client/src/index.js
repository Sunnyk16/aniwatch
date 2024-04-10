import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import './index.css';
import App from './App';
import Home from './views/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Contact from './views/Contact/Contact';

import Login from "./views/Login/Login.js";
import Signupform from "./views/Signup/Signupform.js";
import SearchPage from "./views/SearchPage/SearchPage.js";
import Dashboard from "./views/Dashboard/Dashboard.js";

import ContactsView from "./views/ContactsView/ContactsView.js";
import Feedback from "./components/Feedback/Feedback.js";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/register",
    element: <Signupform/>
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/contact",
    element: <Contact />,
  }, 

  {
    path: "/view-contact",
    element: <ContactsView/>
  },



  {
    path:'/search',
    element:<SearchPage/>
  },
  {
    path:'/feedback',
    element:<Feedback/>
  }
  // {
  //   path: "*",
  //   element: <Home />, 
  // }

  

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="ruby">
    <Toaster />
    <RouterProvider router={router} />
  </div>
);
