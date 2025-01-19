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

      <section className='layout-pt-md layout-pb-md bg-light-2'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-center'>
                  Available Businesses
                </h2>
                <p>Available Businesses</p>
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
            <div class='container overflow-hidden'>
              <div class='row gy-5 gx-md-4 gy-lg-5 gx-xxl-5 justify-content-start'>
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>{' '}
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>{' '}
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>{' '}
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>{' '}
                <div class='col-11 col-sm-6 col-lg-3'>
                  <div className='d-flex align-items-center gap-4'>
                    <div class='  mb-5'>
                      <img src='/img/icons/tours.png' />
                    </div>
                    <h4 class='mb-5 px-4'>Attractions & Tours</h4>
                  </div>

                  <p class='mb-3 text-secondary'>
                    We can help you to understand your target market and
                    identify new opportunities for growth. We offer a variety of
                    market research services, interviews, and focus groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-center gap-4'>
            <img src='/img/icons/guideline.png' />
            <h4>Supplier Registration Guidelines</h4>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-sm layout-pb-md bg-white'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='d-flex align-items-center justify-content-center gap-5'>
                <div className='sectionTitle -sm'>
                  <h5 className=' text-center border-bottom '>
                    Terms & Conditions
                  </h5>
                </div>{' '}
                <div className='sectionTitle -sm'>
                  <h5 className=' text-center'>Business Type Guide</h5>
                </div>
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
            <div class='container overflow-hidden'>
              <div className='d-flex align-items-center gap-4'>
                <img src='/img/icons/guideline.png' />
                <h5>Supplier Registration Guidelines</h5>
              </div>

              <div className='mt-10'>
                <ol className='list-group list-group-numbered border-0'>
                  <li className='list-group-item border-0'>
                    Roaming BD Supplier Platform has not authorized any agency
                    to carry out promotion services. Application procedures and
                    related fees are subject to the official website of Roaming
                    BD Supplier Platform and are at the platform's sole
                    discretion.
                  </li>
                  <li className='list-group-item border-0'>
                    Roaming BD Supplier Platform reserves the right to:
                    <ul>
                      <li>
                        Reject applications based on factors including but not
                        limited to product demand, supplier's business status,
                        and the service level provided.
                      </li>
                      <li>
                        Require the supplier to provide other qualifications
                        during the application process and in future cooperation
                        with the supplier.
                      </li>
                    </ul>
                  </li>
                  <li className='list-group-item border-0'>
                    Supplier registration requirements will be updated from time
                    to time according to the applicable laws and regulations,
                    industry trends, and other relevant criteria. Suppliers who
                    apply for registration shall comply with the latest supplier
                    registration requirements.
                  </li>
                  <li className='list-group-item border-0'>
                    Any supplier who applies for registration represents and
                    warrants that the information and materials it provides to
                    Roaming BD Supplier Platform during the application process
                    and in future cooperation are true, complete, accurate, and
                    valid. If a supplier violates this clause, Roaming BD
                    Supplier Platform reserves the right to terminate
                    cooperation with that supplier and will handle the matter in
                    accordance with Roaming BD Supplier Platform rules and our
                    agreement with the supplier.
                  </li>
                  <li className='list-group-item border-0'>
                    Suppliers applying to join must provide the applicant's
                    personal information, including identity information and
                    mobile number. The contact person's name, mobile number,
                    email address, etc. must also be provided to receive
                    subsequent cooperation notifications and more. Please ensure
                    that the information entered is authentic and valid. Roaming
                    BD will protect the identity information you enter through
                    encryption and other measures.
                  </li>
                </ol>
              </div>
              <div className='d-flex align-items-center gap-4 mt-20'>
                <img src='/img/icons/guideline.png' />
                <h5>Business Type Guides</h5>
              </div>

              <div className='mt-30'>
                <div className='d-flex justify-content-start gap-3 mb-3'>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='Business and Qualifications'
                  >
                    <input
                      type='radio'
                      className='btn-check'
                      name='options'
                      id='relatedBusiness'
                      autoComplete='off'
                    />
                    <label
                      className='btn btn-primary'
                      htmlFor='relatedBusiness'
                    >
                      Related Business
                    </label>

                    <input
                      type='radio'
                      className='btn-check'
                      name='options'
                      id='relatedQualifications'
                      autoComplete='off'
                    />
                    <label
                      className='btn btn-primary'
                      htmlFor='relatedQualifications'
                    >
                      Related Qualifications
                    </label>
                  </div>
                </div>

                <div className='row mb-3 mt-20'>
                  <div className='col-md-4'>
                    <label htmlFor='country' className='form-label'>
                      Country Where Company is Registered
                    </label>
                    <input
                      type='text'
                      className='form-control border'
                      id='country'
                      placeholder='Country Where Company is Registered'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor='city' className='form-label'>
                      City Where Company is Registered
                    </label>
                    <input
                      type='text'
                      className='form-control border'
                      id='city'
                      placeholder='City Where Company is Registered'
                    />
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor='companyType' className='form-label'>
                      Company Type
                    </label>
                    <select className='form-select' id='companyType'>
                      <option value=''>Select Company Type</option>
                      <option value='type1'>Type 1</option>
                      <option value='type2'>Type 2</option>
                      <option value='type3'>Type 3</option>
                    </select>
                  </div>
                </div>

                <div className='d-flex justify-content-end'>
                  <button className='btn btn-outline-dark d-flex align-items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-search'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
                    </svg>{' '}
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-md layout-pb-lg bg-light-2'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-center'>
                  Platform Onboarding Process
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <section class='py-5 py-xl-8 mt-40'>
            <div class='container overflow-hidden'>
              <div class='row gy-5'>
                <div class='col-12 col-sm-6 col-lg-3'>
                  <div class='text-center px-xl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='#06AEBD'
                      class='bi bi-1-circle-fill text-primary mb-4'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z'
                      />
                    </svg>
                    <h5 class='m-2'>Submit Application</h5>
                    <p class='m-0 text-secondary'>
                      Approx. 1 hour on working days
                    </p>
                  </div>
                </div>
                <div class='col-12 col-sm-6 col-lg-3'>
                  <div class='text-center px-xl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='#06AEBD'
                      class='bi bi-2-circle-fill text-primary mb-4'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z' />
                    </svg>
                    <h5 class='m-2'>Application Review</h5>
                    <p class='m-0 text-secondary'>Approx. 2-3 working days</p>
                  </div>
                </div>
                <div class='col-12 col-sm-6 col-lg-3'>
                  <div class='text-center px-xl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='#06AEBD'
                      class='bi bi-3-circle-fill text-primary mb-4'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z' />
                    </svg>
                    <h5 class='m-2'>Contract Signing</h5>
                    <p class='m-0 text-secondary'>Approx. 1 working day</p>
                  </div>
                </div>
                <div class='col-12 col-sm-6 col-lg-3'>
                  <div class='text-center px-xl-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='#06AEBD'
                      class='bi bi-4-circle-fill text-primary mb-4'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z' />
                    </svg>
                    <h5 class='m-2'>Success</h5>
                    <p class='m-0 text-secondary'>
                      VBooking account setup complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='layout-pt-md layout-pb-md bg-light-2'>
            <div className='container'>
              <div className='row justify-center text-center'>
                <div className='col-auto'>
                  <div className='sectionTitle -md'>
                    <h2 className='sectionTitle__title text-center'>
                      Why Choose Roaming BD
                    </h2>
                    <p>By joining us, you'll be backed by the following</p>
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
                <div class='container overflow-hidden'>
                  <div class='row gy-5 gx-md-4 gy-lg-5 gx-xxl-5 justify-content-center'>
                    <div class='col-11 col-sm-6 col-lg-4'>
                      <div className='d-flex align-items-center gap-4'>
                        <div class='  mb-5'>
                          <img
                            src='/img/agent/bg-1.png'
                            className='img-fluid'
                          />
                        </div>
                      </div>

                      <div>
                        <ul className='disk-style'>
                          <li>
                            Partnerships with over 200 countries and regions
                          </li>
                          <li>Connecting more than 5,000 cities globally</li>
                          <li>
                            Covers comprehensive industries with over 2000+
                            channels
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='col-11 col-sm-6 col-lg-4'>
                      <div className='d-flex align-items-center gap-4'>
                        <div class='  mb-5'>
                          <img
                            src='/img/agent/bg-2.png'
                            className='img-fluid'
                          />
                        </div>
                      </div>

                      <div>
                        <ul className='disk-style'>
                          <li>
                            Partnerships with over 200 countries and regions
                          </li>
                          <li>Connecting more than 5,000 cities globally</li>
                          <li>
                            Covers comprehensive industries with over 2000+
                            channels
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class='col-11 col-sm-6 col-lg-4'>
                      <div className='d-flex align-items-center gap-4'>
                        <div class='  mb-5'>
                          <img
                            src='/img/agent/bg-3.png'
                            className='img-fluid'
                          />
                        </div>
                      </div>

                      <div>
                        <ul className='disk-style'>
                          <li>
                            Partnerships with over 200 countries and regions
                          </li>
                          <li>Connecting more than 5,000 cities globally</li>
                          <li>
                            Covers comprehensive industries with over 2000+
                            channels
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
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
