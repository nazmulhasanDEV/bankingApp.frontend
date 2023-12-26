import React, { useState } from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;



const DateRange = ({onChangeHandler = () => {} }) => {
  const [placement, SetPlacement] = useState("topLeft");

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  
  return (
    <>
      <RangePicker placement={placement} onChange={onChangeHandler} />
    </>
  );
};
export default DateRange;
