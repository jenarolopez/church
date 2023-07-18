import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "../../pages/Admin";
import PrivateRoute from "../PrivateRoute";
import SignIn from "../../pages/SignIn";
import Welcome from "../../pages/Welcome";
import Members from "../../pages/Admin/Members";
import Member from "../../pages/Admin/Members/View";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "members/view/:id",
        element: <Member />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Welcome />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
