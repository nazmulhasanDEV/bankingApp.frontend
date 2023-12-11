import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import WelcomePage from "./welcomePage";

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <div className="w-[100vw] h-screen flex items-center justify-center">
      <Outlet />
      {pathname==="/" && <WelcomePage/>}
    </div>
  );
};

export default Layout;
