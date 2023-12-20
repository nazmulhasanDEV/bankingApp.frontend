import { size } from "lodash";
import React from "react";

const AppSelect = ({ customClass, placeholderText, data = [], onChangeHandler = () => {}, name }) => {
  // console.log("dattest a: ", data);


  return (
    <form className={customClass}>
      <fieldset>
        <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
          <label htmlFor="frm-whatever" className="sr-only">My field</label>
          <select className="appearance-none w-full py-1 px-2 bg-white" onChange={onChangeHandler} name={name || "app-select"} id="frm-whatever">
            <option value="">{placeholderText || "Select..."}&hellip;</option>
            {
              size(data) ? (
                data?.map((item, index) => {
                  return <option value={item.value} key={`option-${index}`}>{item.title}</option>;
                })
              ) : ""
            }
          </select>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default AppSelect;