const popularFilters = () => {
  const filters = [
    { label: '< 6 KM', count: 92 },
    { label: '< 5 KM', count: 45 },
    { label: '< 4 KM', count: 21 },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className='row y-gap-10 items-center justify-between'>
          <div className='col-auto'>
            <div className='form-checkbox d-flex items-center'>
              <input type='checkbox' />
              <div className='form-checkbox__mark'>
                <div className='form-checkbox__icon icon-check' />
              </div>
              <div className='text-15 ml-10'>{filter.label}</div>
            </div>
          </div>
          <div className='col-auto'>
            {/* <div className='text-15 text-light-1'>{filter.count}</div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default popularFilters;
