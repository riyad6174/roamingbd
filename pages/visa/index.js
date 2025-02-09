import dynamic from 'next/dynamic';
import Seo from '../../components/common/Seo';
import Header3 from '../../components/header/header-3';
import Hero3 from '../../components/hero/hero-3';
import Link from 'next/link';
import Footer7 from '../../components/footer/footer-7';
import SearchBoxContent from '../../components/hero/hero-9/SearchBoxContent';
import Copyright from '../../components/footer/footer-7/Copyright';
import Travellers from '../../components/home/home-2/Travellers';
import FilterVisa from '../../components/hotels/FIlterVisa';
import VisaTypes from '../../components/hotels/VisaTypes';
import Countries from '../../components/home/home-6/Countries';

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

      <section className='layout-pt-lg layout-pb-md'>
        <div className='container'>
          <div className='row y-gap-30 shadow rounded justify-between items-center'>
            {/* End .col */}

            <div className='col-xl-5 col-lg-6'>
              <div className='shadow-4'>
                <div className='row border-center '>
                  <img src='/img/gallery/1/2.png' className='rounded ' />
                </div>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <h5 className='text-18 py-10 text-blue-1'>GET FREE</h5>
              <h2 className='text-30 fw-600'>Online Visa Assessment</h2>
              <p className='mt-40 lg:mt-20'>
                Contact us today by fill up free online visa assessment and we
                will contact you
              </p>

              <div className='d-inline-block mt-40 lg:mt-20'>
                <Link
                  href='/contact'
                  className='button -md -blue-1 bg-dark-1 text-white'
                >
                  Discover More{' '}
                  <div className='icon-arrow-top-right ml-15'></div>
                </Link>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Visa World Wide Admission
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-20'>
            {/* <FilterHotelsTabs3 /> */}
            <div className='tabs__content pt-20'>
              <div className='row y-gap-30'>
                <FilterVisa />
              </div>
            </div>
            {/* End .tabs__content */}

            <div className='row justify-center pt-30'>
              {/* <div className='col-auto'>
                <Link
                  href='#'
                  className='button px-40 h-50 -outline-blue-1 text-blue-1'
                >
                  View All <div className='icon-arrow-top-right ml-15' />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-md layout-pb-md bg-light-2'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-center'>
                  Choose Your Country <br /> For Immigration.
                </h2>
              </div>
            </div>
            {/* End col-auto */}

            {/* <div className='col-auto md:d-none'>
              <a
                href='#'
                className='button -md -blue-1 bg-blue-1-05 text-blue-1'
              >
                View All Destinations
                <div className='icon-arrow-top-right ml-15' />
              </a>
            </div> */}
            {/* End col-auto */}
          </div>
          <div className='row y-gap-30 py-40'>
            <Countries />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Select Your dream destination for
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Schooling Visa, Higher Education Visa, Immigration Visa,
                  Business Visa, Tourist Visa & Medical Tourism Visa
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-20'>
            <div className='tabs__content pt-20'>
              <div className='row y-gap-30'>
                <VisaTypes />
              </div>
            </div>
            {/* End .tabs__content */}

            <div className='row justify-center pt-30'>
              {/* <div className='col-auto'>
                <Link
                  href='#'
                  className='button px-40 h-50 -outline-blue-1 text-blue-1'
                >
                  View All <div className='icon-arrow-top-right ml-15' />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>

      {/* End AddBanner Section */}

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Popular Cities Worldwide
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Expand your travel horizons with new facets! Diversify your{' '}
                  <br />
                  journey to explore local destinations or global marvels around{' '}
                  <br />
                  Asia, Europe, America, Canada or anywhere
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-10'>
            <div className='tabs__content pt-10'>
              <div className='relative pt-40 sm:pt-20'>
                <Travellers />
              </div>
            </div>
            {/* End .tabs__content */}

            {/* <div className='row justify-center pt-30'>
              <div className='col-auto'>
                <Link
                  href='#'
                  className='button px-40 h-50 -outline-blue-1 text-blue-1'
                >
                  View All <div className='icon-arrow-top-right ml-15' />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-lg layout-pb-md bg-white'>
        <div className='container'>
          <div className='row y-gap-30 justify-between items-center'>
            {/* End .col */}

            <div className='col-xl-6 col-lg-6'>
              <h5 className='text-18 py-10 text-blue-1'>
                This is what world leader truly means
              </h5>
              <h2 className='text-30 fw-600'>
                Roaming BD services are <br /> available to over 2 billion{' '}
                <br />
                people worldwide
              </h2>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div className='shadow-4'>
                <div className='row border-center '>
                  <img
                    // /img/gallery/1/2.png
                    src='/img/gallery/1/Background.png'
                    className='rounded '
                  />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>

      <section className='layout-pt-lg layout-pb-md'>
        <div className='container'>
          <div className='row y-gap-30 justify-between items-center'>
            {/* First Column for Cards */}
            <div className='col-xl-8 col-lg-8'>
              <div className='row'>
                {/* Card 1 */}
                <div className='col-md-6 mb-5'>
                  <div className='custom-card shadow p-3'>
                    <div className='row align-items-center'>
                      <div className='col-3 card-icon'>
                        <img
                          src='/img/visa/application.png'
                          alt='Card Icon'
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-9 card-content'>
                        <h5 className='card-title mb-2'>
                          Application Form Fill-Up
                        </h5>
                        <p className='card-text mb-0'>
                          A visa application form is a very important and
                          critical thing to get a visa.
                        </p>
                      </div>
                    </div>
                    <div className='card-number'>01</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className='col-md-6 mb-5'>
                  <div className='custom-card shadow p-3'>
                    <div className='row align-items-center'>
                      <div className='col-3 card-icon'>
                        <img
                          src='/img/visa/application.png'
                          alt='Card Icon'
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-9 card-content'>
                        <h5 className='card-title mb-2'>
                          Visa Interview Preparation
                        </h5>
                        <p className='card-text mb-0'>
                          Learn how to prepare for your visa interview
                          effectively.
                        </p>
                      </div>
                    </div>
                    <div className='card-number'>02</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className='col-md-6 mb-5'>
                  <div className='custom-card shadow p-3'>
                    <div className='row align-items-center'>
                      <div className='col-3 card-icon'>
                        <img
                          src='/img/visa/application.png'
                          alt='Card Icon'
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-9 card-content'>
                        <h5 className='card-title mb-2'>
                          Documents Verification
                        </h5>
                        <p className='card-text mb-0'>
                          Ensure your documents are valid and correctly
                          submitted.
                        </p>
                      </div>
                    </div>
                    <div className='card-number'>03</div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className='col-md-6 mb-5'>
                  <div className='custom-card shadow p-3'>
                    <div className='row align-items-center'>
                      <div className='col-3 card-icon'>
                        <img
                          src='/img/visa/application.png'
                          alt='Card Icon'
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-9 card-content'>
                        <h5 className='card-title mb-2'>
                          Visa Approval Process
                        </h5>
                        <p className='card-text mb-0'>
                          Understand the process after submission for approval.
                        </p>
                      </div>
                    </div>
                    <div className='card-number'>04</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column for Image or Additional Content */}
            <div className='col-xl-4 col-lg-4'>
              <div className='shadow-4'>
                <div className='row border-center'>
                  <img src='/img/visa/form.png' className='rounded' />
                </div>
              </div>
            </div>
          </div>
        </div>
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
