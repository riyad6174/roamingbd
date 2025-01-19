import dynamic from 'next/dynamic';
import Seo from '../../components/common/Seo';
import Header3 from '../../components/header/header-3';
import Footer7 from '../../components/footer/footer-7';
import SearchBoxContent from '../../components/hero/hero-9/SearchBoxContent';
import Copyright from '../../components/footer/footer-7/Copyright';
import ParallaxBannerSustain from '../../components/banner/ParallaxBannerSustain';

const home_3 = () => {
  return (
    <>
      <Seo pageTitle='Home-3' />
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

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

      <section className='layout-pt-lg layout-pb-md bg-light-2'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-left'>About Us</h2>
              </div>
            </div>
          </div>
          <div className='row y-gap-30 py-40'>
            <div class='container overflow-hidden'>
              <p className='mt-20'>
                Roaming BD is a part of the The East Bengals Group, a Registered
                company with Register of Companies Bangladesh with over 50
                employees and over 300 B2B members, making it one of the leading
                online travel agencies in the world.
              </p>
              <p className='mt-20'>
                With more than 1.4 million hotels in 200 countries and regions,
                we are connected with an extensive hotel network to give our
                customers a fantastic choice of accommodation.{' '}
              </p>
              <p className='mt-20'>
                Our far-reaching flight network has over 2 million individual
                flight routes connecting more than 5,000 cities around the
                globe.
              </p>
              <p className='mt-20'>
                When you combine this with our 24/7 English customer support and
                various other travel products, you can trust us to take care of
                your next trip.{' '}
              </p>
              <p className='mt-20'>
                This website is operated by www.roamingbd.com; ROAMING TOURS &
                TRAVELS, a Bangladeshi entity (Joint Stock Registration number
                P-51517/2023 & Trade Registration Number: TRAD/DNCC/013464/2023
                Under LGED Act 2009, Clause 60; Sub Clause 84).
              </p>
              <p className='mt-20'>
                {' '}
                www.roamingbd.com is also licensed under the The Civil Aviation
                Authority, Travel Agents Act of Bangladesh under license number
                0014974.
              </p>
            </div>
          </div>
          <div class='row gy-5 gx-md-4 gy-lg-5 gx-xxl-5 justify-content-center'>
            <div class='col-11 col-sm-6 col-lg-4'>
              <div className='d-flex align-items-center gap-2'>
                <div class='  mb-5'>
                  <img src='/img/about/tag.png' />
                </div>
                <h5 class='mb-5 px-4'>Incredible Deals</h5>
              </div>

              <p class='mb-3 text-secondary'>
                We&apos;ve searched high and low to bring to make sure you never
                pay too much
              </p>
            </div>
            <div class='col-11 col-sm-6 col-lg-4'>
              <div className='d-flex align-items-center gap-2'>
                <div class='  mb-5'>
                  <img src='/img/about/travel.png' />
                </div>
                <h5 class='mb-5 px-4'>Travel Worry-free</h5>
              </div>

              <p class='mb-3 text-secondary'>
                Our service guarantee means that we&apos;ve always got your back
              </p>
            </div>{' '}
            <div class='col-11 col-sm-6 col-lg-4'>
              <div className='d-flex align-items-center gap-2'>
                <div class='  mb-5'>
                  <img src='/img/about/secure.png' />
                </div>
                <h5 class='mb-5 px-4'>Secure payment</h5>
              </div>

              <p class='mb-3 text-secondary'>
                Payments are secured using the latest industry standards
              </p>
            </div>{' '}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <ParallaxBannerSustain />
      <div className='container'>
        <div className='row justify-start text-left'>
          <div className='col-auto'>
            <div class='row gy-5 gx-md-4 gy-lg-5 gx-xxl-5 justify-content-center mt-40'>
              <div class='col-12 col-sm-6 col-lg-6'>
                <div className='d-flex align-items-center gap-2'>
                  <h4 class='mb-5 '>Mission</h4>
                </div>

                <p class='mb-3 text-secondary'>
                  To dominate the tourism industry by excellence in service with
                  innovation & creative concepts in the global marketplace for
                  our clients that will help us achieve the title of best travel
                  agency in Bangladesh.
                </p>
              </div>
              <div class='col-12 col-sm-6 col-lg-6'>
                <div className='d-flex align-items-center gap-2'>
                  <div class='  mb-5'></div>
                  <h4 class='mb-5 '>Vison</h4>
                </div>

                <p class='mb-3 text-secondary'>
                  Provide our clients with unforgettable travel experiences with
                  guaranteed more than satisfactory services that exceed the
                  level of their expectations.
                </p>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>

      <Footer7 />
      <div className='py-20 bg-blue-1 text-white text-center'>
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });
