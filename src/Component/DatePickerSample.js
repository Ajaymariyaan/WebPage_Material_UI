import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
function DatePickerSample() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
        <DatePicker
  selected={date}
  onSelect={handleDateSelect} 
  onChange={handleDateChange} 
/> */}

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;

        </>
    )
}

export default DatePickerSample;
