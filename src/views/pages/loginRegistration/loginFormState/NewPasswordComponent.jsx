import React from "react";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";


const NewPasswordComponent = ({ handleFinalPass, backToLogin }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex gap-2 flex-col items-center">
            <p className="text-semibold-28 text-gray-primary">Set new password</p>
            <h1 className="text-gray-secondary">Must be at least 8 characters.</h1>
          </div>
        </div>
      </div>
      <AppInput label="New password" placeholder="Enter new password" customClass="my-6" />
      <AppInput
        label="Confirm new password"
        placeholder="Reenter your new password"
        customClass="my-6"
      />
      <div className="my-4">
        <p className="text-medium-14 text-gray-secondary">
          Didnt receive the email? <span className="text-semi-14">Click to resend</span>.
        </p>
      </div>
      <div className="flex gap-4 mt-8 mb-4">
        <AppButton
          text="Reset password"
          customClass="btn-primary text-medium-14"
          onClickChange={handleFinalPass}
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

export default NewPasswordComponent;
