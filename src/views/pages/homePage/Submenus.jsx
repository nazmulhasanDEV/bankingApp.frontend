import React from "react";
import { ChevronDown } from "react-feather";

const Submenus = () => {
  return (
<div className="flex gap-10">
          <div className="relative inline-block group w-[15rem]" style={{zIndex:"10"}}>
            <div className="p-4 flex items-center gap-2 font-thin">
              Banking and savings <ChevronDown className="w-5 h-5" />
            </div>
            <div className="absolute hidden group-hover:block bg-green-100 w-[100%]">
              <div className="relative">
                <div className="absolute top-0 left-0 invisible group-hover:visible bg-white w-[100%]">
                  <div className="p-4 hover:bg-gray-100">Item1</div>
                  <div className="p-4 hover:bg-gray-100">Item2</div>
                  <div className="p-4 hover:bg-gray-100">Item3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block group w-[15rem]" style={{zIndex:"10"}}>
            <div className="p-4 flex items-center gap-2 font-thin">
              Personal Loan <ChevronDown className="w-5 h-5" />
            </div>
            <div className="absolute hidden group-hover:block bg-green-100 w-[100%]">
              <div className="relative">
                <div className="absolute top-0 left-0 invisible group-hover:visible bg-white w-[100%]">
                  <div className="p-4 hover:bg-gray-100">Item1</div>
                  <div className="p-4 hover:bg-gray-100">Item2</div>
                  <div className="p-4 hover:bg-gray-100">Item3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block group w-[15rem]">
            <div className="p-4 flex items-center gap-2 font-thin">
              Credit Cards <ChevronDown className="w-5 h-5" />
            </div>
            <div className="absolute hidden group-hover:block bg-green-100 w-[100%]">
              <div className="relative">
                <div className="absolute top-0 left-0 invisible group-hover:visible bg-white w-[100%]">
                  <div className="p-4 hover:bg-gray-100">Item1</div>
                  <div className="p-4 hover:bg-gray-100">Item2</div>
                  <div className="p-4 hover:bg-gray-100">Item3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block group w-[15rem]">
            <div className="p-4 flex items-center gap-2 font-thin">
              Mobile Banking <ChevronDown className="w-5 h-5" />
            </div>
            <div className="absolute hidden group-hover:block bg-green-100 w-[100%]">
              <div className="relative">
                <div className="absolute top-0 left-0 invisible group-hover:visible bg-white w-[100%]">
                  <div className="p-4 hover:bg-gray-100">Item1</div>
                  <div className="p-4 hover:bg-gray-100">Item2</div>
                  <div className="p-4 hover:bg-gray-100">Item3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative inline-block group w-[15rem]">
            <div className="p-4 flex items-center gap-2 font-thin">
              Insurance <ChevronDown className="w-5 h-5" />
            </div>
            <div className="absolute hidden group-hover:block bg-green-100 w-[100%]">
              <div className="relative">
                <div className="absolute top-0 left-0 invisible group-hover:visible bg-white w-[100%]">
                  <div className="p-4 hover:bg-gray-100">Item1</div>
                  <div className="p-4 hover:bg-gray-100">Item2</div>
                  <div className="p-4 hover:bg-gray-100">Item3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Submenus;
