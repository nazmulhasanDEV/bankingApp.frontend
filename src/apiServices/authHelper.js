import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const updateIsFirstLoginStatus = async (token) => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_API_URL}api/update-login-status/`,
//       { token },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );
//     // if (response?.status === 200) localStorage.setItem("isNewUser", "false");
//   } catch (error) {
//     console.log(error);
//   }
// };

export const authenticateUser = createAsyncThunk(
  "authToken/getAuthToken",
  async (credentials, thunkAPI) => {
    try {
      // Make API request for authentication
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/token/access/`,
        { ...credentials },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      // console.log(response);
      return response.data;
    } catch (error) {
      // Handle network errors
      return thunkAPI.rejectWithValue("Wrong email/password! Please try again");
    }
  }
);
