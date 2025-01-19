import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'photoswipe/dist/photoswipe.css';
import toursData from '../../../data/tours';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-3';
import Overview from '../../../components/tour-single/Overview';
import TopBreadCrumb from '../../../components/tour-single/TopBreadCrumb';
import DefaultFooter from '../../../components/footer/footer-7';
import SidebarPackageType from '../../../components/tour-single/SidebarPackageType';

const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [tour, setTour] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setTour(toursData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='oqNZOOWF8qM'
        onClose={() => setOpen(false)}
      />
      <Seo pageTitle='Tour Single' />
      {/* End Page Title */}
      <div className='header-margin'></div>
      {/* header top margin */}
      <Header11 />
      {/* End Header 1 */}
      <TopBreadCrumb />
      {/* End top breadcrumb */}
      <section className='pt-40'>
        <div className='container'>
          <div className='row y-gap-20 justify-between items-end'>
            <div className='col-auto'>
              <h1 className='text-30 fw-600'>
                Experience the Largest Unbroken Sea Beach in the World
              </h1>
              <div className='row x-gap-20 y-gap-20 items-center pt-10'>
                <div className='col-auto'>
                  <div className='row x-gap-10 items-center'>
                    <div className='col-auto'>
                      <div className='d-flex x-gap-5 items-center'>
                        <i className='icon-placeholder text-16 text-light-1'></i>
                        <div className='text-15 text-light-1'>
                          Bangkok, Thailand - Pattaya, Thailand
                        </div>
                      </div>
                    </div>

                    {/* <div className='col-auto'>
                      <button
                        data-x-click='mapFilter'
                        className='text-blue-1 text-15 underline'
                      >
                        Show on map
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            {/* <div className='col-auto'>
              <div className='row x-gap-10 y-gap-10'>
                <div className='col-auto'>
                  <button className='button px-15 py-10 -blue-1'>
                    <i className='icon-share mr-10'></i>
                    Share
                  </button>
                </div>

                <div className='col-auto'>
                  <button className='button px-15 py-10 -blue-1 bg-light-2'>
                    <i className='icon-heart mr-10'></i>
                    Save
                  </button>
                </div>
              </div>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}
      <section className='pt-40 js-pin-container'>
        <div className='container'>
          <div className='position-relative'>
            <img
              src='/img/map/australia.png'
              className='img-fluid pb-40 rounded-4'
              alt='Australia map'
            />
            <button className='position-absolute bottom-0 end-0 mb-50 me-3 btn btn-light'>
              Australia on map
            </button>
          </div>

          <div className='row y-gap-30'>
            <div className='col-xl-7'>
              <div className='relative d-flex justify-center overflow-hidden js-section-slider'>
                {/* <Swiper
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: '.js-img-next',
                    prevEl: '.js-img-prev',
                  }}
                >
                  {tour?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={451}
                        height={450}
                        priority
                        src={slide}
                        alt='image'
                        style={{ height: '501px' }}
                        className='rounded-4 col-12 cover object-cover'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper> */}

                {/* End prev nav button wrapper */}
              </div>
              {/* End relative */}

              {/* slider gallery */}

              {/* End toursnapshot */}

              <Overview />
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className='col-xl-5'>
              <SidebarPackageType tour={tour} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      {/* End important info */}
      {/* End Call To Actions Section */}
      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
