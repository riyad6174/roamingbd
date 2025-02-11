import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
function EligibilityInfo({ data }) {
  return (
    <div className='container text-15 text-muted my-5'>
      <h3 className='text-20 text-blue-1 fw-bold mb-10'>
        Eligibility to Apply for Tourist Visa
      </h3>
      <div className='row  g-4'>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>
                <div className='d-flex gap-2 align-items-center text-dark justify-content-start gap-1'>
                  <span>
                    <GiCheckMark style={{ fontSize: '15px' }} />
                  </span>
                  <span>Basic Eligibility</span>
                </div>
              </h5>
              <p className='card-text text-16 px-20'>
                {data?.basic_eligibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibilityInfo;
