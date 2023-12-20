/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { authenticateUser } from "@/apiServices/authHelper";
import { parseJwt } from "@/utils";
import initialAuthStatus from "@/store/features/authSlice/authHelper/index.js";

const initialState = {
  bankInfo: {
    bankAccountList: []
  }
};

const bankInfoSlice = createSlice({
  name: "bankInfoSlice",
  initialState: initialState,
  reducers: {
    updateBankInfo: (state, action) => {
      state.bankInfo.bankAccountList = action.payload;
    }
  }
});

export const { updateBankInfo } = bankInfoSlice.actions;
export default bankInfoSlice.reducer;
