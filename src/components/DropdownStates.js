import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropdownStates = ({ getState, statesName }) => {
  const [selectState, setSelectState] = useState(statesName[0]);
  function handleOnChange(e) {
    setSelectState(e);
    getState(e);
  }
  return (
    <Dropdown
      options={statesName}
      onChange={handleOnChange}
      value={selectState}
      placeholder="Select an option"
    />
  );
};

export default DropdownStates;
