import React,{ useState} from "react";
import DatePicker from "react-datepicker";
import "./compostyle.css";
import "./date.css"; 

 const DateRange = () => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </>
    );
  };
  export default DateRange;