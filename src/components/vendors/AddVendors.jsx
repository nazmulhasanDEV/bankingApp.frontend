import React, { useState } from "react";
import AddCard from "@/components/ui/AddCard.jsx";
import NoUser from "@/assets/UserCross.png";
import AppModal from "@/components/ui/appModal/AppModal";
import AppSelect from "@/components/ui/AppSelect";
import AppInput from "@/components/ui/AppInput";

const AddVendors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RedText = ({ children }) => <span className="text-red-primary">{children}</span>;
  const VendorAddModalContent = () => (
    <div className="flex flex-col">
      <div className="py-6" />
      <div className="p-2">
        <div>
          <AppInput
            label={
              <>
                Vendor name <RedText>*</RedText>
              </>
            }
            placeholder="Enter vendor's name"
            customClass="my-5"
          />
          <span className="flex justify-between my-5">
            <AppInput label="Email" placeholder="Enter vendor's email" customClass="w-1/2" />
            <span className="px-2"></span>
            <AppInput label="Phone" placeholder="Enter vendor's phone no" customClass="w-1/2" />
          </span>
          <AppInput label="Address" placeholder="Enter vendor's address" customClass="my-5" />
          <span className="flex justify-between my-5">
            <AppSelect label="Country" placeholder="Enter vendor's country" customClass="w-1/2" />
            <span className="px-2"></span>
            <AppSelect label="Currency" placeholder="Enter vendor's currency" customClass="w-1/2" />
          </span>

          <span className="flex justify-between mt-5 mb-20">
            <AppInput label="Contact person" placeholder="Enter contact person's name" customClass="w-1/2" />
            <span className="px-2"></span>
            <AppInput label="Contact person's phone" placeholder="Enter contact person's phone no" customClass="w-1/2" />
          </span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="card">
      <AddCard
        img={NoUser}
        title="No Vendor found!"
        description="Add your first Vendor now."
        btnText="Add Vendor"
        onClickOpen={() => setIsModalOpen(true)}
      />
      <div className="relative">
        <AppModal
          isOpen={isModalOpen}
          onClose={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
          title="Add new vendor"
          footerBtn={{ btnOne: "Cancel", btnTwo: "Save" }}
          content={<VendorAddModalContent />}
        />
      </div>
    </div>
  );
};

export default AddVendors;
