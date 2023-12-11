import React from "react";
import AppSelect from "@/components/ui/appSelect";
import DateRange from "@/components/dateRange";
import { Link } from "react-feather";
import TableComponent from "@/components/ui/table";

const AccountDetails = () => {
  return (
    <div className="w-[70rem] h-[40rem] overflow-y-scroll bg-white">
      <h1 className="bg-orange-500 p-4 flex items-center gap-2">
        <Link className="w-5 h-5 text-white" />
        Account Details
      </h1>
      <span className="">
        <AppSelect customClass="w-[20vw] p-5" />
      </span>
      <span className="text-black flex justify-between items-center px-8">
        <span className="flex flex-col gap-2">
          <span className="flex gap-2">
            <p className="font-bold">Account Name</p>
            <p className="underline cursor-pointer">Rename</p>
          </span>
          <p className="text-gray-600 text-[12px]">Day2Day Plus</p>
        </span>
        <span>
          <AppSelect customClass="w-[12vw] p-5" />
        </span>
      </span>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
      <p className="text-black font-bold px-8">Transaction Search</p>

      <span className="flex justify-between items-center px-8">
        <span className="flex items-center gap-4">
          <p className="text-black font-medium">Date Range</p>
          <AppSelect customClass="w-[12vw] p-5" />
          <button className="text-white bg-orange-500 py-1 px-2">Search</button>
        </span>
        <span>
          <AppSelect customClass="w-[12vw] p-5" />
        </span>
      </span>
      <span className="px-8">
        <DateRange />
      </span>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
      <div className="px-8">
        <TableComponent />
      </div>
    </div>
  );
};

export default AccountDetails;
