import React from 'react';

const FlightBookingCard = ({ bookingData }) => {
  if (
    !bookingData ||
    !bookingData.flights ||
    !bookingData.flights.groupedItineraryResponse
  ) {
    return <div>Loading flight details...</div>;
  }

  // Extract necessary data
  const itinerary =
    bookingData.flights.groupedItineraryResponse.itineraryGroups[0]
      .itineraries[0];
  const schedule =
    bookingData.flights.groupedItineraryResponse.scheduleDescs[0];
  const airline = schedule.carrier.carrier_details;
  const baggage =
    bookingData.flights.groupedItineraryResponse.baggageAllowanceDescs[0];
  const totalFare = itinerary.pricingInformation[0].fare.totalFare;

  return (
    <div className='container ' style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className='card shadow-sm border-0'>
        <div className='card-header d-flex justify-content-between align-items-center bg-white'>
          <div className='m-0 text-primary d-flex gap-2'>
            <img
              src={airline.image}
              alt={airline.name}
              style={{ height: '30px' }}
            />
            <p className='fw-600 text-dark'>{airline.name}</p>
          </div>
          <span className='text-danger fw-bold'>
            {itinerary.pricingInformation[0].fare.passengerInfoList[0]
              .passengerInfo.nonRefundable
              ? 'Non-refundable'
              : 'Refundable'}
          </span>
        </div>

        <div className='card-body'>
          <div className='row'>
            {/* Departure Info */}
            <div className='col-5'>
              <h6 className='fw-bold'>{schedule.departure.airport}</h6>
              <p className='mb-1'>{schedule.departure.time.split('+')[0]}</p>
              <p className='text-muted' style={{ fontSize: '14px' }}>
                {schedule.departure.airport_details.name},{' '}
                {schedule.departure.country}
              </p>
              <p className='text-muted' style={{ fontSize: '12px' }}>
                Terminal - {schedule.departure.terminal}
              </p>
            </div>

            {/* Flight Duration */}
            <div className='col-2 text-center'>
              <p className='fw-bold text-dark'>
                {Math.floor(schedule.elapsedTime / 60)}h{' '}
                {schedule.elapsedTime % 60}m
              </p>
              <p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='44'
                  height='44'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-plane'
                >
                  <path d='M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' />
                </svg>
              </p>
            </div>

            {/* Arrival Info */}
            <div className='col-5 text-end'>
              <h6 className='fw-bold'>{schedule.arrival.airport}</h6>
              <p className='mb-1'>{schedule.arrival.time.split('+')[0]}</p>
              <p className='text-muted' style={{ fontSize: '14px' }}>
                {schedule.arrival.airport_details.name},{' '}
                {schedule.arrival.country}
              </p>
              <p className='text-muted' style={{ fontSize: '12px' }}>
                Terminal - {schedule.arrival.terminal}
              </p>
            </div>
          </div>

          {/* Baggage Info */}
          <hr />
          <h6 className='fw-bold'>Baggage</h6>
          <div className='row'>
            <div className='col-6'>
              <p className='mb-1'>
                <strong>Check-in:</strong> {baggage.weight}kg
              </p>
            </div>
            <div className='col-6 text-end'>
              <p className='mb-1'>
                <strong>Cabin:</strong> 7kg (Standard)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='card-footer bg-light text-muted '>
          <div className='d-flex justify-content-end align-items-center'>
            <h6 className='fw-bold text-blue-1 text-18 '>
              Total Price: {totalFare.totalPrice} {totalFare.currency}
            </h6>
            {/* <button className='btn btn-success'>Book Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingCard;
