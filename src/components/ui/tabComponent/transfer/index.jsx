import React from "react";
import { Link } from "react-feather";
import AppSelect from "@/components/ui/appSelect";
import TransferAmountForm from "./TransferAmountForm";
import TransferPaymentDetailsForm from "./TransferPaymentDetailsForm";

const TransferPage = () => {
  return (
    <div className="w-[70rem] h-[40rem] overflow-y-scroll bg-white">
      <h1 className="bg-orange-500 p-4 flex items-center gap-2">
        <Link className="w-5 h-5 text-white" />
        Enter Payment Details
      </h1>
      <p className="font-bold text-black px-8 pt-4">From Account</p>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
      <span className="flex items-center gap-4 px-8">
        <p className="text-black">Select From Account</p>
        <AppSelect customClass="w-[14vw] p-5" />
      </span>
      <p className="font-bold text-black px-8 pt-4">To Account</p>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
      <span className="px-8">
        <button className="bg-blue-700 py-1 px-3">Select Existing Payee</button>
      </span>
      <div className="my-4">
        <TransferAmountForm />
      </div>
      <p className="font-bold text-black px-8 pt-4">Payment Details</p>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
      <div className="my-4">
        <TransferPaymentDetailsForm />
      </div>
    </div>
  );
};

export default TransferPage;
