import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerFormStartDate = ({ getStartDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  function handleOnChange(e) {
    setStartDate(e);
    getStartDate(e);
  }
  return (
    <div>
      <label>Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={handleOnChange}
        dayPlaceholder="dd"
        monthPlaceholder="mm"
        yearPlaceholder="yyyy"
      />
    </div>
  );
};

export default DatePickerFormStartDate;
