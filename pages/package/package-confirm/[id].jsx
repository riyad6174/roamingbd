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

import Footer7 from '../../../components/footer/footer-7';

import SidebarPackageType from '../../../components/tour-single/SidebarPackageType';
import PackageConfirmProperty from '../../../components/package/PackageConfirmProperties';
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
      <section className=' js-pin-container bg-light pt-10'>
        <div className='container'>
          <div className='row y-gap-30'>
            <div className='col-xl-12 bg-white rounded-3'>
              <p className='text-20 fw-bold '>Booking Confirmed</p>
              <PackageConfirmProperty />
            </div>
            <div className='mt-20'>
              <span className='text-22'>Terms and Conditions</span>

              <h3 className='card-title text-18 mb-4'>Payments Policy</h3>
              <p>
                If you are purchasing your ticket using a debit or credit card
                via the Website, we will process these payments via the
                automated secure common payment gateway which will be subject to
                fraud screening purposes.
              </p>
              <p>
                If you do not supply the correct card billing address and/or
                cardholder information, your booking will not be confirmed, and
                the overall cost may increase. We reserve the right to cancel
                your booking if payment is declined for any reason or if you
                have supplied incorrect card information.
              </p>
              <p>
                If we become aware of, or are notified of, any fraud or illegal
                activity associated with the payment for the booking, the
                booking will be cancelled, and you will be liable for all costs
                and expenses arising from such cancellation, without prejudice
                to any action that may be taken against us.
              </p>
              <p>
                Golobe may require the cardholder to provide additional payment
                verification upon request by either submitting an online form,
                visiting the nearest Golobe office, or at the airport at the
                time of check-in. Golobe reserves the right to:
              </p>
              <ul className='  mb-4 text-muted'>
                <li className=''>
                  Deny boarding or collect a guarantee payment (in cash or from
                  another credit card) if the card originally used for the
                  purchase cannot be presented by the cardholder at check-in or
                  when collecting the tickets.
                </li>
                <li className=''>
                  Take action if the original payment has been withheld or
                  disputed by the card issuing bank.
                </li>
              </ul>
              <p>
                Credit card details are held in a secured environment and
                transferred through an internationally accepted system.
              </p>
            </div>
            <div className='mt-5 text-16 text-muted'>
              <span>Contact Us</span> <br />
              If you have any questions about our Website or our Terms of Use,
              please contact:
              <br /> ROAMING BD TOURS & TRAVELS Dhaka Bangladesh <br /> license
              number 0014974 <br /> Further contact details can be found at
              https://roamingbd.com/help
            </div>
          </div>
        </div>
      </section>
      <Footer7 />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
