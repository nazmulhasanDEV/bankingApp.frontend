import React from "react";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const AppCheckbox = ({ label }) => (
  <Checkbox onChange={onChange}>
    <p className="text-medium-14 text-gray-secondary">{label || "checkbox title"}</p>
  </Checkbox>
);
export default AppCheckbox;
