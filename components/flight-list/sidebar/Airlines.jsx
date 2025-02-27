// onSelectAirlines
const Airlines = ({ airplaneList, selectedAirlines, onSelectAirlines }) => {
  const handleCheckboxChange = (code) => {
    const updatedAirlines = selectedAirlines.includes(code)
      ? selectedAirlines.filter((c) => c !== code)
      : [...selectedAirlines, code];

    onSelectAirlines(updatedAirlines);
  };

  return (
    <>
      {airplaneList?.map((airline) => (
        <div
          className='row y-gap-10 items-center justify-between'
          key={airline.id}
        >
          <div className='col-auto'>
            <div className='form-checkbox d-flex items-center'>
              <input
                type='checkbox'
                name={airline.name}
                checked={selectedAirlines.includes(airline.code)}
                onChange={() => handleCheckboxChange(airline.code)}
              />
              <div className='form-checkbox__mark'>
                <div className='form-checkbox__icon icon-check' />
              </div>
              <img
                src={airline.image}
                alt={airline.name}
                className='ml-10'
                style={{ width: '24px', height: '24px' }}
              />
              <div className='text-15 ml-10 airline-name' title={airline.name}>
                {airline.name}
              </div>
            </div>
          </div>
          <div className='col-auto'>
            <div className='text-15 text-light-1'>{airline.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Airlines;
