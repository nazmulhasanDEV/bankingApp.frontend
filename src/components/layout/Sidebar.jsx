import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Grid,
  ProductIcon,
  SalesIcon,
  MainLogo,
  BagIcon,
  ReportBadgeIcon,
  SettingsIcon,
  MainLogoSmall
} from "@/assets/common-assets/icon";
import { BookOpen, ChevronDown, ChevronLeft, ChevronRight } from "react-feather";
import { useSidebar } from "./SidebarContext";

const Sidebar = () => {
  const { isOpen, toggleSideBar } = useSidebar();

  const ToggleMenuIcon = () => (
    <div
      className={`items-center p-1.5 bg-purple-light text-white-primary rounded-full shadow-md absolute top-5 ${
        isOpen ? "left-56" : "left-16"
      } `}
      onClick={toggleSideBar}
      role="button"
      tabIndex={0}
    >
      {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
    </div>
  );

  const location = useLocation();
  const [isSalesOpen, setIsSalesSubmenuOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseSubmenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSalesSubmenu = () => {
    setIsSalesSubmenuOpen(!isSalesOpen);
    setIsPurchaseSubmenuOpen(false);
    setIsSettingsOpen(false);
  };

  const togglePurchaseSubmenu = () => {
    setIsPurchaseSubmenuOpen(!isPurchaseOpen);
    setIsSalesSubmenuOpen(false);
    setIsSettingsOpen(false);
  };

  const toggleSettingsSubmenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
    setIsPurchaseSubmenuOpen(false);
    setIsSalesSubmenuOpen(false);
  };

  const toggleClick = (data) => {
    if (data === "/sales") toggleSalesSubmenu();
    else if (data === "/purchase") togglePurchaseSubmenu();
    else if (data === "/settings") toggleSettingsSubmenu();
    else return null;
  };

  const subMenuClass = "hover:bg-pruple-secondary hover:text-white-primary py-4 flex pl-16 cursor-pointer";

  const generatedSubMenu = (item) => {
    const salesData = ["Customer", "Estimate", "Invoices", "Recurring invoices"];
    const salesRouting = [
      "/sales/customers",
      "/sales/estimate",
      "/sales/invoices",
      "/sales/recurring-invoices"
    ];
    const salesItems = salesData.map((item, index) => ({
      label: item,
      route: salesRouting[index]
    }));


    const purchaseData = ["Bills", "Vendor", "Expenses"];
    const purchaseRouting = [
      "/purchase/bills",
      "/purchase/vendors",
      "/purchase/expense"
    ];
    const purchaseItems = purchaseData.map((item, index) => ({
      label: item,
      route: purchaseRouting[index]
    }));

    const settingsData = ["General", "User and roles", "Banking details", "Plan & Pricing"];
    const settingsRouting = [
      "/settings/general-settings",
      "/settings/user-roles",
      "/settings/banking-details",
      "/settings/pricing"
    ];
    const settingsItems = settingsData.map((item, index) => ({
      label: item,
      route: settingsRouting[index]
    }));

    if (isSalesOpen && item.label === "Sales")
      return (
        <span>
          <ul>
            {salesItems?.map((menuItem, index) => (
              <NavLink to={menuItem.route} key={index}>
                <li className={subMenuClass}>{menuItem.label}</li>
              </NavLink>
            ))}
          </ul>
        </span>
      );
    else if (isPurchaseOpen && item.label === "Purchase")
      return (
        <span>
          <ul>
            {purchaseItems?.map((menuItem, index) => (
              <NavLink to={menuItem.route} key={index}>
                <li className={subMenuClass}>{menuItem.label}</li>
              </NavLink>
            ))}
          </ul>
        </span>
      );
    else if (isSettingsOpen && item.label === "Settings")
      return (
        <span>
          <ul>
            {settingsItems?.map((menuItem, index) => (
              <NavLink to={menuItem.route} key={index}>
                <li className={subMenuClass}>{menuItem.label}</li>
              </NavLink>
            ))}
          </ul>
        </span>
      );

    return null;
  };

  function renderChevron(isSalesOpen, isPurchaseOpen, isSettingsOpen) {
    if (isOpen === true)
      return isSalesOpen || isPurchaseOpen || isSettingsOpen ? (
        <span className="pr-4">
          <ChevronDown className="w-6 h-6" />
        </span>
      ) : (
        <span className="pr-4">
          <ChevronRight className="w-6 h-6" />
        </span>
      );
  }

  const sidebarData = [
    {
      route: "/dashboard",
      icon: <Grid />,
      label: "Dashboard"
    },
    {
      route: "/product",
      icon: <ProductIcon />,
      label: "Product and Service"
    },
    {
      route: "/sales",
      icon: <SalesIcon />,
      label: "Sales"
    },
    {
      route: "/purchase",
      icon: <BagIcon />,
      label: "Purchase"
    },
    {
      route: "/report",
      icon: <ReportBadgeIcon />,
      label: "Report"
    },
    {
      route: "/settings",
      icon: <SettingsIcon />,
      label: "Settings"
    },
    {
      route: "/library",
      icon: <span className="p-[3px]"><BookOpen className="w-5 h-5" /></span>,
      label: "Library"
    }
  ];

  return (
    <div className={` ${isOpen ? "w-60" : "w-20"} bg-purple-primary h-screen`}>
      {isOpen ? (
        <div className="flex items-center pl-9 h-16 bg-purple-secondary text-white-primary font-semibold cursor-pointer text-xl">
          <MainLogo />
        </div>
      ) : (
        <div className="flex items-center pl-7 h-16 bg-purple-secondary text-white-primary font-semibold cursor-pointer text-xl">
          <MainLogoSmall />
        </div>
      )}

      <ToggleMenuIcon />
      <div className="mt-10" />
      <div className="flex">
        <ul className="flex flex-col w-60 text-white-light text-md font-normal gap-1 overflow-y-scroll no-scrollbar">
          {sidebarData.map((item, index) => (
            <>
              <NavLink
                key={index}
                to={item.route}
                role="button"
                tabIndex="0"
                onClick={() => toggleClick(item.route)}
                className="flex flex-col py-2"
              >
                <li
                  className={`flex justify-between ${
                    location.pathname === item.route
                      ? "border-l-8 pl-5 border-white"
                      : "border-l-8 pl-5 border-transparent"
                  } hover:text-white hover:bg-purple-secondary py-3`}
                >
                  <span className="flex">
                    {item.icon}
                    &nbsp;&nbsp;
                    {isOpen && item.label}
                  </span>

                  {index === 2 && renderChevron(isSalesOpen)}
                  {index === 3 && renderChevron(isPurchaseOpen)}
                  {index === 5 && renderChevron(isSettingsOpen)}
                </li>
              </NavLink>
              <span>{isOpen && <li>{generatedSubMenu(item)}</li>}</span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
