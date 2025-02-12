import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainMenu from '../MainMenu';
import CurrenctyMegaMenu from '../CurrenctyMegaMenu';
import LanguageMegaMenu from '../LanguageMegaMenu';
import HeaderSearch from '../HeaderSearch';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';
import { useDispatch } from 'react-redux';
import { openLogin, openRegister } from '../../../features/modal/modalSlice';

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavbar(window.scrollY >= 10);
    });

    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('user');
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <>
      <header className={`header bg-dark-5 ${navbar ? 'is-sticky' : ''}`}>
        <div className='header__container px-30 sm:px-20'>
          <div className='row justify-between items-center'>
            <div className='col-auto'>
              <div className='d-flex items-center'>
                <Link href='/' className='header-logo mr-20'>
                  <img src='/img/general/logo.png' alt='logo icon' />
                </Link>
                {/* End logo */}
                <div className='d-flex px-10 items-center ml-24 is-menu-opened-hide md:d-none'>
                  <button
                    className='text-26 xl:text-20 text-white icon-search'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasTop2'
                    aria-controls='offcanvasTop2'
                  ></button>
                </div>
                {/* End logo */}
                <div className='header-menu'>
                  <div className='header-menu__content'>
                    <Menu style='text-white' />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className='col-auto text-white'>
              <div className='d-flex items-center gap-3'>
                {/* End language and currency selector */}

                <div className='d-flex items-center ml-8 is-menu-opened-hide md:d-none'>
                  <button
                    onClick={() => dispatch(openRegister())}
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    Find Bookings
                  </button>
                </div>
                <div className='d-flex items-center ml-8 is-menu-opened-hide md:d-none'>
                  <Link
                    href='/agent'
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    Become An Agent
                  </Link>
                </div>

                <div className='d-flex items-center ml-8 is-menu-opened-hide md:d-none'>
                  <button
                    onClick={() => dispatch(openLogin())}
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    {user ? (
                      <div className='d-flex align-items-center gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          class='bi bi-person-circle'
                          viewBox='0 0 16 16'
                        >
                          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
                          <path
                            fill-rule='evenodd'
                            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1'
                          />
                        </svg>
                        <span>{user.name}</span>
                      </div>
                    ) : (
                      'Sign In / Register'
                    )}
                  </button>
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className='d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1'>
                  <div>
                    <Link
                      href='/'
                      className='d-flex items-center icon-user text-white text-22'
                    />
                  </div>
                  <div>
                    <button
                      className='d-flex items-center icon-menu text-white text-20'
                      data-bs-toggle='offcanvas'
                      aria-controls='mobile-sidebar_menu'
                      data-bs-target='#mobile-sidebar_menu'
                    />

                    <div
                      className='offcanvas offcanvas-start  mobile_menu-contnet'
                      tabIndex='-1'
                      id='mobile-sidebar_menu'
                      aria-labelledby='offcanvasMenuLabel'
                      data-bs-scroll='true'
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header1;
