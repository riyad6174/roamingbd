import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/network';
import { useDispatch } from 'react-redux';
import { openLogin } from '../../features/modal/modalSlice';

function OtpModal() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); // State for storing email

  const dispatch = useDispatch();

  useEffect(() => {
    // Ensures this runs only on the client side
    if (typeof window !== 'undefined') {
      const storedEmail =
        localStorage.getItem('submittedEmail') || 'your email';
      setEmail(storedEmail);
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/submit-otp`, {
        otp: otpValue,
        type: 'registration',
        email: email,
        phone: '',
      });

      if (response.data.success) {
        dispatch(openLogin());
      } else {
        setError(response.data.message || 'Invalid OTP, try again.');
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
    }
    setLoading(false);
  };

  return (
    <div className='px-20'>
      <div className='d-flex flex-column py-20 text-start pt-30 align-items-start justify-content-center text-muted'>
        <p style={{ fontSize: '14px' }}>
          We have sent a verification code to <strong>{email}</strong>. Please
          check your inbox and enter the code below.
        </p>
        <p style={{ fontSize: '11px' }}>
          *Verification code is valid for 30 minutes after you receive it.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center py-20 gap-3'>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type='text'
              className='form-control text-center border bg-light'
              style={{
                width: '55px',
                height: '80px',
                fontSize: '20px',
                borderRadius: '35%',
              }}
              maxLength='1'
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        {error && <div className='alert alert-danger text-center'>{error}</div>}

        <p className='text-12 text-primary'>Resend Verification Code</p>

        <div className='pt-20 d-flex align-items-center justify-content-center'>
          <button
            type='submit'
            className='btn btn-primary rounded-3 w-75 py-10 mt-10'
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Submit OTP'}
          </button>
        </div>

        <div className='d-flex pb-20 text-center pt-30 align-items-center justify-content-center text-muted'>
          <p style={{ fontSize: '12px' }}>
            By signing in or registering, you agree to the Roaming BD Terms and
            Conditions and Privacy Statement.
          </p>
        </div>
      </form>
    </div>
  );
}

export default OtpModal;
