import axios from "axios";

export const getTransactionList = async ({ bankAccountNumber, token, dateRange = {} }) => {
  try {
    // Make API request for authentication
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/get-transaction-list/${bankAccountNumber}/`,
      {
        ...dateRange
      },
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
