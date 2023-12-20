import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice";
import authSlice from "@/store/features/authSlice/authSlice.js";
import bankInfoSlice from "@/store/features/bankInfoSlice/bankInfoSlice.js";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    auth: authSlice,
    bank: bankInfoSlice
  }
});
