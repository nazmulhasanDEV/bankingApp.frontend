import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import HomePage from "./homePage";


const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <div className="w-[100vw] h-screen flex items-center justify-center">
      <Outlet />
      {pathname==="/" && <HomePage/>}
    </div>
  );
};

export default Layout;
