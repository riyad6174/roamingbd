import dynamic from 'next/dynamic';
import Header3 from '../../../components/header/header-3';
import Hero3 from '../../../components/hero/hero-3';

import Link from 'next/link';

import Footer7 from '../../../components/footer/footer-7';

import SearchBoxContent from '../../../components/hero/hero-9/SearchBoxContent';

import Copyright from '../../../components/footer/footer-7/Copyright';

import Travellers from '../../../components/home/home-2/Travellers';
import FilterVisa from '../../../components/hotels/FIlterVisa';

import VisaTypes from '../../../components/hotels/VisaTypes';
import Countries from '../../../components/home/home-6/Countries';
import Seo from '../../../components/common/Seo';
import Slights from '../../../components/block/Slights';
import PackageCard from '../../../components/block/PackageCard';

const home_3 = () => {
  return (
    <>
      <Seo pageTitle='Home-3' />
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <Hero3 />
      {/* End Hero 3 */}

      <div
        className='offcanvas offcanvas-top vh-100'
        tabIndex={-1}
        id='offcanvasTop2'
        aria-labelledby='offcanvasTopLabel'
        style={{ zIndex: 1200 }}
      >
        <div className='offcanvas-header position-absolute top-0 end-0'>
          <button
            type='button'
            className='btn-close text-reset '
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          />
        </div>
        {/* End header */}
        <SearchBoxContent />
      </div>

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>Roaming BD Tour Package</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='row y-gap-30 pt-40'>
            <Slights />
          </div>
          {/* End .row */}
          {/* 
          <div className='row justify-center mt-40'>
            <div className='col-auto'>
              <Link
                href='#'
                className='button h-50 w-250 -outline-blue-1 text-blue-1'
              >
                Explore more <div className='icon-arrow-top-right ml-15' />
              </Link>
            </div>
          </div> */}
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Roaming BD Umrah Package
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='row y-gap-30 pt-40'>
            <PackageCard />
          </div>
          {/* End .row */}
          {/* 
          <div className='row justify-center mt-40'>
            <div className='col-auto'>
              <Link
                href='#'
                className='button h-50 w-250 -outline-blue-1 text-blue-1'
              >
                Explore more <div className='icon-arrow-top-right ml-15' />
              </Link>
            </div>
          </div> */}
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <Footer7 />
      <div className='py-20 bg-blue-1 text-white text-center'>
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });
