import React from "react";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";

const ResetPasswordComponent = ({ handleSetNewPassword, backToLogin }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex gap-2 flex-col items-center">
            <p className="text-semibold-28 text-gray-primary">Password reset</p>
            <h1 className="text-gray-secondary">
              We sent a code to <span className="text-bold">zitansalehin@gmail.com</span>.
            </h1>
          </div>
        </div>
      </div>
      <AppInput label="Email" placeholder="Enter your email" customClass="my-6" />
      <div>
        <form action="">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-md border border-gray-secondary text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-purple-light"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-md border border-gray-secondary text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-purple-light"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-md border border-gray-secondary text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-purple-light"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-md border border-gray-secondary text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-purple-light"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-16 h-16 ">
                <input
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-md border border-gray-secondary text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-purple-light"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="my-4">
        <p className="text-medium-14 text-gray-secondary">
          Didnt receive the email? <span className="text-semi-14">Click to resend</span>.
        </p>
      </div>
      <div className="flex gap-4 mt-8 mb-4">
        <AppButton
          text="Continue"
          customClass="btn-primary text-medium-14"
          onClickChange={handleSetNewPassword}
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

export default ResetPasswordComponent;
