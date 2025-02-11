import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ModalVideo from 'react-modal-video';
import 'photoswipe/dist/photoswipe.css';
import toursData from '../../../data/tours';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-3';
import TopBreadCrumb from '../../../components/tour-single/TopBreadCrumb';

import DefaultFooter from '../../../components/footer/footer-7';

import CustomerForm from '../../../components/package/CustomerForm';
import PaymentForm from '../../../components/package/PaymentForm';
import ReturnPolicyCard from '../../../components/package/ReturnPolicyCard';
import { baseUrl } from '../../../utils/network';
import axios from 'axios';
import VisaProperties from '../../../components/package/VisaProperties';
import { GiCheckMark } from 'react-icons/gi';

const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [tour, setTour] = useState({});
  const { slug } = router.query;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // localStorage.setItem('redirectTo', `/visa/visa-booking/${slug}`);
      router.push('/login');
    }
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    const fetchTourData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/frontend/visa-service/data/details/${slug}`
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
      <Seo pageTitle='Tour Single' />
      <div className='header-margin'></div>
      <Header11 />
      <TopBreadCrumb title='Tour' subtitle={tour?.name} />

      {/* End gallery grid wrapper */}
      <section className='pt-40 js-pin-container bg-light'>
        <div className='container'>
          <div className='row y-gap-30'>
            <div className='col-xl-7'>
              <VisaProperties tour={tour} />
              <CustomerForm />
              <PaymentForm />
              <ReturnPolicyCard />
            </div>
            <div className='col-xl-5 mt-50'>
              <div className='card'>
                <div className='card-header'>Request Process</div>
                <div className='card-body'>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>
                          Visa Processing Explained
                        </span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      A visa is an official document that permits a foreign
                      citizen to enter a country for a specific purpose and
                      duration. The visa processing journey consists of a few
                      key steps:
                    </p>
                  </div>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>
                          Research Visa Requirements:
                        </span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      Know your visa type: Different purposes (tourism,
                      business, study, etc.) require different visas. Identify
                      the visa type that aligns with your travel plans.
                    </p>
                    <p className='card-text text-14 px-20 '>
                      Check embassy/consulate website: Each country&apos;s
                      embassy or consulate will have a website outlining
                      specific visa requirements and application procedures.
                    </p>
                  </div>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>
                          Compile Required Documents:
                        </span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      Valid passport: Ensure your passport has sufficient
                      validity (usually 6 months beyond your travel dates).
                    </p>
                    <p className='card-text text-14 px-20 '>
                      Visa application form: This can be completed online or
                      downloaded from the embassy/consulate website.
                    </p>
                    <p className='card-text text-14 px-20 '>
                      Supporting documents: These may vary depending on the visa
                      type but often include proof of travel (flight
                      reservations), accommodation details, and financial
                      stability.
                    </p>
                  </div>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>
                          Submit Application & Fees:
                        </span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      Online or in-person: Some embassies allow online
                      applications, while others require a personal appearance.
                    </p>
                    <p className='card-text text-14 px-20 '>
                      Visa fees: There are associated fees for processing your
                      visa application. These fees vary depending on the country
                      and visa type
                    </p>
                  </div>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>Processing Time:</span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      Processing timelines can vary significantly depending on
                      the embassy/consulate workload and your visa
                      type.It&apos;s wise to factor in processing time when
                      planning your travels.
                    </p>
                  </div>
                  <div className='mb-3'>
                    <h5 className=' text-16'>
                      <div className='d-flex gap-2 align-items-center text-dark justify-content-start '>
                        <GiCheckMark style={{ fontSize: '11px' }} />
                        <span className='text-13'>Visa Collection:</span>
                      </div>
                    </h5>
                    <p className='card-text text-14 px-20 '>
                      Once your visa is approved, you will be informed of the
                      collection process. This may involve picking it up in
                      person or receiving it by mail.
                    </p>
                  </div>
                  <div className='mb-3'>
                    <p className='card-text text-14 px-20 '>
                      We recommend checking the embassy or consulate website of
                      the country you&apos;re visiting for the most current and
                      specific visa information.
                    </p>
                  </div>
                </div>
              </div>
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
