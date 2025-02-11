import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  closeLogin,
  closeModal,
  openRegister,
} from '../../features/modal/modalSlice';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import { baseUrl } from '../../utils/network';
import { useRouter } from 'next/router';

function LoginModal() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' }); // Stores API response messages
  const validator = useRef(new SimpleReactValidator()).current;
  const router = useRouter();
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' }); // Clear previous messages

    if (validator.allValid()) {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: value.email,
          password: value.password,
        });

        if (response.data?.data?.access_token) {
          localStorage.setItem(
            'user',
            JSON.stringify(response.data?.data?.userInfo)
          );
          localStorage.setItem('token', response.data?.data?.access_token);

          setMessage({
            type: 'success',
            text: 'Login successful!',
          });
          setValue({ email: '', password: '' });
          const redirectURL = localStorage.getItem('redirectTo');
          if (redirectURL) {
            router.push(redirectURL);
          }
          // Close modal after a short delay
          setTimeout(() => {
            dispatch(closeModal());
          }, 1500);
        } else {
          setMessage({
            type: 'danger',
            text: response.data.message || 'Login failed. Try again.',
          });
        }
      } catch (error) {
        console.error('Login error:', error);
        setMessage({
          type: 'danger',
          text: error.response?.data?.message || 'Invalid credentials.',
        });
      }

      setLoading(false);
    } else {
      validator.showMessages();
      setMessage({
        type: 'danger',
        text: 'Please fill in all fields correctly.',
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control bg-light py-10'
            id='email'
            placeholder='Enter email'
            value={value.email}
            onChange={handleChange}
          />
          {validator.message('email', value.email, 'required|email')}
        </div>

        <div className='form-group mt-20'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control bg-light py-10'
            id='password'
            placeholder='Password'
            value={value.password}
            onChange={handleChange}
          />
          {validator.message('password', value.password, 'required|min:6')}
        </div>

        <div className='py-20 d-flex align-items-center justify-content-between'>
          <span className='text-primary'>Or Sign in with Phone Number</span>
          <span className='text-primary fw-bold fs-6'>Forgot Password?</span>
        </div>

        <button
          type='submit'
          className='btn btn-primary rounded-3 w-100 py-10 mt-10'
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        {/* Bootstrap Alert for Messages */}
        {message.text && (
          <div
            className={`alert alert-${message.type} mt-3 text-center`}
            role='alert'
          >
            {message.text}
          </div>
        )}

        <div className='d-flex align-items-center justify-content-center gap-3 pt-50'>
          <span className='text-muted'>Don&apos; Have an account?</span>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(openRegister())}
            className='fw-bold text-primary'
          >
            Sign Up
          </span>
        </div>

        <div className='d-flex align-items-center justify-content-center gap-3'>
          <span className='text-muted'>Don&apos;t Have an Agent account?</span>
          <span className='fw-bold text-primary'>Create Account</span>
        </div>

        <div className='d-flex text-center pt-30 align-items-center justify-content-center text-muted'>
          <p style={{ fontSize: '12px' }}>
            By signing in or registering, you are deemed to have agreed to the
            Roaming BD Terms and Conditions and Privacy Statement.
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
