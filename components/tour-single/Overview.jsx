import React from 'react';

const Overview = ({ visaServices }) => {
  return (
    <div className='container text-15 text-muted'>
      <h5 className=''>Description</h5>

      <section
        className='my-5'
        dangerouslySetInnerHTML={{ __html: visaServices?.description || '' }}
      />
    </div>
  );
};

export default Overview;
