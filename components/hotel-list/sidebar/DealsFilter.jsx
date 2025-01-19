const DealsFilter = () => {
  const dealsData = [
    { label: 'BDT 40,000 - BDT 50,000' },
    { label: 'BDT 40,000 - BDT 50,000' },
    { label: 'BDT 40,000 - BDT 50,000' },
  ];

  return (
    <>
      {dealsData.map((deal, index) => (
        <div className='col-auto' key={index}>
          <div className='form-checkbox d-flex items-center'>
            <input type='checkbox' />
            <div className='form-checkbox__mark'>
              <div className='form-checkbox__icon icon-check' />
            </div>
            <div className='text-15 ml-10'>{deal.label}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealsFilter;
