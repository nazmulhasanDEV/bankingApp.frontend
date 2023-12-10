/* eslint-disable indent */
import React, { useState } from "react";
import MainLogoInvert from "@/assets/common-assets/icon/MainLogoInvert";
import LoginComponent from "./LoginComponent";
import ForgotPasswordComponent from "./ForgotPasswordComponent";
import ResetPasswordComponent from "./ResetPasswordComponent";
import NewPasswordComponent from "./NewPasswordComponent";
import FinalPasswordComponent from "./FinalPasswordComponent";

const Login = () => {
  const passwordRecoveryStates = {
    LOGIN: "LOGIN",
    FORGOT_PASSWORD: "FORGOT_PASSWORD",
    RESET_PASSWORD: "RESET_PASSWORD",
    NEW_PASSWORD: "NEW_PASSWORD",
    FINAL_PASSWORD: "FINAL_PASSWORD"
  };

  const [recoveryState, setRecoveryState] = useState(passwordRecoveryStates.LOGIN);

  const handleForgetPassword = () => setRecoveryState(passwordRecoveryStates.FORGOT_PASSWORD);
  const handleResetPassword = () => {
    if (recoveryState === passwordRecoveryStates.FORGOT_PASSWORD)
      setRecoveryState(passwordRecoveryStates.RESET_PASSWORD);
  };
  const handleSetNewPassword = () => {
    if (recoveryState === passwordRecoveryStates.RESET_PASSWORD)
      setRecoveryState(passwordRecoveryStates.NEW_PASSWORD);
  };
  const handleFinalPass = () => {
    if (recoveryState === passwordRecoveryStates.NEW_PASSWORD)
      setRecoveryState(passwordRecoveryStates.FINAL_PASSWORD);
  };
  const backToLogin = () => setRecoveryState(passwordRecoveryStates.LOGIN);

  let renderComponent;
  switch (recoveryState) {
    case passwordRecoveryStates.LOGIN:
      renderComponent = <LoginComponent handleForgetPassword={handleForgetPassword} />;
      break;
    case passwordRecoveryStates.FORGOT_PASSWORD:
      renderComponent = (
        <ForgotPasswordComponent
          handleResetPassword={handleResetPassword}
          backToLogin={backToLogin}
        />
      );
      break;
    case passwordRecoveryStates.RESET_PASSWORD:
      renderComponent = (
        <ResetPasswordComponent
          handleSetNewPassword={handleSetNewPassword}
          backToLogin={backToLogin}
        />
      );
      break;
    case passwordRecoveryStates.NEW_PASSWORD:
      renderComponent = (
        <NewPasswordComponent handleFinalPass={handleFinalPass} backToLogin={backToLogin} />
      );
      break;
    case passwordRecoveryStates.FINAL_PASSWORD:
      renderComponent = <FinalPasswordComponent />;
      break;
    default:
      renderComponent = null;
  }

  return (
    <div className="w-[30rem]">
      <div className="flex justify-center mb-8">
        <MainLogoInvert />
      </div>
      {renderComponent}
    </div>
  );
};

export default Login;
