import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice";
import authSlice from "@/store/features/authSlice/authSlice.js";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    auth: authSlice
  }
});
