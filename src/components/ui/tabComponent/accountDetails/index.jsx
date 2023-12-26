import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/features/authSlice/authSlice";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import AppSelect from "@/components/ui/appSelect";
import DateRange from "@/components/dateRange";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Link,
  Power,
  Printer
} from "react-feather";
import TableComponent from "@/components/ui/table";
import { prepareBankAccountList } from "@/components/ui/tabComponent/accountDetails/helper/prepareAccounList.js";
import { getTransactionList } from "@/apiServices/getTransactionList";
import { prepareTransactionList } from "@/components/ui/tabComponent/accountDetails/helper/prepareTransactionList.js";
import TabBar from "@/components/tabBar";
import { size } from "lodash";

const AccountDetails = () => {

  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });

  const { accessToken } = useSelector((state) => state.auth.authInfo);
  const { bankInfo } = useSelector((state) => state.bank);

  const [defaultBankAccount, setDefaultBankAccount] = useState({});
  // console.log("defaultBankAccount: ", defaultBankAccount);

  // console.log("bankInfo: ", bankInfo);
  const dispatch = useDispatch();

  const [currentBankAccountInfo, setCurrentBankAccountInfo] = useState({});
  // console.log("currentBankAccountInfo: ", currentBankAccountInfo);

  const [transactions, setTransactions] = useState([]);
  // console.log("transaction: ", transactions);

  const onChangeHandler = (event) => {
    setCurrentBankAccountInfo(() => {
      return bankInfo?.bankAccountList?.find((item) => item?.account_number === event.target.value);
    });
  };


  const dateRangeHanlder = (event) => {
    console.log(event);
    setDateRange((prevData) => {
      return {
        ...prevData,
        from: event[0]?.$d,
        to: event[1]?.$d
      };
    });
  };

  useEffect(() => {
    const getAllTransactionsOfSelectedAccount = async () => {
      const data = await getTransactionList({
        dateRange: { ...dateRange },
        bankAccountNumber: currentBankAccountInfo?.account_number || defaultBankAccount?.details?.account_number,
        token: accessToken
      });
      setTransactions(prepareTransactionList(data, defaultBankAccount));
    };
    getAllTransactionsOfSelectedAccount();
  }, [currentBankAccountInfo, defaultBankAccount, dateRange]);

  useEffect(() => {
    if (size(bankInfo)) {
      const defaultAccount = prepareBankAccountList(bankInfo?.bankAccountList)[0];
      setDefaultBankAccount(defaultAccount);
    }
  }, [bankInfo]);

  return (
    <div className="flex items-start justify-start fixed top-12">
      <div className="flex flex-col">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcSet="" className="w-40" />
          </span>
          <TabBar/>
        </div>
        <div className="bg-gray-100 p-5">
          <div className="w-[80vw] h-[45rem] overflow-y-scroll no-scrollbar bg-white">
            <h1 className="bg-orange-500 p-4 flex items-center gap-2">
              <Link className="w-5 h-5 text-white" />
              Account Details
            </h1>
            <span className="">
              <AppSelect
                customClass="w-[35vw] p-5"
                data={size(bankInfo?.bankAccountList) ? prepareBankAccountList(bankInfo?.bankAccountList)?.slice(1) : prepareBankAccountList(bankInfo?.bankAccountList)}
                onChangeHandler={onChangeHandler}
                defaultValue={size(bankInfo?.bankAccountList) ? defaultBankAccount : {}}
              />
            </span>
            <span className="text-black flex justify-between items-center px-8">
              <span className="flex flex-col gap-2">
                <span className="flex gap-2">
                  <p className="font-bold">{currentBankAccountInfo?.account_name || defaultBankAccount?.details?.account_name}</p>
                </span>
                <p className="text-gray-600 text-[12px]">Day2Day Plus</p>
              </span>
              {/* <span>
                <AppSelect customClass="w-[12vw] p-5" />
              </span> */}
            </span>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
            <p className="text-black font-bold px-8 py-2">Transaction Search</p>
            <span className="px-8">
              <DateRange onChangeHandler={dateRangeHanlder}  />
            </span>
            <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 mx-8" />
            <div className="flex justify-between mx-8 mb-5">
              <div className="flex gap-6 ">
                <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Export View</button>
                <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Export All</button>
                <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm">Print</button>
              </div>
              <div className="flex gap-6 ">
                <button className="bg-gray-300 text-gray-800 pl-2 pr-4 py-1 text-sm flex items-center">
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>
                <button className="bg-gray-300 text-gray-800 px-2 py-1 text-sm flex items-center">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div>
                  <AppSelect customClass="w-[12vw]" />
                </div>
                <button className="bg-blue-700 text-white px-2 py-1 text-sm flex items-center">
                  Go
                </button>
              </div>
            </div>
            <div className="px-8">
              <TableComponent data={transactions} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 ml-2">
        <button
          className=" cursor-pointer p-2 flex items-center justify-center bg-white text-black"
          onClick={() => dispatch(logout())}
        >
          <Power className="w-5 h-5" />
        </button>
        <span className="p-2 flex items-center justify-center bg-white text-black">
          <HelpCircle className="w-5 h-5" />
        </span>
        <span className="p-2 flex items-center justify-center bg-white text-black">
          <Printer className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
};

export default AccountDetails;
