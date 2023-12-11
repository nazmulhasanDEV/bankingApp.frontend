import React, { useState } from "react";
import { DatePicker, Radio } from "antd";
const { RangePicker } = DatePicker;
const DateRange = () => {
  const [placement, SetPlacement] = useState("topLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <RangePicker placement={placement} />
    </>
  );
};
export default DateRange;
