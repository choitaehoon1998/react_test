import React, { useState } from "react";
import DatePicker from "react-datepicker";
// npm install react-datepicker --save 설치 필수입니다.
import "react-datepicker/dist/react-datepicker.css";

const NomalDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default NomalDatepicker;
