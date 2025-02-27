import { useState, useEffect } from 'react';

const BaggagePolicy = ({ baggage, onSelectBaggage }) => {
  const [selectedBaggage, setSelectedBaggage] = useState([]);

  // Separate baggage into two categories
  const weightBaggage = baggage?.filter((item) => item.weight);
  const pieceBaggage = baggage?.filter((item) => item.pieceCount);

  // Remove duplicate weight-based baggage (using id, weight, unit as unique key)
  const uniqueWeightBaggage = Array.from(
    new Map(
      weightBaggage?.map((item) => [
        `${item.id}-${item.weight}-${item.unit}`,
        item,
      ])
    ).values()
  );

  // Remove duplicate piece-based baggage (using id, pieceCount, description1 as unique key)
  const uniquePieceBaggage = Array.from(
    new Map(
      pieceBaggage?.map((item) => [
        `${item?.id}-${item?.pieceCount}-${item?.description1}`,
        item,
      ])
    ).values()
  );

  const handleCheckboxChange = (baggageItem) => {
    setSelectedBaggage((prev) => {
      const newSelection = prev.some((b) => b.id === baggageItem?.id)
        ? prev.filter((b) => b.id !== baggageItem?.id)
        : [...prev, baggageItem];

      // Pass the new selection to parent
      onSelectBaggage(newSelection);
      console.log(newSelection, 'newSelection');
      return newSelection;
    });
  };

  return (
    <>
      {/* Weight-Based Baggage */}
      {uniqueWeightBaggage.length > 0 && (
        <>
          <h5 className='text-14 fw-500 mb-5'>Weight-Based</h5>
          {uniqueWeightBaggage.map((baggage) => (
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
                    {baggage?.weight} {baggage?.unit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Piece-Based Baggage */}
      {uniquePieceBaggage.length > 0 && (
        <>
          <h5 className='text-14 fw-500 mb-5 mt-15'>Piece-Based</h5>
          {uniquePieceBaggage.map((baggage) => (
            <div
              className='row y-gap-10 items-center justify-between'
              key={`${baggage.id}-${baggage.pieceCount}`}
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
                  <div className='text-12 ml-10'>
                    {baggage.description1} ({baggage.pieceCount} )
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default BaggagePolicy;
