import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from '../../pages/Admin'; 
import PrivateRoute from '../PrivateRoute';
import SignIn from '../../pages/SignIn';
import Welcome from '../../pages/Welcome';
import Members from '../../pages/Members';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        path: "member-list",
        element: <Members />,
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
  return (
    <RouterProvider router={router}/>
  )
}


export default Router
