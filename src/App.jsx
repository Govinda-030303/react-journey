import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./react_router/Home";
import About from "./react_router/About";
import Carrer from "./react_router/Carrer";
import DashBoard from "./react_router/DashBoard";
import { NavBar } from "./react_router/NavBar";
import ParamComponent from "./react_router/ParamComponent";
import Course from "./react_router/dashboardChild/Course";
import { MockTest } from "./react_router/dashboardChild/MockTest";
import { Report } from "./react_router/dashboardChild/Report";
import NotFound from "./react_router/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Course />
      },
      {
        path: "mocktest",
        element: <MockTest />
      },
      {
        path: "reports",
        element: <Report />,
      },
    ],
  },
  {
    path: "/carrer",
    element: (
      <div>
        <NavBar />,
        <Carrer />
      </div>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <NavBar />,
        <ParamComponent />
      </div>
    ),
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
