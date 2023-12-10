import React from "react";
import AppInput from "@/components/ui/AppInput";
import AppButton from "@/components/ui/AppButton";

const PasswordChangeForm = () => {
  return (
    <div className="px-6 py-2 flex justify-between">
      <div className="w-1/2">
        <div className="w-[35rem]">
          <AppInput label="Old password" placeholder="old password" customClass="my-3" />
          <AppInput label="New password" placeholder="new password" customClass="my-3" />
          <AppInput label="Confirm new password" placeholder="confirmation of new password" customClass="my-3" />
        </div>
        <div className="w-fit">
          <AppButton text="Update" customClass="btn-primary  my-5" />
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeForm;
