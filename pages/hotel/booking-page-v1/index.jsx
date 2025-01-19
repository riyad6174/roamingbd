import CallToActions from '../../../components/common/CallToActions';
import Seo from '../../../components/common/Seo';
import Header3 from '../../../components/header/header-3';
import DefaultFooter from '../../../components/footer/default';
import MainFilterSearchBox from '../../../components/hotel-list/hotel-list-v1/MainFilterSearchBox';
import TopHeaderFilter from '../../../components/hotel-list/hotel-list-v1/TopHeaderFilter';
import HotelProperties from '../../../components/hotel-list/hotel-list-v1/HotelProperties';
import Pagination from '../../../components/hotel-list/common/Pagination';
import Sidebar from '../../../components/hotel-list/hotel-list-v1/Sidebar';
import Footer7 from '../../../components/footer/footer-7';
import HotelProperties2 from '../../../components/hotel-list/hotel-list-v1/HotelProperties2';
import CustomerInfo from '../../../components/booking-page/CustomerInfo';

const index = () => {
  return (
    <>
      <Seo pageTitle='Hotel List v1' />
      {/* End Page Title */}

      <div className='header-margin'></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <section className='pt-20 pb-20 bg-light-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {/* <div className='text-center'>
                <h1 className='text-30 fw-600'>Find Your Dream Luxury Hotel</h1>
              </div> */}
              {/* End text-center */}
              Hotels - Bangladesh - Cox&apos;s Bazar
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row y-gap-30'>
            <div className='col-xl-9 bg-light '>
              {/* <TopHeaderFilter /> */}
              <div className='mt-0'></div>
              {/* End mt--30 */}
              <div className='row y-gap-10'>
                <HotelProperties2 />
              </div>
              <div className='row y-gap-10'>
                <CustomerInfo />
              </div>

              {/* End .row */}
            </div>

            <div className='col-xl-3'>
              <aside className='sidebar y-gap-40 xl:d-none'>
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className='offcanvas offcanvas-start'
                tabIndex='-1'
                id='listingSidebar'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title' id='offcanvasLabel'>
                    Filter Hotels
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className='offcanvas-body'>
                  <aside className='sidebar y-gap-40 px-20  xl:d-block'>
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      {/* <CallToActions />s */}
      {/* End Call To Actions Section */}

      <Footer7 />
    </>
  );
};

export default index;
