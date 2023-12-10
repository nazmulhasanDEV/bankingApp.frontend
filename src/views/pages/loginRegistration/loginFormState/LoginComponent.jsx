import React from "react";
import { Divider } from "antd";
import AppButton from "@/components/ui/AppButton";
import google from "@/assets/common-assets/images/Google.png";
import AppInput from "@/components/ui/AppInput";
import { useAuth } from "@/auth/AuthContext";

const LoginComponent = ({ handleForgetPassword }) => {
  const { login } = useAuth();
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex gap-2 flex-col items-center">
            <p className="text-semibold-28 text-gray-primary">Welcome Back</p>
            <h1 className="text-gray-secondary">Enter your credentials to access your account</h1>
          </div>
          <div className="flex w-full">
            <AppButton
              icon={<img src={google} alt="" />}
              text="Login with Google"
              customClass="btn-outline"
            />
          </div>
        </div>
        <Divider>
          <p className="text-semibold-16 text-gray-secondary">or</p>
        </Divider>
      </div>
      <AppInput label="Email" placeholder="Your email" customClass="mb-5" />
      <span>
        <AppInput label="Password" placeholder="Your password" />
        <div className="flex justify-end">
          <button onClick={handleForgetPassword}>
            <p className="text-medium-14 text-blue-soft mt-1 cursor-pointer">Forgot password?</p>
          </button>
        </div>
      </span>
      <div className="flex w-full mt-8 mb-4">
        <AppButton text="Log in" customClass="btn-primary text-medium-14" onClickChange={login} />
      </div>
      <div>
        <span className="flex gap-2 items-center justify-start">
          <p className="text-medium-14 text-gray-primary">Not a member?</p>

          <p className="text-semi-14 text-purple-primary cursor-pointer">SIGN UP</p>
        </span>
      </div>
    </div>
  );
};

export default LoginComponent;
