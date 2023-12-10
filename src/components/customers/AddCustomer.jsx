import React, { useState } from "react";
import AddCard from "@/components/ui/AddCard.jsx";
import NoUser from "@/assets/UserCross.png";
import AppModal from "@/components/ui/appModal/AppModal";
import AppTextArea from "@/components/ui/AppTextArea";
import AppSelect from "@/components/ui/AppSelect";
import AppInput from "@/components/ui/AppInput";

const AddCustomer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RedText = ({ children }) => <span className="text-red-primary">{children}</span>;
  const CustomerAddModalContent = () => (
    <div className="flex flex-col">
      <div className="py-8" />
      <div className="p-2">
        <div>
          <AppInput
            label={
              <>
                Customer name <RedText>*</RedText>
              </>
            }
            placeholder="Enter customer's name"
            customClass="my-5"
          />
          <span className="flex justify-between">
            <AppInput label="Email" placeholder="Enter customer's email" customClass="mb-5 w-1/2" />
            <span className="px-2"></span>
            <AppInput
              label="Phone"
              placeholder="Enter customer's phone no"
              customClass="mb-5 w-1/2"
            />
          </span>
          <AppSelect label="Tax" />
          <AppTextArea label="Remark" placeholder="Enter here..." customClass="mt-5 mb-20" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="card">
      <AddCard
        img={NoUser}
        title="No Customers found!"
        description="Add your first customer now."
        btnText="Add customer"
        onClickOpen={() => setIsModalOpen(true)}
      />
      <div className="relative">
        <AppModal
          isOpen={isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
          title="Add new customer"
          footerBtn={{ btnOne: "Cancel", btnTwo: "Save" }}
          content={<CustomerAddModalContent />}
        />
      </div>
    </div>
  );
};

export default AddCustomer;
