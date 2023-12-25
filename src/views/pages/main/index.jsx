/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBankAccounts } from "@/apiServices/getBankAccounts";
import { updateBankInfo } from "@/store/features/bankInfoSlice/bankInfoSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth.authInfo);

  useEffect(() => {
    // console.log("calling");
    const getAllBankAccounts = async () => {
      const accounts = await getBankAccounts(accessToken);
      dispatch(updateBankInfo(accounts?.data));
    };
    getAllBankAccounts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center fixed top-12">
      test
    </div>
  );
};

export default MainPage;
