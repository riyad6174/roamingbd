import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

const DateSearch = () => {
  const today = new DateObject();
  const [dates, setDates] = useState([
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, 'month'),
  ]);

  return (
    <div
      className='searchMenu-date  lg:py-20 lg:px-0 js-form-dd js-calendar'
      style={{ padding: '2px 0' }}
    >
      <div>
        <div className='text-15 d-flex align-items-center justify-content-between fw-500 ls-2 lh-16'>
          <span className='mb-2 small'>Check in</span>
          <span className='text-center text-muted small flex-grow-1'>
            1 Night
          </span>
          <span className='mb-2 small'>Check out</span>
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <DatePicker
            inputClass='custom_input-picker'
            containerClassName='custom_container-picker'
            value={dates}
            onChange={setDates}
            numberOfMonths={2}
            offsetY={10}
            range
            rangeHover
            format='MMMM DD'
            minDate={today}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSearch;
