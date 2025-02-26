import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

const DateSearchMulti = ({ onDateChange }) => {
  const today = new DateObject(); // Get today's date
  const nextWeek = new DateObject().add(7, 'days'); // Get next week's date

  const [dates, setDates] = useState([today, nextWeek]); // Default selection: today → next week

  const handleDateChange = (selectedDates) => {
    // Ensure selectedDates is an array (range returns a single array)
    const updatedDates = Array.isArray(selectedDates)
      ? selectedDates
      : [selectedDates];

    setDates(updatedDates);
    if (onDateChange) {
      const formattedDates = updatedDates.map((date) =>
        date.format('YYYY-MM-DD')
      );
      onDateChange(formattedDates);
    }
  };

  return (
    <div className='text-15 text-light-1 py-10 ls-2 lh-16 custom_dual_datepicker'>
      <h4 className='text-15 text-light-1 fw-300' style={{ padding: '3px 0' }}>
        Select Dates
      </h4>
      <DatePicker
        inputClass='custom_input-picker fw-600'
        containerClassName='custom_container-picker'
        value={dates}
        onChange={handleDateChange}
        numberOfMonths={2}
        offsetY={10}
        format='MMMM DD'
        minDate={today} // Prevent past date selection
        range
        rangeHover
      />
    </div>
  );
};

export default DateSearchMulti;
