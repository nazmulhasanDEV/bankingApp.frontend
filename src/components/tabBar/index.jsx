import React from "react";
import { DollarSign, Globe, Home, LogIn } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";

const TabBar = () => {
  const navLinksData = [
    { to: "/account-home", icon: <Home /> },
    { to: "/account-details", icon: <LogIn /> },
    { to: "/existing-payee", icon: <Globe /> },
    { to: "/others-payee", icon: <DollarSign /> }
  ];
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="flex gap-5 bg-gray-300 px-5">
      {navLinksData.map((link, index) => (
        <NavLink key={index} to={link.to}>
          <div
            className={`p-2 ${pathname === link.to ? "bg-orange-500 text-white" : "text-gray-600"}`}
          >
            {link.icon}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
