import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppSelect from "@/components/ui/appSelect";
import DateRange from "@/components/dateRange";
import { ChevronLeft, ChevronRight, Link } from "react-feather";
import TableComponent from "@/components/ui/table";
import { prepareBankAccountList } from "@/components/ui/tabComponent/accountDetails/helper/prepareAccounList.js";
import { getTransactionList } from "@/apiServices/getTransactionList";
import { prepareTransactionList } from "@/components/ui/tabComponent/accountDetails/helper/prepareTransactionList.js";

const AccountDetails = () => {
  const { accessToken } = useSelector((state) => state.auth.authInfo);
  const { bankInfo } = useSelector((state) => state.bank);

  const [currentBankAccountInfo, setCurrentBankAccountInfo] = useState({});
  // console.log("currentBankAccountInfo: ", currentBankAccountInfo);

  const [transactions, setTransactions] = useState([]);
  // console.log("transaction: ", transactions);

  const onChangeHandler = (event) => {
    setCurrentBankAccountInfo(() => {
      return bankInfo?.bankAccountList?.find((item) => item?.account_number === event.target.value);
    });
  };

  useEffect(() => {
    const getAllTransactionsOfSelectedAccount = async ()=> {
      const data = await  getTransactionList({bankAccountNumber: currentBankAccountInfo?.account_number, token: accessToken})
      // console.log("data: ", data);
      setTransactions(prepareTransactionList(data, currentBankAccountInfo));
    };
    getAllTransactionsOfSelectedAccount();
  }, [currentBankAccountInfo?.account_number]);


  return (
    <div className="w-[80vw] h-[45rem] overflow-y-scroll no-scrollbar bg-white">
      <h1 className="bg-orange-500 p-4 flex items-center gap-2">
        <Link className="w-5 h-5 text-white" />
        Account Details
      </h1>
      <span className="">
        <AppSelect customClass="w-[25vw] p-5" data={prepareBankAccountList(bankInfo?.bankAccountList)} onChangeHandler={onChangeHandler} />
      </span>
      <span className="text-black flex justify-between items-center px-8">
        <span className="flex flex-col gap-2">
          <span className="flex gap-2">
            <p className="font-bold">{currentBankAccountInfo?.account_name}</p>
            <p className="underline cursor-pointer">Rename</p>
          </span>
          <p className="text-gray-600 text-[12px]">Day2Day Plus</p>
        </span>
        <span>
          <AppSelect customClass="w-[12vw] p-5"  />
        </span>
      </span>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
      <p className="text-black font-bold px-8">Transaction Search</p>

      <span className="flex justify-between items-center px-8">
        <span className="flex items-center gap-4">
          <p className="text-black font-medium">Date Range</p>
          <AppSelect placeholderText="More" customClass="w-[12vw] p-5" />
          <button className="text-white bg-orange-500 py-1 px-2">Search</button>
        </span>
        <span>
          <AppSelect placeholderText="More" customClass="w-[12vw] p-5" />
        </span>
      </span>
      <span className="px-8">
        <DateRange />
      </span>
      <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
      <div className="flex justify-between mx-8 mb-5">
        <div className="flex gap-6 ">
          <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Export View</button>
          <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Export All</button>
          <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Print</button>
        </div>
        <div className="flex gap-6 ">
          <button className="bg-gray-300 text-gray-800 pl-2 pr-4 py-1 text-sm flex items-center"><ChevronLeft className="w-4 h-4"/>Prev</button>
          <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm flex items-center">Next<ChevronRight className="w-4 h-4"/></button>

          <div>
            <AppSelect customClass="w-[12vw]" />
          </div>
          <button className="bg-blue-700 text-white px-2 py-1 text-sm flex items-center">Go</button>
        </div>

      </div>
      <div className="px-8">
        <TableComponent data={transactions} />
      </div>
    </div>
  );
};

export default AccountDetails;
