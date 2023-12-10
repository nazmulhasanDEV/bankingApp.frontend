import React from "react";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";

const ForgotPasswordComponent = ({ handleResetPassword, backToLogin }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex gap-2 flex-col items-center">
            <p className="text-semibold-28 text-gray-primary">Forgot password?</p>
            <h1 className="text-gray-secondary">No worries, We’ll send you reset instructions.</h1>
          </div>
        </div>
      </div>
      <AppInput label="Email" placeholder="Enter your email" customClass="my-6" />
      <div className="flex gap-4 mt-8 mb-4">
        <AppButton
          text="Reset password"
          customClass="btn-primary text-medium-14"
          onClickChange={handleResetPassword}
        />
        <AppButton
          text="Back to log in"
          customClass="btn-outline text-gray-primary text-medium-14"
          onClickChange={backToLogin}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
