import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Login from "../component/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/login",
            element : <Login/>
        }
      ]
    },
  ]);

  export default router