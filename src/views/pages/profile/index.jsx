import React from "react";
import { Tabs, Tab } from "@/components/ui/appTab";
import GeneralInfo from "./GeneralInfo";
import OrganizationInfo from "./OrganizationInfo";
import PasswordChangeForm from "./PasswordChangeForm";
import ImageUpload from "@/components/ui/avatarUpload";

const Profile = () => {
  return (
    <div className="p-10">
      <div className="flex w-full bg-gray-50">
        <div className="w-1/2 border-r-[1px] border-gray-200 my-16">
          <Tabs>
            <Tab component={<GeneralInfo />} active>
              General info
            </Tab>
            <Tab component={<OrganizationInfo />}>Organization info</Tab>
            <Tab component={<PasswordChangeForm />}>Change password</Tab>
          </Tabs>
          <span></span>
        </div>

        <div className="w-1/2 flex justify-center pt-10">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default Profile;
