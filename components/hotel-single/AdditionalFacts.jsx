const AdditionalFacts = ({ hotel }) => {
  const recommendRatings = [
    {
      id: 1,
      name: 'Breakfast',
      numberOfRatings: '25',
    },
    {
      id: 2,
      name: 'WiFi',
      numberOfRatings: '14',
    },
    {
      id: 3,
      name: 'Food & Dining',
      numberOfRatings: '67',
    },
  ];

  return (
    <div className='px-30 py-30 border-light rounded-4 mt-30'>
      <div className='d-flex items-center'>
        <h3 className='text-18 fw-500 pb-8'>Additional Facts</h3>
      </div>
      {/* End d-flex */}

      <div className='d-flex mt-10'>
        <i className='icon-food text-16 mr-10 pt-5' />
        <div className='text-15'>
          The number of restaurant(s) in the hotel is 6
        </div>
      </div>
      <div className='d-flex mt-10'>
        <i className='icon-clock text-16 mr-10 pt-5' />
        <div className='text-15'>Check in from: 02:00 PM</div>
      </div>
      <div className='d-flex mt-10'>
        <i className='icon-clock text-16 mr-10 pt-5' />
        <div className='text-15'>Check Out until: 11:00 AM</div>
      </div>
      <div className='d-flex mt-10'>
        <i className='icon-bell-ring text-16 mr-10 pt-5' />
        <div className='text-15'>Reception Open Until: 12:00 AM</div>
      </div>
      {/* End d-flex */}

      {/* End .row */}
    </div>
  );
};

export default AdditionalFacts;
