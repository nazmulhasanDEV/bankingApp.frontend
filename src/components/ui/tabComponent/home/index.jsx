import React from "react";
import TableNew from "@/components/ui/table/TableNew";
import { AlertCircle, ChevronRight, Link } from "react-feather";

const HomePage = () => {
  return (
    <div className="w-[80vw] h-[45rem] overflow-y-scroll no-scrollbar flex">
      <div className="w-2/3">
        <TableNew />
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <span>
          <h1 className="bg-orange-500 p-4 flex items-center gap-2">
            <Link className="w-5 h-5 text-white" />
            Quic Links
          </h1>
          <ul className="flex flex-col gap-2 px-10 py-5 bg-white text-black list-disc">
            <li>Pay bill</li>
            <li>Transfer money</li>
            <li>View recent transactions</li>
            <li>eStatements</li>
          </ul>
        </span>
        <span>
          <h1 className="bg-yellow-500 p-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-white" />
            Alert and inbox
          </h1>
          <span>
            <p className="bg-white p-3 text-black">You have 7 unread message</p>
          </span>
        </span>
        <span>
          <span>
            <img
              src="https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </span>
          <span className="bg-white p-4 flex items-center justify-center gap-2">
            <button className="flex gap-1 items-center bg-blue-600 px-6 py-1">
              <p>Learn more</p>
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
