import React from "react";
import AppInput from "@/components/ui/AppInput";
import AppButton from "@/components/ui/AppButton";

const GeneralInfo = () => {
  return (
    <div className="px-6 py-2 flex justify-between">
      <div className="w-1/2">
        <div className="w-[35rem]">
          <AppInput label="Full name" placeholder="User name one" customClass="my-3" />
          <AppInput label="Email" placeholder="Enter your email" customClass="my-3" />
          <AppInput label="Password" placeholder="Enter your password" customClass="my-3" />
          <AppInput label="Phone" placeholder="123456789" customClass="my-3" />
          <AppInput label="Country" placeholder="Norway" customClass="my-3" />
          <AppInput label="City" placeholder="Oslo" customClass="my-3" />
          <AppInput label="State" placeholder="Palceholder" customClass="my-3" />
          <AppInput label="Postcode" placeholder="Palceholder" customClass="my-3" />
          <AppInput label="Street address" placeholder="Palceholder" customClass="my-3" />
        </div>
        <div className="w-fit">
          <AppButton text="Save" customClass="btn-primary  my-5" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
