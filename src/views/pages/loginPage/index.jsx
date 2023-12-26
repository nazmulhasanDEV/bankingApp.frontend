import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import { useNavigate } from "react-router-dom";
import { HelpCircle, Printer } from "react-feather";
import { authenticateUser } from "@/apiServices/authHelper";

const LoginBOQ = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth.authInfo);
  // console.log("state: ", state);
  const [loginCredential, setLoginCredential] = useState({});
  console.log("loginCredential: ", loginCredential);

  const onChangeHandler = (event) => {
    setLoginCredential((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(authenticateUser({ ...loginCredential }));
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/account-home");
  }, [isAuthenticated]);

  return (
    <div className="w-[60rem] flex flex-col items-center justify-center">
      <div className="flex">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcSet="" className="w-40" />
          </span>
          {/* input fields */}
          <div className="card p-20">
            <p className="text-white text-xl font-bold">
              Welcome to BOQ Internet Banking
            </p>
            <span className="flex text-white gap-4 my-4">
              <p className="cursor-pointer">Forget Password</p>|
              <p className="cursor-pointer">Security Alert And Safety</p>|
              <p className="cursor-pointer">Internet Banking Help</p>|
              <p className="cursor-pointer">System Status</p>
            </span>
            <span className="flex gap-6 mt-6">
              <span className="flex flex-col gap-5 ">
                <span className="w-42">
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Customer access number
                  </label>
                  <input
                    type="text"
                    name="customer_access_number"
                    value={loginCredential?.customer_access_number}
                    onChange={onChangeHandler}
                    id="small-input"
                    className="block p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </span>
                <span className="w-42">
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    value={loginCredential?.password}
                    onChange={onChangeHandler}
                    name="password"
                    id="small-input"
                    className="block p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </span>
              </span>
              <span className="flex flex-col justify-between gap-5 ">
                <span className="w-42 flex items-center">
                  <span>
                    <label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      User ID
                    </label>
                    <input
                      type="text"
                      name="userID"
                      value={loginCredential?.userID}
                      onChange={onChangeHandler}
                      id="small-input"
                      className="block p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                    />
                  </span>
                  <span className="pt-5 px-5 flex flex-col">
                    <p className="text-[12px] text-white">
                      Note: This is only required if you have been
                    </p>
                    <p className="text-[12px] text-white">
                      issued a User ID, if not, please leave blank.
                    </p>
                  </span>
                </span>
                <span className="flex gap-5">
                  {/* <NavLink to="/main"> */}
                  <button className="bg-orange-400 px-5 py-1.5 text-white font-semibold" onClick={onSubmitHandler}>
                      Login
                  </button>
                  {/* </NavLink> */}
                  <button className="text-white">Cancel</button>
                </span>
              </span>
            </span>
          </div>
          {/* bottom text */}
          <div className="w-full flex justify-between mt-2">
            <p className="text-xs font-light">
              Copyright Sandstone Technology Pty Ltd [ 3.12.6.3 5FA1 56B1 BFCD ]
            </p>
            <p className="text-xs font-light">588FL8GSJ9-LG07</p>
          </div>
        </div>
        <div className="mt-16">
          <span className="p-2 flex items-center justify-center bg-white text-black">
            <HelpCircle className="w-5 h-5" />
          </span>
          <span className="p-2 flex items-center justify-center bg-white text-black">
            <Printer className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginBOQ;
