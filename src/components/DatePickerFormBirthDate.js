import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerFormBirthDate = ({ getDateOfBirth }) => {
  const [birthDate, setBirthDate] = useState(new Date());

  function handleOnChange(e) {
    setBirthDate(e);
    getDateOfBirth(e);
  }
  return (
    <div>
      <label>Date of Birth</label>
      <DatePicker
        selected={birthDate}
        onChange={handleOnChange}
        dateFormat="MM/dd/yyyy"
        closeOnScroll={true}
      />
    </div>
  );
};

export default DatePickerFormBirthDate;
