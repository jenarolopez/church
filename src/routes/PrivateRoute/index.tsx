import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavigationBar from "../../components/Layout/NavigationBar";

const PrivateRoute = () => {
  return (
    <div className="min-h-[100vh] flex flex-col bg-pattern bg-no-repeat bg-cover">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
