/* eslint-disable indent */
import React, { useReducer } from "react";
import { Divider } from "antd";
import LoginPage from "@/assets/common-assets/images/LoginPage.png";
import SignUpPage from "@/assets/common-assets/images/SignUpPage.png";
import AppButton from "@/components/ui/AppButton";
import google from "@/assets/common-assets/images/Google.png";
import AppInput from "@/components/ui/AppInput";
import { useAuth } from "@/auth/AuthContext";
import SignUpFirstStep from "@/assets/common-assets/icon/SignUpFirstStep";
import SignUpSecondStep from "@/assets/common-assets/icon/SignUpSecondStep";

const SignUp = () => {
  const { signUp, login } = useAuth();

  const signUpReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FOR_SECOND":
        return { ...state, signUpPage: false, signUpPageSecond: true, signUpPageThird: false };
      case "CHANGE_FOR_THIRD":
        return { ...state, signUpPage: false, signUpPageSecond: false, signUpPageThird: true };
      case "ON_BACK":
        return { ...state, signUpPage: false, signUpPageSecond: true, signUpPageThird: false };
      default:
        return state;
    }
  };
  const initialState = {
    signUpPage: true,
    signUpPageSecond: false,
    signUpPageThird: false
  };

  const [state, dispatch] = useReducer(signUpReducer, initialState);

  const { signUpPage, signUpPageSecond, signUpPageThird } = state;

  const changeForSecond = () => dispatch({ type: "CHANGE_FOR_SECOND" });
  const changeForThird = () => dispatch({ type: "CHANGE_FOR_THIRD" });
  const onBack = () => dispatch({ type: "ON_BACK" });
  return (
    <div className="">
      {signUpPage === true && (
        <div className="flex p-5">
          <div className="flex justify-center items-center w-1/2">
            <img src={LoginPage} alt="" className="flex w-[80%] h-[95vh]" />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[30rem]">
              <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-10">
                  <div className="flex gap-2 flex-col items-center">
                    <p className="text-semibold-28 text-gray-primary">Create your account</p>
                    <h1 className="text-gray-secondary">
                      Let’s get started with your 30 days free trial
                    </h1>
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
              <AppInput label="Name" placeholder="Enter your name" customClass="my-3" />
              <AppInput label="Email" placeholder="Enter your email" customClass="my-3" />
              <AppInput label="Password" placeholder="Enter your password" customClass="my-3" />
              <div className="flex items-start space-x-3 my-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                <div className="flex flex-col">
                  <p className="text-medium-14 text-gray-secondary">
                    I agree to all Term Privacy Policy{" "}
                  </p>
                </div>
              </div>
              <div className="flex w-full mb-1">
                <AppButton
                  text="Sign up"
                  customClass="btn-primary text-medium-14"
                  onClickChange={changeForSecond}
                />
              </div>
              <div>
                <span className="flex gap-2 items-center justify-start">
                  <p className="text-medium-14 text-gray-primary">Already a member?</p>
                  <button onClick={login}>
                    <p className="text-semi-14 text-purple-primary cursor-pointer">Log in</p>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {signUpPage === false && signUpPageSecond === true && (
        <div className="flex p-5">
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[30rem]">
              <div className="flex flex-col justify-start">
                <span className="my-2">
                  <SignUpFirstStep />
                </span>
                <p className="text-semibold-28 text-gray-primary">Welcome!</p>
                <p className="text-semibold-28 text-gray-primary">Let’s Get You Set Up</p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-6">
                <div className="flex w-full flex-col items-center">
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
              <div className="flex flex-col">
                <div className="flex justify-between gap-4">
                  <AppInput
                    label="FirstName"
                    placeholder="Enter your first name"
                    customClass="my-2 w-1/2"
                  />
                  <AppInput
                    label="LastName"
                    placeholder="Enter your last name"
                    customClass="my-2 w-1/2"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <AppInput
                    label="Location"
                    placeholder="Enter your location"
                    customClass="my-3 w-1/2"
                  />
                  <AppInput
                    label="Phone"
                    placeholder="Enter your phone number"
                    customClass="my-3 w-1/2"
                  />
                </div>
              </div>
              <div className="flex justify-start my-4">
                <AppButton
                  text="Next"
                  customClass="btn-primary text-medium-14 w-[80px]"
                  onClickChange={changeForThird}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img src={SignUpPage} alt="" className="flex w-[75%] h-[95vh]" />
          </div>
        </div>
      )}
      {signUpPage === false && signUpPageSecond === false && signUpPageThird && (
        <div className="flex p-5">
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[30rem]">
              <div className="flex flex-col justify-start">
                <span className="my-2">
                  <SignUpSecondStep />
                </span>
                <p className="text-semibold-28 text-gray-primary">
                  Tell us about your business so we can
                </p>
                <p className="text-semibold-28 text-gray-primary">tailor your experience</p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-6">
                <div className="flex w-full flex-col items-center">
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
              <div className="flex flex-col">
                <AppInput
                  label="Company Name"
                  placeholder="Enter your company name"
                  customClass="my-2"
                />
                <div className="flex justify-between gap-4">
                  <AppInput
                    label="Business Type"
                    placeholder="Your business Type"
                    customClass="my-2 w-1/2"
                  />
                  <AppInput
                    label="Business Address"
                    placeholder="Your business address"
                    customClass="my-2 w-1/2"
                  />
                </div>
                <AppInput
                  label="Company email"
                  placeholder="Enter your company email"
                  customClass="my-2"
                />
                <AppInput label="Password" placeholder="Enter your password" customClass="my-2" />
              </div>
              <div className="flex items-start space-x-3 my-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

                <div className="flex flex-col">
                  <p className="text-medium-14 text-gray-secondary">
                    I have read and agreed to the Terms and Conditions
                  </p>
                </div>
              </div>
              <div className="flex gap-20 justify-between my-6">
                <AppButton
                  text="Back"
                  customClass="btn-outline text-gray-secondary text-medium-14"
                  onClickChange={onBack}
                />
                <AppButton
                  text="Save and finish"
                  customClass="btn-primary text-medium-14"
                  onClickChange={signUp}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img src={SignUpPage} alt="" className="flex w-[75%] h-[95vh]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
