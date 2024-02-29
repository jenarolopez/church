import React, { useEffect } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Admin from "../../pages/Admin";
import PrivateRoute from "../PrivateRoute";
import SignIn from "../../pages/Public/SignIn";
import Welcome from "../../pages/Public/Welcome";
import Members from "../../pages/Admin/Members";
// import Member from "../../pages/Admin/Members/View";
import { useSelector } from "react-redux";
import { BookmarkIcon } from "@heroicons/react/16/solid";
import { getLoading } from "../../reducer/loading/loadingSlice";
import Member from "../../pages/Admin/Member";
import { store } from "../../store";
import Cookies from "js-cookie";
import { publicRequest } from "../../request/request";
import PublicRoute from "../PublicRoute";
import AboutUs from "../../pages/Public/About-us";

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
    loader: async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const validateResult = await publicRequest.validateToken();
          return redirect("/admin/members");
        } catch (e) {}
      }
      return false;
    },
  },
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

const Router = () => {
  const loading = useSelector(getLoading);
  useEffect(() => {
    if (loading.loading) {
      document
        .getElementsByClassName("App")[0]
        .classList.add("pointer-events-none");
    } else {
      document
        .getElementsByClassName("App")[0]
        .classList.remove("pointer-events-none");
    }
  }, [loading.loading]);
  return (
    <>
      {loading.loading && (
        <>
          <div className="absolute h-full w-full bg-slate-700 z-[100] opacity-50 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-slate-500 h-40 w-40 flex flex-col justify-center items-center gap-5 rounded">
            <span className="text-slate-100 font-bold font-pop text-center flex text-lg">
              {loading.text} <br /> Please wait
            </span>
            <span className="flex flex-col">
              <BookmarkIcon className="w-10 h-10 animate-bounce text-white z-10" />
              <span className="w-10  shadow-inner rounded-full h-4 -translate-y-3"></span>
            </span>
          </div>
        </>
      )}
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
