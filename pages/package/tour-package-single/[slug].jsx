import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalVideo from 'react-modal-video';
import 'photoswipe/dist/photoswipe.css';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-3';
import Overview from '../../../components/tour-single/Overview';
import TopBreadCrumb from '../../../components/tour-single/TopBreadCrumb';
import DefaultFooter from '../../../components/footer/footer-7';
import SidebarPackageType from '../../../components/tour-single/SidebarPackageType';
import { baseUrl } from '../../../utils/network';
import PricingCard from '../../../components/tour-single/PricingCard';
import PackageBookingCard from '../../../components/package/PackageBookinCard';
// import PackageBookingCard from '../../../components/package/PackageBookinProperties';

const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const [tour, setTour] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    const fetchTourData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/frontend/package/data/details/${slug}`
        );

        if (response.data.success) {
          setTour(response.data.data);
          console.log('Fetched Tour Data:', response.data.data);
        } else {
          console.error('Error fetching tour:', response.data.message);
        }
      } catch (error) {
        console.error('API Fetch Error:', error);
      }
    };

    fetchTourData();
  }, [slug]);

  return (
    <>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='oqNZOOWF8qM'
        onClose={() => setOpen(false)}
      />
      <Seo pageTitle={tour?.name || 'Tour Single'} />

      <div className='header-margin'></div>
      <Header11 />
      <TopBreadCrumb title='Tour' subtitle={tour?.name} />

      <section className='pt-40'>
        <div className='container'>
          <div className='row y-gap-20 justify-between items-end'>
            <div className='col-auto'>
              <h1 className='text-30 fw-600'>{tour?.name || 'Loading...'}</h1>
              <div className='row x-gap-20 y-gap-20 items-center pt-10'>
                <div className='col-auto'>
                  <div className='d-flex x-gap-5 items-center'>
                    <i className='icon-placeholder text-16 text-light-1'></i>
                    <div className='text-15 text-light-1'>
                      {tour?.location || 'Location not available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-40 js-pin-container'>
        <div className='container'>
          <div className='position-relative'>
            <iframe
              src={tour?.map_link}
              className='img-fluid w-100 pb-40 rounded-4'
              style={{ height: '400px' }}
              // style='border: 0; width: 100%; height: 100%;'
              allowFullScreen
              loading='lazy'
            ></iframe>

            <button className='position-absolute bottom-0 end-0 mb-50 me-3 btn btn-light'>
              <a
                href={tour?.map_link}
                target='_blank'
                rel='noopener noreferrer'
              >
                View on Map
              </a>
            </button>
          </div>
          <div className=''>
            {/* <SidebarPackageType tour={tour} /> */}
            <PackageBookingCard tour={tour} />
          </div>

          <div className='row y-gap-20'>
            <div className=''>
              <h2 className='text-muted'>Description</h2>
              {tour ? <Overview tour={tour} /> : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </section>

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
