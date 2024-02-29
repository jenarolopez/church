import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavigationBar from "../../components/Layout/NavigationBar";
import Header from "../../pages/Public/Layout/header";
import Footer from "../../pages/Public/Layout/footer";

const PublicRoute = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default PublicRoute;
