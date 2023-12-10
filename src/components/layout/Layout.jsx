import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { SidebarProvider } from "./SidebarContext";
import { LoginRegistration } from "@/views/pages";
import { useAuth } from "@/auth/AuthContext";

const Layout = () => {
  const { isLoggedIn, previouslyRegistered } = useAuth();
  return (
    <>
      {(isLoggedIn === true && previouslyRegistered === true) ? (
        <SidebarProvider>
          <div className="flex">
            <Sidebar />
            <main>
              <Topbar />
              <div className="responsive-height">
                <Outlet />
              </div>
            </main>
          </div>
        </SidebarProvider>
      ) : (
        <>
          <LoginRegistration />
          {!previouslyRegistered && <Navigate to="/signup" />}
          {previouslyRegistered && <Navigate to="/login" />}
        </>
      )}
    </>
  );
};

export default Layout;
