import React from "react";
import AddCustomer from "@/components/customers/AddCustomer";

const Customers = () => {

  return (
    <div className="p-10">
      <h1 className="text-gray-secondary mb-4">Customers</h1>
      <AddCustomer/>
    </div>
  );
};

export default Customers;
