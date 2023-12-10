import React, { useState } from "react";
import AddCard from "@/components/ui/AddCard.jsx";
import File from "@/assets/FinanceFile.png";
import AppModal from "@/components/ui/appModal/AppModal";
import AppTextArea from "@/components/ui/AppTextArea";
import AppSelect from "@/components/ui/AppSelect";
import AppInput from "@/components/ui/AppInput";

const AddExpense = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RedText = ({ children }) => <span className="text-red-primary">{children}</span>;
  const ExpenseAddModalContent = () => (
    <div className="flex flex-col">
      <div className="py-8" />
      <div className="p-2">
        <div>
          <AppInput
            label={
              <>
                Expens amount <RedText>*</RedText>
              </>
            }
            placeholder="Enter customer's name"
            customClass="my-5"
          />
          <span className="flex w-full justify-between">
            <AppInput label="Tax" placeholder="Enter tax %" customClass="w-[50%]" />
            <span className="px-2"></span>
            <AppSelect label="Vendor" placeholder="Select vendor" customClass="w-[50%]" />
          </span>
          <AppInput
            label={
              <>
                Date <RedText>*</RedText>
              </>
            }
            placeholder="Enter date"
            customClass="my-5"
          />
          <AppSelect
            label={
              <>
                Expense category <RedText>*</RedText>
              </>
            }
            placeholder="Select expense category"
            customClass="mb-5"
          />
          <AppTextArea label="Note" placeholder="Enter here..." customClass="mt-5 mb-20" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="card">
      <AddCard
        img={File}
        title="No Expense found!"
        description="Add your Expense here."
        btnText="Add Expense"
        onClickOpen={() => setIsModalOpen(true)}
      />
      <div className="relative">
        <AppModal
          isOpen={isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
          title="Add new Expense"
          footerBtn={{ btnOne: "Cancel", btnTwo: "Save" }}
          content={<ExpenseAddModalContent />}
        />
      </div>
    </div>
  );
};

export default AddExpense;
