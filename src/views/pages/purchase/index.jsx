import React from "react";
import { Outlet } from "react-router-dom";

const Purchase = () => {
  return <div className="p-10">Purchase page <Outlet/></div>;
};

export default Purchase;