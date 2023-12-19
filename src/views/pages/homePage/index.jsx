import React, { useState } from "react";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import {
  ArrowRight,
  Award,
  ChevronDown,
  ChevronRight,
  Search,
  X,
} from "react-feather";
import FeatureCards from "./FeatureCards";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { TabNew, TabsNew } from "../../../components/ui/appTab/AppTabNew";

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSearchField, setShowSearchField] = useState(false);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const listItemsFirst = [
    "Personal",
    "Banking",
    "Home Loans",
    "Business",
    "Help & Support",
  ];

  const BankAccount = () => (
    <div className="flex gap-8 justify-between">
      <div className="flex flex-col gap-8 flex-wrap w-1/6">
        <p className="text-3xl font-bold">Everyday Banking With BOQ</p>
        <ul className="font thin gap-2 flex flex-col">
          <li className="hover:text-yellow-500 cursor-pointer">
            Mobile Banking
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">Home Loan</li>
          <li className="hover:text-yellow-500 cursor-pointer">Credit Card</li>
          <li className="hover:text-yellow-500 cursor-pointer">Insurance</li>
          <li className="hover:text-yellow-500 cursor-pointer">
            Personal Loan
          </li>
        </ul>
      </div>
      <div className="w-3/6 bg-blue-500 p-5">
        <p className="text-white py-2 text-2xl">
          WATCH YOUR MONEY GROW WITH OUR HIGH INTEREST TERM DEPOSIT ACCOUNT
        </p>
        <p className="text-white text-lg">Term Deposits</p>
        <p className="text-white text-2xl py-3">5.10% P.A.</p>
        <p className="text-white pb-5">
          12 month fixed term deposit from $5,000
        </p>
        <p className="text-white font-thin flex items-center cursor-pointer">
          Learn more <ArrowRight className="w-4 h-4" />
        </p>
      </div>
      <div className="w-2/6 bg-gray-200 p-5">
        <span>
          <Award className="text-yellow-600" />
        </span>
        <p className="text-gray-600 py-2 text-2xl">
          Important changes for BOQ Business Banking customers.
        </p>
        <p className="text-gray-600">
          We are making some changes to the BOQ Business Facility General
          Conditions.
        </p>
        <p className="text-gray-600 py-3">
          Home Loan Awards & Customer Service Award
        </p>
      </div>
    </div>
  );

  return (
    <div className="background-home relative">
      <header className="header-home">
        <div className="header-content">
          <ul>
            <li>
              <img src={logo} alt="" srcset="" className="logo-header" />
            </li>
            {listItemsFirst.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === selectedItem ? "clicked" : ""
                } flex items-center pl-2 mx-2`}
                onClick={() => handleItemClick(index)}
              >
                {item}
                <span className="pl-2">
                  <ChevronDown className="w-4 h-5" />
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-10">
            <button onClick={() => setShowSearchField(!showSearchField)}>
              <Search className="text-blue-400 w-6 h-6" />
            </button>
            <NavLink to="/warning">
              <button className="p-2 block items-center gap-2 text-white bg-blue-600 px-6 cursor-pointer">
                LogOn
              </button>
            </NavLink>
            {showSearchField && (
              <div
                className={` ${
                  showSearchField === true ? "show-search" : "hide-search"
                }`}
              >
                <div className="w-[100%]">
                  <label
                    for="1"
                    className="pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  ></label>
                  <input
                    id="1"
                    type="text"
                    className="h-10 w-full rounded-md bg-white px-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-white"
                  />
                  <button>
                    <Search className="text-gray-500 w-6 h-6" />
                  </button>
                  <button
                    className="mr-5 bg-blue-600 rounded-md w-10 h-10 flex items-center justify-center"
                    onClick={() => setShowSearchField(false)}
                  >
                    <X className="text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div>
        <img
          src="./src/assets/common-assets/images/hero-img2.jpg"
          alt=""
          className="w-[100vw]"
        />
      </div>
      <div className="absolute top-44 left-44" style={{ zIndex: "2" }}>
        <div className="flex flex-col gap-6">
          <p className="text-4xl font-bold">myBOQ</p>
          <p className="text-yellow-300 text-xl font-medium">
            Download the featured pack myBOQ App and open a new account in
            minute
          </p>
          <div>
            <button className="px-4 py-3 bg-blue-600 flex items-center gap-2">
              <p>Learn More</p>
              <ArrowRight className="w-4 h-4 text-yellow-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-gray-600 w-[80%] m-auto">
        <TabsNew>
          <TabNew component={<BankAccount />} active>
            Bank Accounts &nbsp;|
          </TabNew>
          <TabNew component="in progress home loan section">
            Home Loan &nbsp;|
          </TabNew>
          <TabNew component="in progress credit card section">
            Credit Cards &nbsp;|
          </TabNew>
          <TabNew component="in progress insurance section">
            Insurance &nbsp;|
          </TabNew>
        </TabsNew>
      </div>
      <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
      <div className="text-gray-600 w-[80%] m-auto">
        <div className="flex gap-32 justify-between">
          <div className="flex flex-col gap-8 flex-wrap">
            <p className="text-3xl font-bold">Our Latest Awards</p>
            <span className="flex gap-5 items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjO7rCglG7srkC7IvXg0GAGRJUV0vS_4zmwMbmqKHN8fbxUkmXYP37I-lYVgHduHrohLo&usqp=CAU"
                className="w-32"
                alt=""
                srcset=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftazGeqmCY8c4zjFiKsW-JqNZiexrTQWt4THZzZvBwBal8RGxYu3mZyi9jwN9HIGKckM&usqp=CAU"
                className="w-24 h-24"
                alt=""
                srcset=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjO7rCglG7srkC7IvXg0GAGRJUV0vS_4zmwMbmqKHN8fbxUkmXYP37I-lYVgHduHrohLo&usqp=CAU"
                className="w-32"
                alt=""
                srcset=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
      <div className="text-black w-[80%] m-auto">
        <div className="flex gap-32 justify-between">
          <div className="flex flex-col gap-8 flex-wrap w-1/5">
            <p className="text-4xl font-bold">How do I get BOQ Mobile?</p>
          </div>
          <div className="w-4/5 flex flex-col gap-5">
            <p className="text-2xl font-bold">BOQ Internet Banking customers</p>
            <p className="font-thin">
              If you have registered for Internet Banking, you can download BOQ
              Mobile using the below links:
            </p>
            <div className=" bg-gray-900">
              <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                  <div className="flex justify-center my-10">
                    <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                        className="w-7 md:w-8"
                      />
                      <div className="text-left ml-3">
                        <p className="text-xs text-gray-200">Download on </p>
                        <p className="text-sm md:text-base">
                          {" "}
                          Google Play Store{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                        className="w-7 md:w-8"
                      />
                      <div className="text-left ml-3">
                        <p className="text-xs text-gray-200">Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl">BOQ customers without Internet Banking</p>
              <ul className="list-disc">
                <li>Register for Internet Banking.</li>
                <li>Download the BOQ Mobile app using the links above.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
      <div className="text-black w-[80%] m-auto">
        <div className="flex gap-32 justify-between">
          <div className="flex flex-col gap-8 flex-wrap w-1/5">
            <p className="text-4xl font-bold">Important information</p>
          </div>
          <div className="w-4/5">
            <p className="font-thin">
              Before you use Mobile Banking, you must view and accept the
              Electronic Banking Terms and Conditions. You must Log On to
              Internet Banking to accept the Terms and Conditions before you use
              Mobile Banking. You will be shown the Electronic Banking Terms and
              Conditions the first time you Log On to Internet Banking. You can
              also view them on the Terms and Conditions page at any time.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
      <div className="text-black w-[80%] flex m-auto">
        <div className="flex gap-10">
          <div className="flex flex-col flex-wrap">
            <img
              src="https://www.boq.com.au/content/dam/boq/images/content-tile/young-man-laptop-content.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="w-4/5 flex flex-col gap-5">
            <p className="font-thin text-xl">Need help with Mobile Banking?</p>
            <button className="p-4 bg-blue-500 text-white flex gap-2 w-fit">
              View online banking help{" "}
              <ArrowRight className="w-6 h-6 text-yellow-400" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
