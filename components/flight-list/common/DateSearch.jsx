// import React, { useState } from 'react';
// import DatePicker, { DateObject } from 'react-multi-date-picker';

// const DateSearch = () => {
//   const [dates, setDates] = useState([
//     new DateObject().setDay(15),
//     new DateObject().setDay(14).add(1, 'month'),
//   ]);

//   return (
//     <div className='text-15 text-light-1 py-2 ls-2 lh-16 custom_dual_datepicker'>
//       <h4 className='text-15 fw-400 '>Depart</h4>
//       <DatePicker
//         inputClass='custom_input-picker'
//         containerClassName='custom_container-picker'
//         value={dates}
//         onChange={setDates}
//         numberOfMonths={2}
//         offsetY={10}
//         range
//         rangeHover
//         format='MMMM DD'
//       />
//     </div>
//   );
// };

// export default DateSearch;
import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

const DateSearch = ({ onDateChange }) => {
  const today = new DateObject(); // Get today's date
  const [date, setDate] = useState(today);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange && onDateChange(selectedDate.format('YYYY-MM-DD')); // Send formatted date to parent
  };

  return (
    <div className='text-15  text-light-1 py-10 ls-2  lh-16 custom_dual_datepicker'>
      <h4
        className='text-15 text-light-1 fw-300  '
        style={{ padding: '3px 0' }}
      >
        Select Date
      </h4>
      <DatePicker
        inputClass='custom_input-picker fw-600'
        containerClassName='custom_container-picker'
        value={date}
        onChange={handleDateChange}
        numberOfMonths={1}
        offsetY={10}
        format='MMMM DD'
        minDate={today} // Disable past dates
      />
    </div>
  );
};

export default DateSearch;
