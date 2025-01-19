import React from 'react';

const ReturnPolicyCard = () => {
  return (
    <div className=' mt-20'>
      <div className='bg-white px-10 py-10 rounded'>
        <h3 className='text-18 mb-4'>Cancellation Policy</h3>
        <p className='text-dark'>
          At <strong>Roaming BD</strong>, we understand that plans can change
          unexpectedly. We strive to provide a flexible and customer-friendly
          cancellation and refund policy for flight bookings. Please review the
          following policy details:
        </p>
        <div className='mt-3'>
          <h6>Cancellation Requests:</h6>
          <ul className='list-disc ps-3'>
            <li>
              All cancellation requests must be submitted through our website or
              by contacting our customer support team.
            </li>
            <li>
              Cancellation requests made through our website should be done by
              accessing your booking and following the cancellation process.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyCard;
