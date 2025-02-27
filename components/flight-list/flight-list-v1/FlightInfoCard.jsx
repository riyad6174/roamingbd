import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Cabin Code Mapping
const getCabinClassName = (cabinCode) => {
  const cabinClassMap = {
    Y: 'Premium First',
    S: 'First Class',
    C: 'Premium Business',
    J: 'Business Class',
    F: 'Premium Economy',
    P: 'Economy',
  };
  return cabinClassMap[cabinCode] || 'Unknown Class'; // Default if code is missing
};

const FlightInfoCard = ({ info }) => {
  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {info?.map((flight) => (
          <SwiperSlide key={flight.id}>
            <div className='card rounded-0 flight-card2'>
              <img
                src={'/img/destinations/1/1.png'}
                className='card-img-top flight-img rounded-0'
                alt='Flight'
              />
              <div className='card-body'>
                {/* Displaying the mapped cabin class */}
                <h5 className='fw-bold text-14'>
                  {getCabinClassName(flight.cabinCode)}
                </h5>
                <div className='text-light-1 text-10'>
                  {flight?.seatsAvailable} Seat(s) Avalilable
                </div>

                <strong className='text-12'>Baggage</strong>
                <p className='baggage text-10'>
                  ⏹️
                  {flight?.baggageAllowanceDescs?.description1}
                  <br />
                  ⏹️{flight?.baggageAllowanceDescs?.description2}
                </p>

                <strong className='text-12'>Fare Rules</strong>
                <p className='fare-rules text-10'>
                  {/* Check if exchange is allowed before displaying */}
                  {/* {flight.penaltiesInfo?.some(
                    (p) => p.type === 'Exchange' && p.changeable
                  ) && (
                    <>
                      ⏹️ <strong>Change (Before Departure):</strong>{' '}
                      {flight.penaltiesInfo?.find(
                        (p) =>
                          p.type === 'Exchange' &&
                          p.applicability === 'Before' &&
                          p.changeable
                      )?.amount || '0'}{' '}
                      BDT <br />
                      ⏹️ <strong>Change (After Departure):</strong>{' '}
                      {flight.penaltiesInfo?.find(
                        (p) =>
                          p.type === 'Exchange' &&
                          p.applicability === 'After' &&
                          p.changeable
                      )?.amount || '0'}{' '}
                      BDT <br />
                    </>
                  )} */}

                  {/* Check if refund is allowed before displaying */}
                  {flight?.penaltiesInfo?.some(
                    (p) => p.type === 'Refund' && p.refundable
                  ) && (
                    <>
                      <p className='baggage'>
                        ⏹️ Refund (Before Departure): ৳{' '}
                        {flight.penaltiesInfo?.find(
                          (p) =>
                            p.type === 'Refund' &&
                            p.applicability === 'Before' &&
                            p.refundable
                        )?.amount || '0'}{' '}
                      </p>{' '}
                      <p className='baggage'>
                        ⏹️ Refund (After Departure): ৳{' '}
                        {flight.penaltiesInfo?.find(
                          (p) =>
                            p.type === 'Refund' &&
                            p.applicability === 'After' &&
                            p.refundable
                        )?.amount || '0'}{' '}
                      </p>{' '}
                    </>
                  )}
                </p>

                <div className='d-flex py-4 justify-content-start gap-4'>
                  <span className='fw-bold py-1 text-18 text-primary'>
                    ৳ {flight?.totalFare?.totalPrice}
                  </span>
                  {/* <span className='old-price fw-bold text-12 mt-1'>
                    {flight.oldPrice}
                  </span> */}
                </div>

                <button className='btn bg-blue-1 text-white w-100'>
                  Book now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlightInfoCard;
