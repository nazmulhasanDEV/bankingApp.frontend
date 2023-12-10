import React from "react";
import LoginPage from "@/assets/common-assets/images/LoginPage.png";
import Login from "./loginFormState/Login";
import { useAuth } from "@/auth/AuthContext";
import SignUp from "./signUpFormState/SignUp";

const LoginRegistration = () => {
  const { previouslyRegistered } = useAuth();
  return (
    <div>
      {previouslyRegistered ? (
        <div className="flex p-5">
          <div className="flex justify-center items-center w-1/2">
            <img src={LoginPage} alt="" className="flex w-[80%] h-[95vh]" />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Login />
          </div>
        </div>
      ) : (
        <>
          <SignUp />
        </>
      )}
    </div>
  );
};

export default LoginRegistration;
