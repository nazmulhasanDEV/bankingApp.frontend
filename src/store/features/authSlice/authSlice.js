/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { authenticateUser } from "@/apiServices/authHelper";
import { parseJwt } from "@/utils";
import initialAuthStatus from "@/store/features/authSlice/authHelper/index.js";

const initialState = {
  userProfile: {
    details: {},
    error: ""
  },
  authInfo: {
    authErrorMsg: "",
    isAuthenticated: initialAuthStatus(),
    refreshToken: Cookies.get("refresh_token"),
    accessToken: Cookies.get("access_token"),
    userInfo: parseJwt(Cookies.get("access_token")),
    pending: false,
    isNewUser: JSON.parse(localStorage.getItem("isNewUser"))
  }
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      // logoutHelper();
      state.authInfo.isAuthenticated = false;
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      localStorage.clear();
    },
    updateIsNewUserStatus: (state) => {
      localStorage.setItem("isNewUser", false);
    }
  },
  extraReducers: {
    // login helper

    [authenticateUser.pending]: (state) => {
      state.authInfo.pending = true;
    },
    [authenticateUser.fulfilled]: (state, action) => {
      const accessToken = action?.payload?.access;
      const refreshToken = action?.payload?.refresh;

      if (accessToken && refreshToken) {
        state.authInfo.isAuthenticated = true;
        state.authInfo.authErrorMsg = "";
        state.authInfo.pending = false;
        state.authInfo.accessToken = accessToken;
        state.authInfo.refreshToken = refreshToken;

        Cookies.set("access_token", accessToken);
        Cookies.set("refresh_token", refreshToken);

        const userInfo = parseJwt(accessToken);

        state.authInfo.userInfo = userInfo;

        if (userInfo?.email && userInfo?.is_first_login) {
          state.authInfo.isNewUser = true;
          localStorage.setItem("isNewUser", true);
          //   updateIsFirstLoginStatus(accessToken);
        }
      }
    },
    [authenticateUser.rejected]: (state, action) => {
      if (action?.payload) {
        state.authInfo.pending = false;
        state.authInfo.authErrorMsg = true;
      }
    }
  }
});

export const { logout, updateIsNewUserStatus } = authSlice.actions;
export default authSlice.reducer;
