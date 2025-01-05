import dynamic from 'next/dynamic';
import Seo from '../../components/common/Seo';
import Header3 from '../../components/header/header-3';
import Hero3 from '../../components/hero/hero-3';
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
import PopularRoutes from '../../components/home/home-10/PopularRoutes';
import BlockGuide from '../../components/home/home-6/BlockGuide';
import Blog4 from '../../components/blog/Blog4';
import Copyright from '../../components/footer/footer-7/Copyright';

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
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                {/* <h2 className='sectionTitle__title'>Special Offers</h2> */}
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Promotions, deals, and special offers for you
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className='row y-gap-20 pt-40'>
            <AddBanner />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End AddBanner Section */}

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>Exclusive Offers</h2>
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

      <section className='layout-pt-lg layout-pb-md' data-aos='fade-up'>
        <div className='container'>
          <div className='row justify-center text-center'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title text-center'>
                  Most Popular Destinations
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Expand your travel horizons with new facets! Explore the world
                  by choosing your ideal travel
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
          {/* End .row */}

          <div className='relative pt-40 sm:pt-20'>
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>

      <section className='layout-pt-lg bg-light layout-pb-lg'>
        <div className='container'>
          <div className='row justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Best Hotels For Your Trip
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Luxurious or budget-friendly hotels, villas or resorts, browse
                  accommodations at Roaming BD <br /> that meet the need. Book
                  Long-term or short-term accommodation from our hotel deals
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
                  Hajj Packages From Bangladesh
                </h2>
                <p className=' sectionTitle__text mt-5 sm:mt-0'>
                  Here are some of the Top and Cheap Packages for you during the
                  Hajj
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

          <div className='row y-gap-30 pt-40'>
            <Blog4 />
          </div>
          {/* End relative */}
        </div>
        {/* End .container */}
      </section>

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

      <Footer7 />
      <div className='py-20 bg-blue-1 text-white text-center'>
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });
