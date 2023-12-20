/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-else-if */
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-feather";
import AppSelect from "@/components/ui/appSelect";
import TransferAmountForm from "./TransferAmountForm";
import TransferPaymentDetailsForm from "./TransferPaymentDetailsForm";
import { prepareBankAccountList } from "../accountDetails/helper/prepareAccounList";
import { createTransaction } from "@/apiServices/createTransaction";
import { toastMessage } from "@/utils";

const TransferPage = () => {

  const [isLoading, setIsLoading] = useState(false);

  const { accessToken } = useSelector((state) => state.auth.authInfo);

  const [paymentTransactionDetailInfo, setPaymentTransactionDetailInfo] = useState({
    from_account: "",
    personalized_name: "",
    bsb: "",
    to_account_number: "",
    to_account_name: "",
    refrence:"",
    amount: "",
    frequency: "",
    date: "",
  });
  // console.log("paymentTransactionDetailInfo: ", paymentTransactionDetailInfo);

  const { bankInfo } = useSelector((state) => state.bank);
  const onChangeHandler = (event) => {
    if (event.$d)
      setPaymentTransactionDetailInfo((prevData) => ({ ...prevData, date: event.$d }));
    else
      if (event.target.name === "fron_account")
        setPaymentTransactionDetailInfo((prevData) => ({ ...prevData, from_account: event.target.value }));
      else if (event.target.name === "frequency")
        setPaymentTransactionDetailInfo((prevData) => ({ ...prevData, frequency: event.target.value }));
      else
        setPaymentTransactionDetailInfo((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async () => {
    setIsLoading(true);
    try {
      if (paymentTransactionDetailInfo?.from_account && paymentTransactionDetailInfo?.to_account_name && paymentTransactionDetailInfo?.to_account_number && paymentTransactionDetailInfo?.amount && paymentTransactionDetailInfo?.frequency && paymentTransactionDetailInfo?.date) {
        const createNewTransaction = await createTransaction({ transactionInfo: { ...paymentTransactionDetailInfo }, token: accessToken });
        toastMessage("success", "Transaction succeded", "top-right");
      } else
        toastMessage("error", "Somethng is missing. Please check & try again", "top-right");
    } catch(error) {
      toastMessage("error", "Somethng is missing. Please check & try again", "top-right");
    }
    setIsLoading(false);
  };

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
        <AppSelect customClass="w-[30vw] p-5" name="fron_account" data={prepareBankAccountList(bankInfo?.bankAccountList)} onChangeHandler={onChangeHandler} />
      </span>
      <p className="font-bold text-black px-8 pt-4">To Account</p>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
      <span className="px-8">
        <button className="bg-blue-700 py-1 px-3">Select Existing Payee</button>
      </span>
      <div className="my-4">
        <TransferAmountForm onChangeHandler={onChangeHandler} />
      </div>
      <p className="font-bold text-black px-8 pt-4">Payment Details</p>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
      <div className="my-4">
        <TransferPaymentDetailsForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} loader={isLoading} />
      </div>
    </div>
  );
};

export default TransferPage;
