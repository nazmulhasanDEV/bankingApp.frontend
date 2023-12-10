import React, { useState } from "react";

const RadioButtonGroup = ({ radioData, customClass }) => {
  const [currentId, setCurrentId] = useState(null);

  const handleItemClick = (id) => {
    if (currentId !== id) setCurrentId(id);
  };

  return (
    <div className={`${customClass}`}>
      {radioData.map((item) => (
        <div key={item.id} className="flex items-center mr-4">
          <input
            type="radio"
            id={`radio-${item.id}`}
            name="radioGroup"
            checked={currentId === item.id}
            onChange={() => handleItemClick(item.id)}
            className="hidden"
          />

          <label
            htmlFor={`radio-${item.id}`}
            className="flex items-center justify-between cursor-pointer text-medium-14 text-gray-primary"
          >
            {currentId === item.id ? (
              <span
                id={`radio-${item.id}`}
                className="w-5 h-5 inline-block mr-2 rounded-full flex-no-shrink border-purple-primary border-[5px]"
              />
            ) : (
              <span
                id={`radio-${item.id}`}
                className="w-5 h-5 inline-block mr-2 rounded-full flex-no-shrink border border-gray-200"
              />
            )}
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
