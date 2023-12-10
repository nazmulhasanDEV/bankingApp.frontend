import React from "react";
import { Outlet } from "react-router-dom";

const Sales = () => {
  return (
    <div className="p-10">
      Sales page
      <Outlet />
    </div>
  );
};

export default Sales;
