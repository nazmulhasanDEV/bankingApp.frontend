import React from "react";

const AppInput = ({ icon = false, text = "input search", placeholder = "", label = null, customClass }) => {
  return (
    <div className={`group flex ${customClass}`}>
      <div className={`relative flex ${label ? "flex-col" : ""}  w-full items-center`}>
        {label && (
          <label
            htmlFor="4"
            className="block w-full pb-1 text-medium-14 text-gray-secondary transition-all duration-200 ease-in-out group-focus-within:text-purple-light"
            placeholder="password"
          >
            {label}
          </label>
        )}

        <input
          id="4"
          type={text}
          placeholder={placeholder}
          className={`peer flex relative h-10 w-full rounded-md bg-white-primary ${
            icon ? "pl-10 pr-4" : "px-4"
          }  font-thin outline-none border-[1px] border-gray-secondary border-opacity-30 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white-primary focus:ring-1 focus:ring-purple-light focus:drop-shadow-md`}
        />
        {icon && (
          <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out ">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default AppInput;
