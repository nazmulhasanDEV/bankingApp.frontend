import React from "react";
import { useSidebar } from "./SidebarContext";
import AppAvatar from "@/components/ui/appAvatar.jsx";
import { AlertTriangle, ChevronDown, Search } from "react-feather";
import GlobeIcon from "@/assets/common-assets/icon/Globe.jsx";
import { Link } from "react-router-dom";
import AppInput from "@/components/ui/AppInput";


const Topbar = () => {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`flex justify-between px-10 ${
        isOpen ? "w-[calc(100vw-240px)]" : "w-[calc(100vw-80px)]"
      } h-16 bg-[#F1EFF6] text-[#4F2A9D] items-center justify-end`}
    >
      <AppInput icon={<Search className="text-purple-600 group-focus-within:text-purple-900" />} />
      <div className="flex items-center gap-5">
        <div className="flex gap-1 items-center py-2 px-3 bg-yellow-light rounded-full">
          <AlertTriangle className="w-4 h-4 text-yellow-primary" />
          <p className="text-medium-10 text-gray-primary">You are currently using Free Plan.</p>
          <p className="text-medium-10 text-blue-primary cursor-pointer">
            <Link to="settings/pricing">Click here to upgrade</Link>
          </p>
        </div>
        <div className="flex gap-2 items-center py-1.5 px-3.5 bg-white-primary rounded-full">
          <div>
            <GlobeIcon size={18} />
          </div>
          <div className="pb-1">
            <p className="text-medium-14 text-gray-primary">English</p>
          </div>
          <div>
            <ChevronDown className="w-5 h-5 text-gray-primary" />
          </div>
        </div>

        <div>
          <AppAvatar />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
