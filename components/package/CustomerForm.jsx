import Link from 'next/link';
import React from 'react';

function CustomerForm() {
  return (
    <div className='col-xl-12 col-lg-12 mt-30 bg-white px-10 py-10 rounded-4'>
      <p className='text-20 py-10'>Guest Details</p>
      <div className='py-15 px-20 rounded-4 text-15 bg-blue-2'>
        Guest names must match the valid ID which will be used at check-in.
      </div>

      <div className='d-flex items-center justify-content-between text-18 py-20'>
        <span>Primary Guest</span>
        <span className='px-10 py-1 border rounded text-16'>
          Add New Guest Optional
        </span>
      </div>
      {/* End register notify */}

      <div className='row x-gap-20 y-gap-20 pt-20'>
        <div className='col-12'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Full Name</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-md-6'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Email</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-md-6'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Phone Number</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-12'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Address line 1</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-12'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Address line 2</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-md-6'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>
              State/Province/Region
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-md-6 mb-20'>
          <div className='form-input '>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>
              ZIP code/Postal code
            </label>
          </div>
        </div>
        {/* End col-12 */}
        <div className='col-12  py-15 px-20 rounded-4 text-15 bg-light-2 '>
          The property will do its best, but cannot guarantee to fulfill all
          requests.
        </div>

        <div className='col-12 mt-20'>
          <div className='form-input '>
            <textarea required rows={6} defaultValue={''} />
            <label className='lh-1 text-16 text-light-1'>
              Special Requests
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className='col-12'>
          <div className='row y-gap-20 items-center justify-between'>
            <div className='col-auto'>
              <div className='text-14 text-light-1'>
                By proceeding with this booking, I agree to GoTrip Terms of Use
                and Privacy Policy.
              </div>
            </div>
            {/* End col-12 */}
          </div>
        </div>
        {/* End col-12 */}
      </div>
      {/* End .row */}
    </div>
  );
}

export default CustomerForm;
