import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {

    //console.log(localStorage.getItem('user_info'));

    {(localStorage.getItem('user_info') || '').length > 1
    ? console.log('pass')
    : alert('로그인이 필요합니다.');
    }

    return (
        (localStorage.getItem('user_info') || '').length > 1
        ? <Outlet/>
        : <Navigate to={"/Login"}/>
    );
  }
  
  export default PrivateRoute;