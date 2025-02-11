import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { closeModal } from '../features/modal/modalSlice';
import loginModal from '../components/popup/loginModal';
import LoginModal from '../components/popup/loginModal';
import RegModal from './popup/Registration';
import OtpModal from './popup/OtpModal';
const Modals = () => {
  const dispatch = useDispatch();
  const { showLogin, showRegister, showOtp } = useSelector(
    (state) => state.modal
  );

  // Add/remove Bootstrap modal classes dynamically
  useEffect(() => {
    if (showLogin || showRegister || showOtp) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showLogin, showRegister, showOtp]);

  return (
    <>
      {/* Modal Wrapper - Ensuring it's at the top */}
      <div style={{ position: 'relative', zIndex: 1050 }}>
        {/* Login Modal */}
        <div
          className={`modal  fade ${showLogin ? 'show d-block' : ''}`}
          tabIndex='-1'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header border-0'>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => dispatch(closeModal())}
                ></button>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h5 className='modal-title fs-2'>Please Sign in</h5>
                <p>You need to Sign in first to continue</p>
              </div>
              <div className='d-flex gap-2  align-items-center justify-content-center py-40'>
                <button className='btn btn-light py-10 px-40 d-flex gap-2 align-items-center justify-content-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='24'
                    height='24'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                    <path
                      fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    ></path>
                    <path
                      fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    ></path>
                    <path
                      fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                  </svg>
                  <span className='text-muted fw-bold'>Google</span>
                </button>
                <button className='btn btn-light px-30 py-10  d-flex gap-2 align-items-center justify-content-center'>
                  <img src='/img/facebook.png' style={{ width: '25px' }} />
                  <span className='text-muted fw-bold'>Facebook</span>
                </button>
              </div>
              <div class='content-section px-50'>
                <div class='divider'>
                  <div class='divider-text'>
                    <span>Or Sign In With</span>
                  </div>
                </div>
              </div>

              <div className='modal-body px-50'>
                <LoginModal />
              </div>
            </div>
          </div>
        </div>

        {/* Register Modal */}
        <div
          className={`modal fade ${showRegister ? 'show d-block' : ''}`}
          tabIndex='-1'
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header border-0'>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => dispatch(closeModal())}
                ></button>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <h5 className='modal-title fs-2'>Please Sign Up</h5>
                <p>You need to Sign in first to continue</p>
              </div>
              <div className='d-flex gap-2  align-items-center justify-content-center py-40'>
                <button className='btn btn-light py-10 px-40 d-flex gap-2 align-items-center justify-content-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='24'
                    height='24'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                    <path
                      fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    ></path>
                    <path
                      fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    ></path>
                    <path
                      fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                  </svg>
                  <span className='text-muted fw-bold'>Google</span>
                </button>
                <button className='btn btn-light px-30 py-10  d-flex gap-2 align-items-center justify-content-center'>
                  <img src='/img/facebook.png' style={{ width: '25px' }} />
                  <span className='text-muted fw-bold'>Facebook</span>
                </button>
              </div>
              <div class='content-section px-50'>
                <div class='divider'>
                  <div class='divider-text'>
                    <span>Or Sign In With</span>
                  </div>
                </div>
              </div>

              <div className='modal-body px-50'>
                <RegModal />
              </div>
            </div>
          </div>
        </div>

        {/* OTP Modal */}
        <div
          className={`modal fade ${showOtp ? 'show d-block' : ''}`}
          tabIndex='-1'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header border-0'>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => dispatch(closeModal())}
                ></button>
              </div>
              <div className='modal-body px-20'>
                <h5 className='modal-title text-center text-26'>
                  Enter Verification Code
                </h5>

                <OtpModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {(showLogin || showRegister || showOtp) && (
        <div
          className='modal-backdrop show'
          style={{ zIndex: 1040 }}
          onClick={() => dispatch(closeModal())}
        ></div>
      )}
    </>
  );
};

export default Modals;
