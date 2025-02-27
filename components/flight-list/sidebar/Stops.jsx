import { useState } from 'react';

const Stops = ({ onSelectStops }) => {
  const [selectedStops, setSelectedStops] = useState([]);

  // Handles checkbox selection
  const handleCheckboxChange = (value) => {
    setSelectedStops((prevSelected) => {
      const isSelected = prevSelected.includes(value);
      const updatedSelection = isSelected
        ? prevSelected.filter((stop) => stop !== value) // Remove if already selected
        : [...prevSelected, value]; // Add if not selected

      onSelectStops(updatedSelection); // Pass selection to parent
      console.log(updatedSelection, 'upp');

      return updatedSelection;
    });
  };

  return (
    <>
      <div className='row y-gap-10 items-center justify-between'>
        <div className='col-auto'>
          <div className='form-checkbox d-flex items-center'>
            <input
              type='checkbox'
              checked={selectedStops.includes(0)}
              onChange={() => handleCheckboxChange(0)}
            />
            <div className='form-checkbox__mark'>
              <div className='form-checkbox__icon icon-check' />
            </div>
            <div className='text-15 ml-10'>Nonstop</div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className='row y-gap-10 items-center justify-between'>
        <div className='col-auto'>
          <div className='form-checkbox d-flex items-center'>
            <input
              type='checkbox'
              checked={selectedStops.includes(1)}
              onChange={() => handleCheckboxChange(1)}
            />
            <div className='form-checkbox__mark'>
              <div className='form-checkbox__icon icon-check' />
            </div>
            <div className='text-15 ml-10'>1 Stop</div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className='row y-gap-10 items-center justify-between'>
        <div className='col-auto'>
          <div className='form-checkbox d-flex items-center'>
            <input
              type='checkbox'
              checked={selectedStops.includes(2)}
              onChange={() => handleCheckboxChange(2)}
            />
            <div className='form-checkbox__mark'>
              <div className='form-checkbox__icon icon-check' />
            </div>
            <div className='text-15 ml-10'>2+ Stops</div>
          </div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default Stops;
