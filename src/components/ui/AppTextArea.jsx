import React from "react";

const AppTextArea = ({ label = null, placeholder = "", customClass }) => {
  return (
    <div className={`${customClass}`}>
      {label && (
        <label
          htmlFor="message"
          className="block w-full pb-1 text-medium-14 text-gray-secondary transition-all duration-200 ease-in-out group-focus-within:text-purple-light"
          placeholder="password"
        >
          {label}
        </label>
      )}
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full rounded-md outline-none border-[1px] border-gray-secondary border-opacity-30 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white-primary focus:ring-1 focus:ring-purple-light focus:drop-shadow-md"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default AppTextArea;
