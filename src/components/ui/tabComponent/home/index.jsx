/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import {
  AlertCircle,
  ChevronRight,
  HelpCircle,
  Power,
  Printer
} from "react-feather";
import { getBankAccounts } from "@/apiServices/getBankAccounts";
import { updateBankInfo } from "@/store/features/bankInfoSlice/bankInfoSlice";
import { logout } from "@/store/features/authSlice/authSlice";
import { Link } from "react-router-dom";
import TableNew from "../../table/TableNew";
import TabBar from "@/components/tabBar";

const AccountsHome = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth.authInfo);

  useEffect(() => {
    // console.log("calling");
    const getAllBankAccounts = async () => {
      const accounts = await getBankAccounts(accessToken);
      dispatch(updateBankInfo(accounts?.data));
    };
    getAllBankAccounts();
  }, []);

  return (
    <div className="flex items-start justify-start fixed top-12">
      <div className="flex flex-col">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcSet="" className="w-40" />
          </span>
          <TabBar/>
        </div>
        <div className="w-full bg-gray-100 p-5">
          <div className="w-[80vw] h-[45rem] overflow-y-scroll no-scrollbar flex gap-2">
            <div className="w-2/3">
              <TableNew />
            </div>
            <div className="flex flex-col gap-4 w-1/3">
              <span className="shadow-md">
                <h1 className="bg-orange-500 p-4 flex items-center gap-2 py-3">
                  <Link className="w-5 h-5 text-white" />
                  Quic Links
                </h1>
                <ul className="flex flex-col gap-2 px-10 py-5 bg-white text-black list-disc">
                  <li>Pay bill</li>
                  <li>Transfer money</li>
                  <li>View recent transactions</li>
                  <li>eStatements</li>
                </ul>
              </span>
              <span className="shadow-md">
                <h1 className="bg-yellow-500 p-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-white" />
                  Alert and inbox
                </h1>
                <span>
                  <p className="bg-white p-3 text-black">You have 7 unread message</p>
                </span>
              </span>
              <span className="shadow-md">
                <span>
                  <img
                    src="https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </span>
                <span className="bg-white p-4 flex items-center justify-center gap-2">
                  <button className="flex gap-1 items-center bg-blue-600 px-6 py-1">
                    <p>Learn more</p>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 ml-2">
        <span
          className=" cursor-pointer p-2 flex items-center justify-center bg-white text-black"
          onClick={() => dispatch(logout())}
        >
          <Power className="w-5 h-5" />
        </span>
        <span className="p-2 flex items-center justify-center bg-white text-black">
          <HelpCircle className="w-5 h-5" />
        </span>
        <span className="p-2 flex items-center justify-center bg-white text-black">
          <Printer className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
};

export default AccountsHome;
