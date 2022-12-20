import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropdownDepartment = ({ getDepartment, departments }) => {
  const [selectDepartment, setSelectDepartment] = useState(departments[0]);
  function handleOnChange(e) {
    setSelectDepartment(e);
    getDepartment(e);
    console.log(e);
  }
  return (
    <Dropdown
      options={departments}
      onChange={handleOnChange}
      value={selectDepartment}
      placeholder="Select an option"
    />
  );
};

export default DropdownDepartment;
