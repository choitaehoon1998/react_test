import React, { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
    const [dateTime, setDateTime] = useState(new Date());
    return (
        <div>
            <DatePicker
                selected={dateTime}
                onChange={date => setDateTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy MMMM d, h:mm aa"
            />
        </div>
    );
};

export default DatePickerComponent;