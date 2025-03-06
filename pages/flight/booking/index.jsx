import Seo from '../../../components/common/Seo';
import Header3 from '../../../components/header/header-3';
import Footer7 from '../../../components/footer/footer-7';
import FlightBookingCard from '../../../components/hotel-list/hotel-list-v1/FlightBookingCard';
import CustomerInfo from '../../../components/booking-page/CustomerInfo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../utils/network';
import { toast, Toaster } from 'react-hot-toast';

const Index = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); // Bootstrap modal state

  // Fetch flight booking data
  useEffect(() => {
    if (!router.isReady) return;

    axios
      .post(`${baseUrl}/frontend/flight/data/confirm`, {
        departureDateTime: router.query.departureDateTime,
        arrivalDateTime: router.query.arrivalDateTime,
        originLocation: router.query.originLocation,
        destinationLocation: router.query.destinationLocation,
        adultRequest: parseInt(router.query.adultRequest, 10),
        childRequest: parseInt(router.query.childRequest, 10),
        airlineOperating: router.query.airlineOperating,
        airlineMarketing: router.query.airlineMarketing,
        flightNumber: +router.query.flightNumber,
        flightClass: router.query.flightClass,
      })
      .then((response) => {
        setBookingData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        toast.error(`Error: ${err.message}`);
      });
  }, [router.isReady, router.query]);

  // Handle booking confirmation
  const handleConfirmBooking = (customerData) => {
    if (!customerData || !bookingData) {
      toast.error(
        'Please enter all customer details before confirming the booking.'
      );
      return;
    }

    setIsSubmitting(true);

    const updatedCustomerData = customerData.map((customer) => ({
      ...customer,
      LocationCode: router.query.originLocation || '',
    }));

    const payload = {
      departureDateTime: router.query.departureDateTime,
      arrivalDateTime: router.query.arrivalDateTime,
      originLocation: router.query.originLocation,
      destinationLocation: router.query.destinationLocation,
      adultRequest: parseInt(router.query.adultRequest, 10),
      childRequest: parseInt(router.query.childRequest, 10),
      airlineOperating: router.query.airlineOperating,
      airlineMarketing: router.query.airlineMarketing,
      flightNumber: +router.query.flightNumber,
      flightClass: router.query.flightClass,
      customers: updatedCustomerData,
    };

    axios
      .post(`${baseUrl}/frontend/flight/data/booking`, payload)
      .then((response) => {
        toast.success('Booking Confirmed Successfully!');
        setShowModal(true); // Show Bootstrap modal
        console.log('Booking Success:', response.data);
      })
      .catch((err) => {
        toast.error('Booking Failed. Please try again.');
        console.error('Booking Error:', err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (loading) return <div className='p-4'>Loading booking details...</div>;
  if (error) return <div className='p-4 text-danger'>Error: {error}</div>;

  return (
    <>
      <Seo pageTitle='Flight Booking' />

      <div className='header-margin'></div>
      <Header3 />

      <section className='pt-20 pb-20 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Flight Booking</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 bg-light'>
              <div className='row'>
                <FlightBookingCard bookingData={bookingData} />
              </div>
              <div className='row'>
                <CustomerInfo
                  onFormSubmit={handleConfirmBooking}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer7 />

      {/* Bootstrap Success Modal */}
      <div
        className={`modal fade ${showModal ? 'show d-block' : ''}`}
        tabIndex='-1'
        role='dialog'
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className='modal-dialog  modal-dialog-centered' role='document'>
          <div className='modal-content bg-light'>
            <div className='modal-header border-0'>
              <button
                type='button'
                className='close'
                onClick={() => setShowModal(false)}
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body text-center py-30'>
              <img src='/img/success.gif' className='w-50 mb-20' />
              <h5 className='modal-title text-success'>Booking Successful!</h5>
              <p>Your flight booking has been successfully confirmed!</p>
            </div>
            <div className='modal-footer border-0'>
              {/* <button
                type='button'
                className='btn btn-success'
                onClick={() => setShowModal(false)}
              >
                OK
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap modal backdrop (to close on outside click) */}
      {showModal && (
        <div
          className='modal-backdrop fade show'
          onClick={() => setShowModal(false)}
        ></div>
      )}

      {/* Toaster component for notifications */}
      <Toaster position='top-right' />
    </>
  );
};

export default Index;
