import React, { useState } from "react";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import { ArrowRight, ChevronDown, Search, X } from "react-feather";
import Submenus from "./Submenus";
import FeatureCards from "./FeatureCards";
import Footer from "./Footer";

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSearchField, setShowSearchField] = useState(false);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const listItemsFirst = ["Personal", "Business"];
  const listItemsSecond = ["Blog", "About Us", "Contact Us", "Help & Support"];
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
        className="text-black homepage-body"
      >
        <Submenus />
      </div>
      <div>
        <img
          src="./src/assets/common-assets/images/hero-img.jpeg"
          alt=""
          className="w-[100vw]"
        />

      </div>
      <div className="absolute top-44 left-44" style={{zIndex:'2'}}>
          <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold">Mobile Banking</p>
            <p className="text-yellow-600 text-xl font-bold">Banking in your palms</p>
            <div className="flex gap-4">
              <button className="p-4 bg-blue-500 flex gap-2">Contact Your Local Branch <ArrowRight className="w-6 h-6 text-yellow-400"/></button>
              <button className="p-4 bg-white text-blue-500 flex gap-2">Call 573284 893 <ArrowRight className="w-6 h-6 "/></button>
            </div>
          </div>
        </div>
        
        <div className="text-black w-[80%] m-auto">
          <div className="flex items-center gap-8 justify-center mt-5">

          <p className="border-b-4 border-transparent hover:border-yellow-500 w-fit">Feature</p>
          <p className="border-b-4 border-transparent hover:border-yellow-500 w-fit">Apply</p>
          <p className="border-b-4 border-transparent hover:border-yellow-500 w-fit">Important Information</p>
          <p className="border-b-4 border-transparent hover:border-yellow-500 w-fit">Help</p>
          <button className="flex items-center gap-2 bg-yellow-500 p-4">
            Log On To Internet Banking <ArrowRight className="w-5 h-5"/>
          </button>
          </div>
        </div>
        <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
        <div className="text-black w-[80%] m-auto">
          <div className="flex gap-32 justify-between">
          <div className="flex flex-col gap-8 flex-wrap w-1/5">
            <p className="text-4xl font-bold">BOQ Mobile features</p>
            <p className="font-thin">BOQ Mobile puts you in charge of how you view BOQ on your mobile device.</p>
          </div>
          <div className="w-4/5">
            <FeatureCards/>
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
            <p className="font-thin">If you have registered for Internet Banking, you can download BOQ Mobile using the below links:</p>
            <div className=" bg-gray-900">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <div className="flex justify-center my-10">
                <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
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
            <p className="font-thin">Before you use Mobile Banking, you must view and accept the Electronic Banking Terms and Conditions. You must Log On to Internet Banking to accept the Terms and Conditions before you use Mobile Banking. You will be shown the Electronic Banking Terms and Conditions the first time you Log On to Internet Banking. You can also view them on the Terms and Conditions page at any time.</p>
          </div>
          </div>
        </div>
        <div className="border-b-[1px] border-gray-300 border-opacity-40 w-[80%] my-5 m-auto"></div>
        <div className="text-black w-[80%] flex m-auto">
          <div className="flex gap-10">
          <div className="flex flex-col flex-wrap">
            <img src="https://www.boq.com.au/content/dam/boq/images/content-tile/young-man-laptop-content.jpg" alt="" srcset="" />
          </div>
          <div className="w-4/5 flex flex-col gap-5">
            <p className="font-thin text-xl">Need help with Mobile Banking?</p>
            <button className="p-4 bg-blue-500 text-white flex gap-2 w-fit">View online banking help <ArrowRight className="w-6 h-6 text-yellow-400"/></button>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default HomePage;
