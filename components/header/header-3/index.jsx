import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainMenu from '../MainMenu';
import CurrenctyMegaMenu from '../CurrenctyMegaMenu';
import LanguageMegaMenu from '../LanguageMegaMenu';
import HeaderSearch from '../HeaderSearch';
import MobileMenu from '../MobileMenu';
import Menu from '../Menu';

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

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

  return (
    <>
      <header className={`header bg-dark-5 ${navbar ? 'is-sticky' : ''}`}>
        <div className='header__container px-30 sm:px-20'>
          <div className='row justify-between items-center'>
            <div className='col-auto'>
              <div className='d-flex items-center'>
                <Link href='/' className='header-logo mr-20'>
                  <img src='/img/general/logo.png' alt='logo icon' />
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
                  <Link
                    href='/login'
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    Find Bookings
                  </Link>
                </div>
                <div className='d-flex items-center ml-8 is-menu-opened-hide md:d-none'>
                  <Link
                    href='/agent'
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    Become An Agent
                  </Link>
                </div>

                {/* Start btn-group */}
                <div className='d-flex items-center ml-8 is-menu-opened-hide md:d-none'>
                  <Link
                    href='/login'
                    className='button px-30 fw-400 text-12 -blue-1 bg-blue-3 h-40 text-white'
                  >
                    Sign In / Register
                  </Link>
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className='d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1'>
                  <div>
                    <Link
                      href='/login'
                      className='d-flex items-center icon-user text-inherit text-22'
                    />
                  </div>
                  <div>
                    <button
                      className='d-flex items-center icon-menu text-inherit text-20'
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
