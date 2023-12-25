/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import {
  Briefcase,
  DollarSign,
  Globe,
  HelpCircle,
  Home,
  LogIn,
  MessageSquare,
  Power,
  Printer,
  User
} from "react-feather";
import { Tabs, Tab } from "@/components/ui/appTab";
import HomePage from "@/components/ui/tabComponent/home";
import AccountDetails from "@/components/ui/tabComponent/accountDetails";
import DummyContent from "@/components/ui/tabComponent/dummyPage";
import { getBankAccounts } from "@/apiServices/getBankAccounts";
import { updateBankInfo } from "@/store/features/bankInfoSlice/bankInfoSlice";
import { logout } from "@/store/features/authSlice/authSlice";
import ExistingPayee from "@/components/ui/tabComponent/existingPayee";

const MainPage = () => {
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
    <div className="flex flex-col items-center justify-center fixed top-12">
      <div className="flex">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcSet="" className="w-40" />
          </span>

          <div className="w-full">
            <Tabs>
              <Tab component={<HomePage />} active>
                <Home className="text-white" />
              </Tab>
              <Tab component={<AccountDetails />}>
                <LogIn className="text-white" />
              </Tab>
              <Tab component={<ExistingPayee />}>
                <DollarSign className="text-white" />
              </Tab>
              <Tab component={<DummyContent />}>
                <Globe className="text-white" />
              </Tab>
              <Tab component={<DummyContent />}>
                <MessageSquare className="text-white" />
              </Tab>
              <Tab component={<DummyContent />}>
                <User className="text-white" />
              </Tab>
              <Tab component={<DummyContent />}>
                <Briefcase className="text-white" />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="mt-32">
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
    </div>
  );
};

export default MainPage;
