import dynamic from 'next/dynamic';
import Seo from '../../components/common/Seo';
import Header3 from '../../components/header/header-3';
import Hero3 from '../../components/hero/hero-3';
import TopDestinations from '../../components/destinations/TopDestinations';
import TopDestinations2 from '../../components/home/home-10/TopDestinations';

import Hotels from '../../components/hotels/Hotels2';
import Link from 'next/link';

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
import FilterHotelsTabs3 from '../../components/hotels/filter-tabs/FilterHotelsTabs3';

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
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Popular Hotels in United States
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-40'>
            <FilterHotelsTabs3 />
            <div className='tabs__content pt-40'>
              <div className='row y-gap-30'>
                <FilterHotels2 />
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

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Budget-friendly Hotels Worldwide
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-40'>
            {/* <FilterHotelsTabs3 /> */}
            <div className='tabs__content pt-40'>
              <div className='row y-gap-30'>
                <FilterHotels2 />
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
      {/* End AddBanner Section */}

      <section className='layout-pt-lg layout-pb-md' data-aos='fade-up'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Popular Cities in United States
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='relative pt-30 sm:pt-20'>
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>

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

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Top Luxury 5-star Hotels
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='tabs -pills-2 pt-20'>
            <div className='tabs__content pt-20'>
              <div className='row y-gap-30'>
                <FilterHotels2 />
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

      <section className='layout-pt-md  layout-pb-lg'>
        <div className='container'>
          <div className='row justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Recommended Hotels for Your Trip
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

      <ParallaxBanner />

      <Footer7 />
      <div className='py-20 bg-blue-1 text-white text-center'>
        <Copyright />
      </div>
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_3), { ssr: false });
