import React, { useState } from "react";
import AddCard from "@/components/ui/AddCard.jsx";
import RadioButtonGroup from "@/components/ui/RadioButtonGroup";
import { productTypes } from "@/store/dummyData";
import AppInput from "@/components/ui/AppInput";
import AppTextArea from "@/components/ui/AppTextArea";
import AppSelect from "@/components/ui/AppSelect";
import AppToggle from "@/components/ui/AppToggle";
import AppModal from "@/components/ui/appModal/AppModal";

const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RedText = ({ children }) => <span className="text-red-primary">{children}</span>;
  const AddProductModalContent = () => (
    <div className="flex flex-col">
      <div className="py-8" />
      <div className="p-2">
        <h2 className="py-2">
          Type <span className="text-red-primary">*</span>
        </h2>
        <RadioButtonGroup radioData={productTypes} customClass="flex gap-4" />
        <div>
          <AppInput
            label={
              <>
                Product Name <RedText>*</RedText>
              </>
            }
            placeholder="Enter your bank account name"
            customClass="my-5"
          />
          <span className="flex justify-between">
            <AppInput
              label="Unit"
              placeholder="Enter your bank account name"
              customClass="mb-5 w-1/2"
            />
            <span className="px-2"></span>
            <AppInput
              label="Selling price"
              placeholder="Enter your bank account name"
              customClass="mb-5 w-1/2"
            />
          </span>
          <AppSelect label="Tax" />
          <AppTextArea
            label="Description"
            placeholder="Write your thoughts here..."
            customClass="my-5"
          />
        </div>
        <div className="flex justify-between mt-5 mb-16">
          <p className="text-medium-14 text-gray-secondary">Make this product active</p>
          <AppToggle />
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <AddCard
        img="src\assets\Packaging.png"
        title="No Products are added yet"
        description="Add your products here. It can be a physical product or any services that you provides. "
        btnText="Add new product"
        onClickOpen={() => setIsModalOpen(true)}
      />
      <div className="relative">
        <AppModal
          isOpen={isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
          title="Add new product"
          footerBtn={{ btnOne: "Cancel", btnTwo: "Add" }}
          content={<AddProductModalContent />}
        />
      </div>
    </div>
  );
};

export default AddProduct;
