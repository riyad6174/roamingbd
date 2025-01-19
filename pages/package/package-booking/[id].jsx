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

import DefaultFooter from '../../../components/footer/default';

import SidebarPackageType from '../../../components/tour-single/SidebarPackageType';
import PackageBookinProperties from '../../../components/package/PackageBookinProperties';
import SidebarPackageBookingDetails from '../../../components/tour-single/SidebarPackageBookingDetails';
import SidebarPackageBookingCard from '../../../components/tour-single/SidebarPackageBookingCard';
import CustomerForm from '../../../components/package/CustomerForm';
import PaymentInfo from '../../../components/booking-page/PaymentInfo';
import PaymentForm from '../../../components/package/PaymentForm';
import ReturnPolicyCard from '../../../components/package/ReturnPolicyCard';

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
      <div className='header-margin'></div>
      <Header11 />
      <TopBreadCrumb />

      {/* End gallery grid wrapper */}
      <section className='pt-40 js-pin-container bg-light'>
        <div className='container'>
          <div className='row y-gap-30'>
            <div className='col-xl-8'>
              <PackageBookinProperties />
              <CustomerForm />
              <PaymentForm />
              <ReturnPolicyCard />
            </div>
            <div className='col-xl-4'>
              <SidebarPackageBookingDetails tour={tour} />
              <SidebarPackageBookingCard />
              <div class='container mt-4'>
                <div className='card  '>
                  <h3 className='text-18 p-3 py-10'>Offer & Discount</h3>
                  <div class='row justify-content-center'>
                    <div class='p-4 d-flex align-items-center gap-2'>
                      <input
                        type='text'
                        class='form-control border'
                        placeholder='Enter Coupon Code'
                        aria-label='Coupon Code'
                      />
                      <button class='btn bg-blue-1 text-white' type='button'>
                        Apply
                      </button>
                    </div>
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
