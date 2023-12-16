import React, { useState } from "react";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import { ArrowRight, ChevronDown, Search, X } from "react-feather";
import Submenus from "./Submenus";

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSearchField, setShowSearchField] = useState(false);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const listItemsFirst = ["Personal", "Business"];
  const listItemsSecond = ["Blog", "About Us", "Contact Us", "Help & Support"];
  return (
    <div className="background-home">
      <header className="header-home">
        <div className="header-content">
          <ul>
            <li>
              <img src={logo} alt="" srcset="" className="logo-header" />
            </li>
            {listItemsFirst.map((item, index) => (
              <li
                key={index}
                className={index === selectedItem ? "clicked" : ""}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-10">
            {listItemsSecond.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
            <button onClick={() => setShowSearchField(!showSearchField)}>
              <Search className="text-blue-400 w-6 h-6" />
            </button>
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

      <div
        className={`text-black homepage-body ${
          showSearchField ? "opacity-[0.2]" : ""
        }`}
      >
        <Submenus />
      </div>
      <div className={`${showSearchField ? "opacity-[0.2]" : ""}`}>
        <img
          src="./src/assets/common-assets/images/hero-img.jpeg"
          alt=""
          className="w-[100vw]"
        />

      </div>
      <div className={`absolute top-44  ${
          showSearchField ? "opacity-[0.2]" : ""
        } left-44`} style={{zIndex:'2'}}>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">Mobile Banking</p>
            <p className="text-yellow-600 text-xl font-bold">Banking in your palms</p>
            <div className="flex gap-4">
              <button className="p-4 bg-blue-500 flex gap-2">Contact Your Local Branch <ArrowRight className="w-6 h-6 text-yellow-400"/></button>
              <button className="p-4 bg-white text-blue-500 flex gap-2">Call 573284 893 <ArrowRight className="w-6 h-6 "/></button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
