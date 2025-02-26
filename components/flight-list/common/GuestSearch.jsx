import React, { useState } from 'react';

const counters = [
  { name: 'Adults', defaultValue: 2 },
  { name: 'Children', defaultValue: 1 },
];

const Counter = ({ name, defaultValue, onCounterChange }) => {
  const [count, setCount] = useState(defaultValue);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCounterChange(name, newCount);
  };

  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCounterChange(name, newCount);
    }
  };

  return (
    <>
      <div className='row y-gap-10 justify-between items-center'>
        <div className='col-auto'>
          <div className='text-15 lh-12 fw-500'>{name}</div>
          {name === 'Children' && (
            <div className='text-14 lh-12 text-light-1 mt-5'>Ages 0 - 17</div>
          )}
        </div>
        <div className='col-auto'>
          <div className='d-flex items-center js-counter'>
            <button
              className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down'
              onClick={decrementCount}
            >
              <i className='icon-minus text-12' />
            </button>
            <div className='flex-center size-20 ml-15 mr-15'>
              <div className='text-15 js-count'>{count}</div>
            </div>
            <button
              className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up'
              onClick={incrementCount}
            >
              <i className='icon-plus text-12' />
            </button>
          </div>
        </div>
      </div>
      <div className='border-top-light mt-24 mb-24' />
    </>
  );
};

const GuestSearch = ({ onGuestCountChange }) => {
  const [guestCounts, setGuestCounts] = useState({
    Adults: 2,
    Children: 1,
  });

  const handleCounterChange = (name, value) => {
    const updatedCounts = { ...guestCounts, [name]: value };
    setGuestCounts(updatedCounts);
    onGuestCountChange(updatedCounts); // Send data to the parent
  };

  return (
    <div
      className='searchMenu-guests px-24 border  lg:py-30 lg:px-0 js-form-dd js-form-counters'
      style={{ padding: '11px 0' }}
    >
      <div
        data-bs-toggle='dropdown'
        data-bs-auto-close='outside'
        aria-expanded='false'
        data-bs-offset='0,22'
      >
        <h4 className='text-15 text-light-1 fw-300 ls-2 lh-16'>
          Number of Passengers
        </h4>
        <div className='text-15 fw-500 text-light-1 ls-2 lh-16'>
          <span className='js-count-adult'>{guestCounts.Adults}</span> adults -{' '}
          <span className='js-count-child'>{guestCounts.Children}</span>{' '}
          children
        </div>
      </div>

      <div className='shadow-2 dropdown-menu min-width-400'>
        <div className='bg-white px-30 py-30 rounded-4 counter-box'>
          {counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              defaultValue={counter.defaultValue}
              onCounterChange={handleCounterChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestSearch;
