import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import NavigationBar from '../../components/Layout/NavigationBar';

const PrivateRoute = () => {
  return (
    <>
      <NavigationBar/>
      <Outlet />
    </>
    
  )
}


export default PrivateRoute
