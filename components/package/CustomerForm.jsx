import React, { useEffect, useState } from 'react';

function CustomerForm() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('user');
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo({
        name: parsedUserInfo.name || '',
        email: parsedUserInfo.email || '',
        phone: parsedUserInfo.phone || '',
      });
    }
  }, []);

  return (
    <div className='col-xl-12 col-lg-12 mt-30 bg-white px-10 py-10 rounded-4'>
      <div className='row x-gap-20 y-gap-20 pt-20'>
        <div className='col-12'>
          <div className='form-input'>
            <input type='text' required value={userInfo.name} readOnly />
            <label className='lh-1 text-16 text-light-1'>Name</label>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='form-input'>
            <input type='text' required value={userInfo.email} readOnly />
            <label className='lh-1 text-16 text-light-1'>Email</label>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='form-input'>
            <input type='text' required value={userInfo.phone} readOnly />
            <label className='lh-1 text-16 text-light-1'>Phone Number</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-input'>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Address line 1</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-input'>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>Address line 2</label>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='form-input'>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>
              State/Province/Region
            </label>
          </div>
        </div>

        <div className='col-md-6 mb-20'>
          <div className='form-input'>
            <input type='text' required />
            <label className='lh-1 text-16 text-light-1'>
              ZIP code/Postal code
            </label>
          </div>
        </div>

        <div className='col-12 py-15 px-20 rounded-4 text-15 bg-light-2'>
          The property will do its best, but cannot guarantee to fulfill all
          requests.
        </div>

        <div className='col-12 mt-20'>
          <div className='form-input'>
            <textarea required rows={6} defaultValue={''} />
            <label className='lh-1 text-16 text-light-1'>
              Special Requests
            </label>
          </div>
        </div>

        <div className='col-12'>
          <div className='row y-gap-20 items-center justify-between'>
            <div className='col-auto'>
              <div className='text-14 text-light-1'>
                By proceeding with this booking, I agree to Roaming BD Terms of
                Use and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
