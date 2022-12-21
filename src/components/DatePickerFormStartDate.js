import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerFormStartDate = ({ getStartDate }) => {
  const [dateStart, setDateStart] = useState(new Date());
  function handleOnChange(e) {
    setDateStart(e);
    getStartDate(e);
  }
  return (
    <div>
      <label>Start Date</label>
      <DatePicker
        selected={dateStart}
        onChange={handleOnChange}
        closeOnScroll={true}
      />
    </div>
  );
};

export default DatePickerFormStartDate;
