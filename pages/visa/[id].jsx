import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'photoswipe/dist/photoswipe.css';
import Seo from '../../components/common/Seo';
import Header11 from '../../components/header/header-3';
import Overview from '../../components/tour-single/Overview';
import TopBreadCrumb from '../../components/tour-single/TopBreadCrumb';
import DefaultFooter from '../../components/footer/footer-7';
import CountryInformation from '../../components/tour-single/CountryInformation';
import EligibilityInfo from '../../components/tour-single/EligibilityInfo';
import ChecklistInfo from '../../components/tour-single/ChecklistInfo';
import axios from 'axios';
import PricingCard from '../../components/tour-single/PricingCard';
import Link from 'next/link';

const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [visaServices, setVisaServices] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('router.isReady:', router.isReady);
    console.log('router.query:', router.query);

    // Only proceed if the router is ready
    if (!router.isReady) return;

    // Destructure query parameters again once router is ready
    const { id, country } = router.query;

    console.log(id, country, 'here');

    // Check that both query parameters are available
    if (id && country) {
      console.log('Fetching API with visaTypeId:', id, 'country:', country);
      const fetchVisaServices = async () => {
        try {
          const response = await axios.get(
            `https://travel.pritom.me/api/v1/frontend/visa-service/data/list?country_id=${country}&type_id=${id}`
          );
          if (response.data.success) {
            setVisaServices(response.data.data.data[0]);
            console.log('Visa Service Data:', response.data.data.data[0]);
          } else {
            console.error('API did not return success:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching visa service data:', error);
        }
      };

      fetchVisaServices();
    } else {
      console.log('Missing query parameters:', router.query);
    }
  }, [router.isReady, router.query]);

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
              <h1 className='text-30 fw-600'>{visaServices?.type?.name}</h1>
              <div className='row x-gap-20 y-gap-20 items-center pt-10'>
                <div className='col-auto'>
                  <div className='row x-gap-10 items-center'>
                    <div className='col-auto'>
                      <div className='d-flex x-gap-5 items-center'>
                        <i className='icon-placeholder text-16 text-light-1'></i>
                        <div className='text-15 text-light-1'>
                          {visaServices?.country?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End gallery grid wrapper */}
      <section className='pt-40 js-pin-container'>
        <div className='container'>
          <div className='position-relative'>
            <iframe
              src={visaServices?.map_location_link}
              className='img-fluid w-100 pb-40 rounded-4'
              style={{ height: '400px' }}
              // style='border: 0; width: 100%; height: 100%;'
              allowFullScreen
              loading='lazy'
            ></iframe>

            <Link href={visaServices?.map_location_link || '/'} target='_blank'>
              <button className='position-absolute bottom-0 end-0 mb-50 me-3 btn btn-light'>
                {visaServices?.country?.name} on map
              </button>
            </Link>
          </div>

          <div className='row y-gap-30'>
            <div className='col-xl-12'>
              <Overview visaServices={visaServices} />
            </div>
          </div>
          <div className='row y-gap-30'>
            <div className='col-xl-12'>
              <PricingCard visaServices={visaServices} />
            </div>
          </div>
          <div className='row y-gap-30 mx-2 my-4'>
            <div className='col-xl-12 bg-blue-1 text-white d-flex align-items-center gap-4'>
              <a href='#countryInfo'>Country Information</a>
              <a href='#eligibility'>Eligibility to Apply for Tourist Visa</a>
              <a href='#checklist'>
                Checklist for required documents for Tourist Visa (
                {visaServices?.country?.name})
              </a>
            </div>
          </div>

          {/* country info */}
          <div className='row y-gap-30' id='countryInfo'>
            <div className='col-xl-12'>
              <CountryInformation countryInfo={visaServices?.country} />
            </div>
          </div>
          {/* eligibility info */}
          <div className='row y-gap-30' id='eligibility'>
            <div className='col-xl-12'>
              <EligibilityInfo data={visaServices} />
            </div>
          </div>
          {/* Checklist info */}
          <div className='row y-gap-30' id='#checklist'>
            <div className='col-xl-12'>
              <ChecklistInfo data={visaServices} />
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
