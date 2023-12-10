import React from "react";
import AddBankAccount from "@/components/banking-details/AddBankAccount";

const BankingDetails = () => {
  return (
    <div className="p-10">
      <h1 className="text-gray-secondary mb-4">Banking details</h1>
      <AddBankAccount />
    </div>
  );
};

export default BankingDetails;
