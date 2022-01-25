import React, { useState } from "react";
import DatePicker from "react-datepicker";
// npm install react-datepicker --save 설치 필수입니다.
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomDatepicker = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      showDisabledMonthNavigation
      className="datepick"
    />
  );
};

export default CustomDatepicker;
