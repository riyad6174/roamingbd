import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/network';
import { useRouter } from 'next/router';
import {
  openLogin,
  openOtp,
  openRegister,
} from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

function RegModal() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' }); // Clear previous messages

    // Validation
    if (
      !value.name ||
      !value.email ||
      !value.phone ||
      !value.password ||
      !value.password_confirmation
    ) {
      setMessage({ type: 'danger', text: 'All fields are required.' });
      return;
    }

    if (value.password !== value.password_confirmation) {
      setMessage({ type: 'danger', text: 'Passwords do not match.' });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/register`, value);
      console.log(response.data.success, 'resp');

      if (response.data.success) {
        setMessage({
          type: 'success',
          text: 'Registration successful!Please Submit OTP',
        });

        localStorage.setItem('submittedEmail', value?.email);
        setValue({
          name: '',
          email: '',
          phone: '',
          password: '',
          password_confirmation: '',
        });
        // Redirect to login after 2 seconds
        setTimeout(() => {
          dispatch(openOtp());
        }, 2000);
      } else {
        setMessage({
          type: 'danger',
          text: response.data.message || 'Registration failed.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'danger',
        text: error.response?.data?.message || 'Something went wrong.',
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className='row'>
          <div className='col-md-12 mb-20'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control bg-light py-10'
                id='name'
                name='name'
                placeholder='Enter your name'
                value={value.name}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group mb-20'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control bg-light py-10'
                id='email'
                name='email'
                placeholder='Enter email'
                value={value.email}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                className='form-control bg-light py-10'
                id='phone'
                name='phone'
                placeholder='Enter Phone'
                value={value.phone}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className='col-md-6 mb-20'>
            <div className='form-group '>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control bg-light py-10'
                id='password'
                name='password'
                placeholder='Password'
                value={value.password}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className='col-md-6 '>
            <div className='form-group '>
              <label htmlFor='password_confirmation'>Confirm Password</label>
              <input
                type='password'
                className='form-control bg-light py-10'
                id='password_confirmation'
                name='password_confirmation'
                placeholder='Confirm Password'
                value={value.password_confirmation}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
        </div>

        <div className='py-20 d-flex align-items-center justify-content-between'>
          <span className='text-primary'>Or Sign Up with Phone Number</span>
          <span className='text-primary fw-bold fs-6'>Forgot Password?</span>
        </div>

        <button
          type='submit'
          className='btn btn-primary rounded-3 w-100 py-10 mt-10'
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Alert Messages */}
        {message.text && (
          <div className={`alert alert-${message.type} mt-3`} role='alert'>
            {message.text}
          </div>
        )}

        <div className='d-flex align-items-center justify-content-center gap-3 pt-50'>
          <span className='text-muted'>Already Have an account?</span>
          <span
            onClick={() => dispatch(openLogin())}
            className='fw-bold text-primary'
            style={{ cursor: 'pointer' }}
          >
            Sign In
          </span>
        </div>

        <div className='d-flex align-items-center justify-content-center gap-3'>
          <span className='text-muted'>Don&apos;t Have an Agent account?</span>
          <span className='fw-bold text-primary'>Create Account</span>
        </div>

        <div className='d-flex text-center pt-30 align-items-center justify-content-center text-muted'>
          <p style={{ fontSize: '12px' }}>
            By signing in or registering, you agree to the Roaming BD Terms and
            Conditions and Privacy Statement.
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegModal;
