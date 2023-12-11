import React from 'react';
import { ArrowRight } from "react-feather";
import { NavLink, Outlet } from "react-router-dom";

const WelcomePage = () => {
  return (
    <NavLink to="/login">
        <span className="flex items-center gap-2">
          <h1 className="text-4xl">Welcome To Banking App</h1>
          <ArrowRight className="w-8 h-8" />
        </span>
      </NavLink>
  )
}

export default WelcomePage