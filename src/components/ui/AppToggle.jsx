import React, { useState } from "react";

const AppToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="box bg-green-primary block h-6 w-10 rounded-full"></div>
          <div
            className={`dot absolute top-1 bg-white-primary flex h-4 w-4 items-center justify-center rounded-full ${
              isChecked ? "left-1" : "right-1"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default AppToggle;

