import React from "react";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={`w-[100vw] h-screen flex items-center justify-center  ${pathname === "/" ? "" : "main"} `}>
      <Outlet />
    </div>
  );
};

export default Layout;
