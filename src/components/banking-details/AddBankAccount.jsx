import React, { useState } from "react";
import AddCard from "@/components/ui/AddCard.jsx";
import File from "@/assets/FinanceFile.png";
import AppModal from "@/components/ui/appModal/AppModal";
import AppTextArea from "@/components/ui/AppTextArea";
import AppSelect from "@/components/ui/AppSelect";
import AppInput from "@/components/ui/AppInput";
import AppCheckbox from "@/components/ui/AppCheckbox";

const AddBankAccount = () => {
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
                Account number <RedText>*</RedText>
              </>
            }
            placeholder="Enter your account number"
            customClass="my-5"
          />
          <AppInput
            label={
              <>
                Account name <RedText>*</RedText>
              </>
            }
            placeholder="Enter your bank account name"
            customClass="my-5"
          />
          <span className="flex w-full justify-between">
            <AppSelect
              label={
                <>
                  Currency <RedText>*</RedText>
                </>
              }
              placeholder="USD"
              customClass="w-[50%]"
            />
            <span className="px-2"></span>
            <AppInput label="Account code" placeholder="Enter account code" customClass="w-[50%]" />
          </span>
          <AppInput label="Bank name" placeholder="Enter your bank name" customClass="my-5" />
          <AppInput label="Routing number" placeholder="Enter your routing no" customClass="my-5" />
          <AppTextArea label="Description" placeholder="Enter here..." customClass="my-5" />
          <div className="flex items-start space-x-3 py-5">
            <AppCheckbox label="Make this primary bank account" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="card">
      <AddCard
        img={File}
        title="No Bank Account linked!"
        description="Adding your bank account allows you to import bank statements."
        btnText="Add Bank Account"
        onClickOpen={() => setIsModalOpen(true)}
      />
      <div className="relative">
        <AppModal
          isOpen={isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
          title="Add bank account"
          footerBtn={{ btnOne: "Cancel", btnTwo: "Save" }}
          content={<ExpenseAddModalContent />}
        />
      </div>
    </div>
  );
};

export default AddBankAccount;
