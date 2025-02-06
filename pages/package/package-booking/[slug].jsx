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

import PackageBookinProperties from '../../../components/package/PackageBookinProperties';
import CustomerForm from '../../../components/package/CustomerForm';
import PaymentForm from '../../../components/package/PaymentForm';
import ReturnPolicyCard from '../../../components/package/ReturnPolicyCard';
import { baseUrl } from '../../../utils/network';
import axios from 'axios';

const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [tour, setTour] = useState({});
  const { slug } = router.query;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectTo', `/package/package-booking/${slug}`);
      router.push('/login');
    }
  }, [slug]);

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
      <Seo pageTitle='Tour Single' />
      <div className='header-margin'></div>
      <Header11 />
      <TopBreadCrumb title='Tour' subtitle={tour?.name} />

      {/* End gallery grid wrapper */}
      <section className='pt-40 js-pin-container bg-light'>
        <div className='container'>
          <div className='row y-gap-30'>
            <div className='col-xl-12'>
              <PackageBookinProperties tour={tour} />
              <CustomerForm />
              <PaymentForm />
              <ReturnPolicyCard />
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
