import React from "react";
import AppInput from "@/components/ui/AppInput";
import AppButton from "@/components/ui/AppButton";
import AppSelect from "@/components/ui/AppSelect";

const OrganizationInfo = () => {
  return (
    <div className="px-6 py-2 flex flex-col">
      <div className="w-[35rem]">
        <AppInput label="Full name" placeholder="User name one" customClass="my-3" />
        <AppSelect label="Business type" />
        <AppInput label="Password" placeholder="Enter your password" customClass="my-3" />
        <AppInput label="Phone" placeholder="123456789" customClass="my-3" />
      </div>
      <div className="w-fit">
        <AppButton text="Save" customClass="btn-primary  my-5" />
      </div>
    </div>
  );
};

export default OrganizationInfo;
