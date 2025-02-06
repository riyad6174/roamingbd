import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
// import { toast } from 'react-toastify';
import { baseUrl } from '../../utils/network';

const LoginForm = () => {
  const router = useRouter();
  const [value, setValue] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const validator = useRef(new SimpleReactValidator()).current;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: value.email,
          password: value.password,
        });

        if (response.data?.data?.access_token) {
          // toast.success('Login successful!');

          localStorage.setItem(
            'user',
            JSON.stringify(response.data?.data?.userInfo)
          );

          localStorage.setItem('token', response.data?.data?.access_token);

          const redirectTo = localStorage.getItem('redirectTo') || '/';
          localStorage.removeItem('redirectTo'); // Remove stored page
          router.push(redirectTo);
        } else {
          // toast.error(response.data.message || 'Login failed. Try again.');
        }
      } catch (error) {
        console.error('Login error:', error);
        // toast.error(error.response?.data?.message || 'Invalid credentials.');
      }

      setLoading(false);
    } else {
      validator.showMessages();
      toast.error('Please fill in all fields correctly.');
    }
  };

  return (
    <form className='row y-gap-20' onSubmit={submitForm}>
      <div className='col-12'>
        <h1 className='text-22 fw-500'>Welcome back</h1>
        <p className='mt-10'>
          Don&apos;t have an account yet?{' '}
          <Link href='/signup' className='text-blue-1'>
            Sign up for free
          </Link>
        </p>
      </div>

      <div className='col-12'>
        <div className='form-input'>
          <input
            type='text'
            name='email'
            value={value.email}
            onChange={handleChange}
            required
          />
          <label className='lh-1 text-14 text-light-1'>Email</label>
          {validator.message('email', value.email, 'required|email')}
        </div>
      </div>

      <div className='col-12'>
        <div className='form-input'>
          <input
            type='password'
            name='password'
            value={value.password}
            onChange={handleChange}
            required
          />
          <label className='lh-1 text-14 text-light-1'>Password</label>
          {validator.message('password', value.password, 'required|min:6')}
        </div>
      </div>

      <div className='col-12'>
        <Link
          href='/forgot-password'
          className='text-14 fw-500 text-blue-1 underline'
        >
          Forgot your password?
        </Link>
      </div>

      <div className='col-12'>
        <button
          type='submit'
          className='button py-20 -dark-1 bg-blue-1 text-white w-100'
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
          <div className='icon-arrow-top-right ml-15' />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
