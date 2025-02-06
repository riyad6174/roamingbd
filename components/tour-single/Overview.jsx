import React from 'react';

const Overview = ({ tour }) => {
  return (
    <div className='container text-15 text-muted'>
      <section
        className='my-5'
        dangerouslySetInnerHTML={{ __html: tour?.description || '' }}
      />
    </div>
  );
};

export default Overview;
