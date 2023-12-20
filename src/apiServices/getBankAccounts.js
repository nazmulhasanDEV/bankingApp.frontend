import axios from "axios";

export const getBankAccounts = async (token) => {
  try {
    // Make API request for authentication
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-bank-accounts/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};
