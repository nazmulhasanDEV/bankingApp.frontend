import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isToggle, setIsToggle] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    setIsToggle(true);
  };


  return (
    <SidebarContext.Provider value={{ isOpen, isToggle, toggleSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};