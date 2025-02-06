import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { baseUrl } from '../../utils/network';
import { useRouter } from 'next/router';

// import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [otp, setOtp] = useState('');
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !value.name ||
      !value.email ||
      !value.password ||
      !value.password_confirmation
    ) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (value.password !== value.password_confirmation) {
      // toast.error('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/register`, {
        email: value.email,
        name: value.name,
        password: value.password,
        password_confirmation: value.password_confirmation,
      });

      if (response.data.success) {
        // toast.success('Registration successful! Enter OTP to verify.');
        setOtpModalOpen(true);
      } else {
        // toast.error(response.data.message || 'Registration failed.');
      }
    } catch (error) {
      // toast.error(error.response?.data?.message || 'Something went wrong.');
    }
    setLoading(false);
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      // toast.error('OTP must be 6 digits.');
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/submit-otp`, {
        otp,
        type: 'registration',
        phone: '',
        email: value.email,
      });

      if (response.data.success) {
        // toast.success('OTP verified successfully!');
        router.push('/login');
        setOtpModalOpen(false);
      } else {
        // toast.error(response.data.message || 'Invalid OTP, try again.');
      }
    } catch (error) {
      // toast.error(error.response?.data?.message || 'OTP verification failed.');
    }
  };

  return (
    <>
      <form className='row g-3' onSubmit={submitForm}>
        <div className='col-12'>
          <h1 className='text-22 fw-bold'>Welcome back</h1>
          <p className='mt-2'>
            Already have an account?{' '}
            <Link href='/login' className='text-primary'>
              Log in
            </Link>
          </p>
        </div>

        <div className='col-12'>
          <div className='form-floating form-input'>
            <input
              type='text'
              className='form-control'
              name='name'
              required
              value={value.name}
              onChange={changeHandler}
            />
            <label>Name</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-floating form-input'>
            <input
              type='email'
              className='form-control'
              name='email'
              required
              value={value.email}
              onChange={changeHandler}
            />
            <label>Email</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-floating form-input'>
            <input
              type='password'
              className='form-control'
              name='password'
              required
              value={value.password}
              onChange={changeHandler}
            />
            <label>Password</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-floating form-input'>
            <input
              type='password'
              className='form-control'
              name='password_confirmation'
              required
              value={value.password_confirmation}
              onChange={changeHandler}
            />
            <label>Confirm Password</label>
          </div>
        </div>

        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='newsletter'
            />
            <label className='form-check-label' htmlFor='newsletter'>
              Email me exclusive RoamingBD promotions. I can opt out later as
              stated in the Privacy Policy.
            </label>
          </div>
        </div>

        <div className='col-12'>
          <button
            type='submit'
            className='button py-20 -dark-1 bg-blue-1 text-white w-100'
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
      </form>

      {/* OTP Modal */}
      <div
        className={`modal fade ${isOtpModalOpen ? 'show d-block' : ''}`}
        tabIndex='-1'
        role='dialog'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Enter OTP</h5>
              <button
                type='button'
                className='btn-close'
                onClick={() => setOtpModalOpen(false)}
              ></button>
            </div>
            <div className='modal-body'>
              <div className='form-floating form-input'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter 6-digit OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
                <label>Enter 6 Digit Otp</label>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-dark rounded-0'
                onClick={handleOtpSubmit}
              >
                Submit OTP
              </button>
              <button
                className='btn btn-secondary rounded-0'
                onClick={() => setOtpModalOpen(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-x-lg'
                  viewBox='0 0 16 16'
                >
                  <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when modal is open */}
      {isOtpModalOpen && <div className='modal-backdrop fade show'></div>}
    </>
  );
};

export default SignUpForm;
