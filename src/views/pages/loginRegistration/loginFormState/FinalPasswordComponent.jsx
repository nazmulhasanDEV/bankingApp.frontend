import React from "react";
import AppButton from "@/components/ui/AppButton";
import { useAuth } from "@/auth/AuthContext";

const FinalPasswordComponent = () => {
  const { login } = useAuth();
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex gap-2 flex-col items-center">
            <p className="text-semibold-28 text-gray-primary">All done!</p>
            <p className="text-medium-14 text-gray-secondary">
              Your password has been reset. Please log in again to use{" "}
              <span className="text-semi-14 text-black-primary">Accountly</span> now.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <AppButton text="Log in" customClass="btn-primary text-medium-14" onClickChange={login} />
      </div>
    </div>
  );
};

export default FinalPasswordComponent;
