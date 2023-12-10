import React from "react";
import { Popover } from "antd";
import Profile from "@/assets/common-assets/images/defaultProfile.png";
import ProfilePopOver from "@/assets/common-assets/images/profileBig.png";
import { Mail, Share, User } from "react-feather";
import AppButton from "../AppButton";
import { useAuth } from "@/auth/AuthContext";
import { NavLink } from "react-router-dom";

const AppAvatar = () => {
  const { logout, isLoggedIn } = useAuth();

  const employeeData = {
    imgSrc: ProfilePopOver,
    name: "User Name One",
    email: "userrnameone@email.com"
  };

  const Content = (
    <div>
      <div>
        <div className="bg-white-primary p-3 w-[18rem]">
          <div className="flex flex-col gap-4 px-6 py-5 rounded-md bg-purple-soft">
            <div className="flex justify-center text-center">
              {isLoggedIn ? (
                <img src={employeeData.imgSrc} alt={employeeData.name} className="rounded-full" />
              ) : (
                <span className="p-3 bg-purple-primary rounded-full">
                  <User className="w-8 h-8 text-white-primary" />
                </span>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <h1>{employeeData.name}</h1>
              </div>
              <div className="flex gap-2 items-center rounded-md text-center text-gray-primary text-normal-14">
                <span>
                  <Mail className="text-gray-primary w-4 h-4" />
                </span>
                <span>{employeeData.email}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <NavLink to="/profile">
                <AppButton customClass="btn-primary" text="View profile" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="horizontal-divider my-3" />
        <div className="flex justify-between px-2 mt-2">
          <button onClick={logout}>
            <p className="text-normal-14 text-red-secondary cursor-pointer">Sign out</p>
          </button>
          <button onClick={logout}>
            <Share className="w-6 h-6 text-red-secondary rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative">
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full cursor-pointer"></span>
        <Popover placement="bottomLeft" content={Content} trigger="click">
          <img className="rounded-full cursor-pointer" src={Profile} alt="" />
        </Popover>
      </div>
    </div>
  );
};

export default AppAvatar;
