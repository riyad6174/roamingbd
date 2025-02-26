import { useState, useEffect } from 'react';
// onSelectBaggage;
const BaggagePolicy = ({ baggage }) => {
  console.log(baggage, 'bg');
  const [selectedBaggage, setSelectedBaggage] = useState([]);

  // Remove duplicates based on `id`, `weight`, and `unit`
  const uniqueBaggage = Array.from(
    new Map(
      baggage?.map((item) => [`${item.id}-${item.weight}-${item.unit}`, item])
    ).values()
  );

  // Debugging: Check if the uniqueBaggage list is correct
  useEffect(() => {
    console.log('Unique Baggage List:', uniqueBaggage);
  }, [uniqueBaggage]);
  // Ensure baggage is not undefined or empty
  if (!baggage || baggage.length === 0) {
    return <p>No baggage options available</p>;
  }

  const handleCheckboxChange = (baggage) => {
    setSelectedBaggage((prevSelected) => {
      const isSelected = prevSelected.some((b) => b.id === baggage.id);
      const updatedSelection = isSelected
        ? prevSelected.filter((b) => b.id !== baggage.id) // Remove if already selected
        : [...prevSelected, baggage]; // Add if not selected

      // onSelectBaggage(updatedSelection); // Pass selected baggage to parent
      return updatedSelection;
    });
  };

  return (
    <>
      {uniqueBaggage.map((baggage) => (
        <div
          className='row y-gap-10 items-center justify-between'
          key={`${baggage.id}-${baggage.weight}`}
        >
          <div className='col-auto'>
            <div className='form-checkbox d-flex items-center'>
              <input
                type='checkbox'
                name={`baggage-${baggage.id}`}
                checked={selectedBaggage.some((b) => b.id === baggage.id)}
                onChange={() => handleCheckboxChange(baggage)}
              />
              <div className='form-checkbox__mark'>
                <div className='form-checkbox__icon icon-check' />
              </div>
              <div className='text-15 ml-10'>
                {baggage.weight} {baggage.unit}
              </div>
            </div>
          </div>
          <div className='col-auto'>
            {/* <div className='text-15 text-light-1'>ID: {baggage.id}</div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default BaggagePolicy;
