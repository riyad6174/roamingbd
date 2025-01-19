const AmenitiesFilter = () => {
  const amenities = [
    { name: '⭐', count: 92 },
    { name: '⭐⭐', count: 45 },
    { name: '⭐⭐⭐', count: 21 },
    { name: '⭐⭐⭐⭐', count: 78 },
    { name: '⭐⭐⭐⭐⭐', count: 679 },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div className='row y-gap-10 items-center justify-between' key={index}>
          <div className='col-auto'>
            <div className='form-checkbox d-flex items-center'>
              <input type='checkbox' />
              <div className='form-checkbox__mark'>
                <div className='form-checkbox__icon icon-check' />
              </div>
              <div className='text-15 ml-10'>{amenity.name}</div>
            </div>
          </div>
          <div className='col-auto'>
            <div className='text-15 text-light-1'>{amenity.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
