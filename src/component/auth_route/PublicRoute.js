import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {

    (localStorage.getItem('user_info') || '').length > 1
    ? console.log('already')
    : console.log('Login'); 

    return (
        (localStorage.getItem('user_info') || '').length > 1
        ? <Navigate to={"/Home"}/>
        : <Outlet/>
    );
  }
  
  export default PublicRoute;