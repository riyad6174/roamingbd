import dynamic from 'next/dynamic';
import Seo from '../../components/common/Seo';
import Header3 from '../../components/header/header-3';
import Hero11 from '../../components/hero/hero-11';
import TopDestinations from '../../components/destinations/TopDestinations';
import TopDestinations2 from '../../components/home/home-10/TopDestinations';

import Hotels from '../../components/hotels/Hotels2';
import Link from 'next/link';
import Tours from '../../components/tours/Tours';
import Activity from '../../components/activity/Activity';
import Rentals from '../../components/rentals/Rentals';
import Cars from '../../components/cars/Cars';
import Cruise from '../../components/cruise/Cruise';
import Flights from '../../components/flight/Flights';
import Footer7 from '../../components/footer/footer-7';

import AddBanner from '../../components/home/home-3/AddBanner';
import WhyChoose from '../../components/home/home-3/WhyChoose';
import SearchBoxContent from '../../components/hero/hero-9/SearchBoxContent';
import PopularDestinations from '../../components/destinations/PopularDestinations';
import PopularDestinations9 from '../../components/home/home-9/PoularDestinations';

import PopularRoutes from '../../components/home/home-10/PopularRoutes';
import BlockGuide from '../../components/home/home-6/BlockGuide';
import Blog4 from '../../components/blog/Blog4';
import Copyright from '../../components/footer/footer-7/Copyright';
import ParallaxBanner from '../../components/banner/ParallaxBanner';
import FilterHotelsTabs2 from '../../components/hotels/filter-tabs/FilterHotelsTabs2';
import FilterHotels2 from '../../components/hotels/FilterHotels2';
import Travellers from '../../components/home/home-2/Travellers';
import TourCategories from '../../components/home/home-6/TourCategories';
import Faq from '../../components/faq/Faq';

const home_3 = () => {
  return (
    <>
      <Seo pageTitle='Home-3' />
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <Hero11 />
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

      <section className='layout-pt-md layout-pb-md'>
        <div className='container'>
          <div className='row y-gap-20 justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Roaming BD Your Trusted Travel Companion
                </h2>
              </div>
            </div>
            {/* End .col */}

            {/* End .col */}
          </div>
          {/* End .row */}

          <div className='relative overflow-hidden pt-40 sm:pt-20'>
            <TourCategories />
          </div>
        </div>
      </section>
      {/* End AddBanner Section */}

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>Top Flight Deals</h2>
              </div>
            </div>
            {/* End col-auto */}

            <div className='col-auto'>
              <a
                href='#'
                className='button -md -blue-1 bg-blue-1-05 text-blue-1'
              >
                More <div className='icon-arrow-top-right ml-15' />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className='relative mt-40 sm:mt-20 js-section-slider'>
            <TopDestinations2 />
          </div>
          {/* End slider  */}
        </div>
        {/* End .container */}
      </section>

      <section
        className='layout-pt-lg layout-pb-md relative'
        id='secondSection'
      >
        <div className='container'>
          <div className='row y-gap-20 justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Cheapest Flight By Destination
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Effortlessly find cheap flight and air tickets to various{' '}
                  <br />
                  destinations on Roaming BD. Explore routes, book online air{' '}
                  <br />
                  tickets, and plan your next travel adventure.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='row x-gap-10 y-gap-10 pt-40 sm:pt-20 item_gap-x10'>
            <PopularDestinations9 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-md layout-pb-md bg-light-2'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-center'>
                  Top Airlines
                </h2>
                <p className=' sectionTitle__text mt-6 sm:mt-0'>
                  RoamingBD user-friendly platform connects you to top airlines
                  instantly. <br /> Enjoy a comfortable and hassle-free journey
                  on any destination and get tickets of top airlines easily
                </p>
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
            <BlockGuide />
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
                  Popular Flight Destinations
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

          <div className='tabs -pills-2 pt-40'>
            <FilterHotelsTabs2 />
            <div className='tabs__content pt-20'>
              <div className='relative pt-40 sm:pt-20'>
                <Travellers />
              </div>
            </div>
            {/* End .tabs__content */}

            <div className='row justify-center pt-30'>
              <div className='col-auto'>
                <Link
                  href='#'
                  className='button px-40 h-50 -outline-blue-1 text-blue-1'
                >
                  View All <div className='icon-arrow-top-right ml-15' />
                </Link>
              </div>
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
                  Flights to Top Countries
                </h2>
                <p className=' sectionTitle__text mt-20 sm:mt-0'>
                  Search flights to top countries, discover diverse flight
                  destinations, and choose top airlines for your ultimate <br />
                  journey through Roaming BD&apos;s comprehensive platform.
                </p>
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
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <section className='layout-pt-md layout-pb-md'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>Why Choose Us</h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className='row y-gap-40 justify-between pt-50'>
            <WhyChoose />
          </div>
        </div>
      </section> */}
      {/* End Why choose Section */}

      {/* End Top Destinations Section */}

      <section className='layout-pt-lg bg-white layout-pb-lg'>
        <div className='container'>
          <div className='row justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Our Tour Packages for You
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Plan your dream gateway and choose from uncountable tour
                  packages at Roaming BD. <br /> Book our holiday packages for
                  the best deals on any international trip.
                </p>
              </div>
            </div>
            {/* End .col */}

            {/* <div className='col-auto'>
              <Link
                href='#'
                className='button -md -blue-1 bg-blue-1-05 text-blue-1'
              >
                More <div className='icon-arrow-top-right ml-15' />
              </Link>
            </div> */}
          </div>
          {/* End .row */}

          <div className='relative mt-40 sm:mt-20'>
            <PopularRoutes />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>
      <ParallaxBanner />

      <section className='layout-pt-lg layout-pb-lg'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  How to Book Cheap Flights?
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='row y-gap-30 justify-center pt-40 sm:pt-20'>
            <div className='col-xl-8 col-lg-10'>
              <div
                className='accordion -simple row y-gap-20 js-accordion'
                id='Faq1'
              >
                <Faq />
              </div>
            </div>
            <div className='col-xl-4 col-lg-10'>
              <img src='/img/features/3.png' />
            </div>
          </div>
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
