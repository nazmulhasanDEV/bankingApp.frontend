import axios from "axios";

export const createTransaction = async ({ transactionInfo, token }) => {
  try {
    // Make API request for authentication
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/create-transaction/`,
      { ...transactionInfo },
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
