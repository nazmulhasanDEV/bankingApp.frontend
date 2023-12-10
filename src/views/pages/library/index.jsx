import React from "react";

const Library = () => {
  return (
    <div className="p-10">
      Library page
      <div>
        <div>
          <form className="w-full p-20">
            <fieldset>
              <div className="flex w-[80%] h-10 rounded-md bg-white-primary font-thin outline-none border-[1px] border-gray-secondary border-opacity-30 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white-primary focus:outline-1 focus:ring-1 focus:ring-purple-light focus:drop-shadow-md">
                <label htmlFor="frm-whatever" className="sr-only">
                  My field
                </label>
                <select
                  className="appearance-none w-full py-1 px-2 bg-white rounded-md"
                  name="whatever"
                  id="frm-whatever"
                >
                  <option value="">Please choose&hellip;</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Library;
