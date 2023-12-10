import React from "react";
import AddExpense from "@/components/expense/AddExpense";

const Expense = () => {
  return (
    <div className="p-10">
      <h1 className="text-gray-secondary mb-4">Expense</h1>
      <AddExpense />
    </div>
  );
};

export default Expense;
