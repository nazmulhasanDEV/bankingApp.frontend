import React from "react";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import { Briefcase, DollarSign, Globe, HelpCircle, Home, LogIn, MessageSquare, Power, Printer, User } from "react-feather";
import { Tabs, Tab } from "@/components/ui/appTab";
import HomePage from "@/components/ui/tabComponent/home";
import AccountDetails from "@/components/ui/tabComponent/accountDetails";
import TransferPage from "@/components/ui/tabComponent/transfer";
import DummyContent from "@/components/ui/tabComponent/dummyPage";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed top-20">
      <div className="flex">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcset="" className="w-40" />
          </span>

          <div className="">
            <Tabs>
              <Tab component={<HomePage/>} active>
                <Home className="text-white"/>
              </Tab>
              <Tab component={<AccountDetails/>}><LogIn className="text-white"/></Tab>
              <Tab component={<TransferPage/>}><DollarSign className="text-white"/></Tab>
              <Tab component={<DummyContent/>}><Globe className="text-white"/></Tab>
              <Tab component={<DummyContent/>}><MessageSquare className="text-white"/></Tab>
              <Tab component={<DummyContent/>}><User className="text-white"/></Tab>
              <Tab component={<DummyContent/>}><Briefcase className="text-white"/></Tab>
            </Tabs>
          </div>
        </div>
        <div className="mt-32">
        <span className="p-2 flex items-center justify-center bg-white text-black">
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
