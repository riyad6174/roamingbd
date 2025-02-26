import { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
// onPriceChange;
const PriceSlider = ({ minPrice, maxPrice }) => {
  const [price, setPrice] = useState({ min: minPrice, max: maxPrice });

  // Update state when minPrice or maxPrice change
  useEffect(() => {
    setPrice({ min: minPrice, max: maxPrice });
  }, [minPrice, maxPrice]);

  // Handle slider changes and send data to parent
  const handleOnChange = (value) => {
    setPrice(value);
    // onPriceChange(value); // Pass updated values to the parent
  };

  return (
    <div className='js-price-rangeSlider'>
      <div className='text-14 fw-500'></div>

      <div className='d-flex justify-between mb-20'>
        <div className='text-15 text-dark-1'>
          <span className='js-lower mx-1'>৳{price.min}</span>-
          <span className='js-upper mx-1'>৳{price.max}</span>
        </div>
      </div>

      <div className='px-5'>
        <InputRange
          formatLabel={() => ``}
          minValue={minPrice} // Ensure slider respects minPrice
          maxValue={maxPrice} // Ensure slider respects maxPrice
          value={price}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
