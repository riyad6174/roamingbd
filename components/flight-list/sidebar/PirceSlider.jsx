import { useState, useEffect, useCallback } from 'react';
import InputRange from 'react-input-range';
import debounce from 'lodash.debounce';

const PriceSlider = ({ minPrice, maxPrice, onPriceChange, currentPrice }) => {
  const [price, setPrice] = useState(currentPrice);

  // Sync local state with parent state
  useEffect(() => {
    setPrice(currentPrice);
  }, [currentPrice]);

  const debouncedPriceChange = useCallback(
    debounce((value) => {
      onPriceChange(value);
    }, 500),
    []
  );

  useEffect(() => {
    return () => debouncedPriceChange.cancel();
  }, []);

  // Handle slider changes
  const handleOnChange = (value) => {
    setPrice(value);
    debouncedPriceChange(value); // Call debounced function
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
          minValue={minPrice}
          maxValue={maxPrice}
          value={price}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
