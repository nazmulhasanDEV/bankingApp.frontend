import axios from "axios";

export const getTransactionList = async ({ bankAccountNumber, token }) => {
  try {
    // Make API request for authentication
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/get-transaction-list/${bankAccountNumber}/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
