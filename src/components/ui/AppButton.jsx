import React,  { useState, useEffect, useRef } from "react";
import { ChevronDown } from "react-feather";

const AppButton = ({
  customClass,
  onClickChange,
  icon = "",
  iconSize,
  text = "",
  textColor = "text-white",
  dropDown = false,
  menuItems,
  dropObj = {
    text: "appDropdown",
    isLeftRight: ""
  }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="flex w-full">
      {dropDown ? (
        <>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              type="button"
              className={customClass}
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {dropObj.text}
              <span className="pl-1">
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </button>

            {isOpen && (
              <div
                className={`${
                  dropObj.isLeftRight || "origin-top-right right-0"
                } absolute top-9 mt-2 w-56 rounded-md shadow-lg bg-white-primary border border-1 border-gray-light px-4 py-2`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                style={{ zIndex: 2 }}
              >
                <div className="py-2" role="none">
                  {menuItems.map((menuItem, index) => (
                    <a
                      key={index}
                      href={menuItem.link}
                      className="text-normal-12 flex justify-start px-2 py-2.5 text-brown-primary hover:text-black-secondary rounded-md cursor-pointer hover:bg-gray-100 "
                      role="menuitem"
                    >
                      {menuItem.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <button onClick={onClickChange} className={`rounded-md flex w-full ${customClass}`}>
          <div className={`flex items-center ${textColor}`}>
            {icon && <div className={`pr-1 text-${iconSize} `}>{icon}</div>}
            <p className="font-semibold">{text || "Button"}</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default AppButton;
