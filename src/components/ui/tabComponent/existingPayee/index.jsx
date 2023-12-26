/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-else-if */
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logout } from "@/store/features/authSlice/authSlice";
import logo from "@/assets/common-assets/images/boq_logo_prev_ui.png";
import dayjs from "dayjs";
import { DollarSign, Globe, HelpCircle, Home, Link, LogIn, Power, Printer, AlertTriangle } from "react-feather";
import AppSelect from "@/components/ui/appSelect";
import TransferPaymentDetailsForm from "../othersPayeeTab/TransferPaymentDetailsForm";
import { prepareBankAccountList } from "../accountDetails/helper/prepareAccounList";
import { createTransaction } from "@/apiServices/createTransaction";
import { toastMessage } from "@/utils";
import TabBar from "@/components/tabBar";

const ExistingPayee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { accessToken } = useSelector((state) => state.auth.authInfo);

  const [paymentTransactionDetailInfo, setPaymentTransactionDetailInfo] = useState({
    from_account: "",
    to_account: "",
    amount: "",
    frequency: "",
    date: dayjs()?.$d,
    existing: true
  });
  console.log("paymentTransactionDetailInfo: ", paymentTransactionDetailInfo);

  const { bankInfo } = useSelector((state) => state.bank);

  const isContinueButtonDisabled = () => {
    return !paymentTransactionDetailInfo?.amount || !paymentTransactionDetailInfo?.to_account || !paymentTransactionDetailInfo.from_account || !paymentTransactionDetailInfo?.date || !paymentTransactionDetailInfo?.frequency;
  };

  const onChangeHandler = (event) => {
    if (event.$d) setPaymentTransactionDetailInfo((prevData) => ({ ...prevData, date: event.$d }));
    else if (event.target.name === "fron_account")
      setPaymentTransactionDetailInfo((prevData) => ({
        ...prevData,
        from_account: event.target.value
      }));
    else if (event.target.name === "frequency")
      setPaymentTransactionDetailInfo((prevData) => ({
        ...prevData,
        frequency: event.target.value
      }));
    else
      setPaymentTransactionDetailInfo((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
      }));
  };

  const onSubmitHandler = async () => {
    setIsLoading(true);
    try {
      if (
        paymentTransactionDetailInfo?.from_account &&
        paymentTransactionDetailInfo?.to_account &&
        paymentTransactionDetailInfo?.amount &&
        paymentTransactionDetailInfo?.frequency &&
        paymentTransactionDetailInfo?.date
      ) {
        const createNewTransaction = await createTransaction({
          transactionInfo: { ...paymentTransactionDetailInfo },
          token: accessToken
        });
        if (createNewTransaction?.response?.status === 406)
          toastMessage("error", "Insufficient balance", "top-right");
        else {
          setPaymentTransactionDetailInfo({
            from_account: "",
            to_account: "",
            amount: "",
            frequency: "",
            date: dayjs()?.$d,
            existing: true
          });
          // console.log(createNewTransaction.response);
          navigate("/account-home");
          toastMessage("success", "Transaction succeded", "top-right");
        }
        // console.log(createNewTransaction.response);
      } else toastMessage("error", "Somethng is missing. Please check & try again", "top-right");
    } catch (error) {
      toastMessage("error", "Somethng is missing. Please check & try again", "top-right");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-start justify-start fixed top-12">
      <div className="flex flex-col">
        <div>
          <span className="flex justify-start items-start">
            <img src={logo} alt="" srcSet="" className="w-40" />
          </span>
          <TabBar/>
        </div>
        <div className="bg-gray-100 p-5 shadow-md">
          <div className="w-[80vw] h-[45rem] overflow-y-scroll no-scrollbar bg-white">
            <h1 className="bg-orange-500 p-4 flex items-center gap-2">
              <Link className="w-5 h-5 text-white" />
              Enter Payment Details For Existing Payee
            </h1>

            {
              paymentTransactionDetailInfo?.from_account && paymentTransactionDetailInfo?.to_account && paymentTransactionDetailInfo?.from_account === paymentTransactionDetailInfo?.to_account ? <p className=" py-2 pt-4 text-red-600 px-8 flex gap-3"> <AlertTriangle /> From account and to accout are same. Please select different account</p> : ""
            }

            <p className="font-bold text-black px-8 pt-4">From Account</p>
            <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
            <div className="w-full">
              <div className="w-2/3">
                <span className="flex justify-between items-center gap-4 px-8">
                  <p className="text-black">Select From Account</p>
                  <AppSelect
                    customClass="w-[25vw] p-5"
                    name="from_account"
                    data={prepareBankAccountList(bankInfo?.bankAccountList)}
                    onChangeHandler={onChangeHandler}
                  />
                </span>
              </div>
              <div className="w-1/3"></div>
            </div>
            <p className="font-bold text-black px-8 pt-4">To Account</p>
            <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
            <div className="w-full">
              <div className="w-2/3">
                <span className="flex justify-between items-center gap-4 px-8">
                  <p className="text-black">Select To Account</p>
                  <AppSelect
                    customClass="w-[25vw] p-5"
                    name="to_account"
                    data={prepareBankAccountList(bankInfo?.bankAccountList)}
                    onChangeHandler={onChangeHandler}
                  />
                </span>
              </div>
              <div className="w-1/3"></div>
            </div>
            <span className="px-8">
              <NavLink to="/others-payee">
                <button className="bg-blue-600 py-1 px-3">Pay Other Payee</button>
              </NavLink>
            </span>
            <p className="font-bold text-black px-8 pt-4">Payment Details</p>
            <hr className="my-2 h-0.5 border-t-0 bg-gray-100 opacity-100 dark:opacity-50 mx-8" />
            <div className="my-4">
              <TransferPaymentDetailsForm
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                loader={isLoading}
                disabled={isContinueButtonDisabled()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 ml-2">
        <button
          className="cursor-pointer p-2 flex items-center justify-center bg-white text-black disabled:opacity-[0.2] disabled:cursor-not-allowed"
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

export default ExistingPayee;
