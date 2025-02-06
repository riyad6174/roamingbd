import React from 'react';

function EligibilityInfo({ data }) {
  return (
    <div className='container text-15 text-muted my-5'>
      <h3 className='text-20 text-blue-1 fw-bold mb-10'>
        Eligibility to Apply for Tourist Visa
      </h3>
      <div className='row row-cols-md-2 g-4'>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>
                <div className='d-flex align-items-center justify-content-start gap-1'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check2-square mb-1'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z' />
                      <path d='m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0' />
                    </svg>
                  </span>
                  <span>Eligibility</span>
                </div>
              </h5>
              <p className='card-text text-16'>{data?.basic_eligibility}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibilityInfo;
