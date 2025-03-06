import moment from 'moment';
import FlightInfoCard from './FlightInfoCard';

//      flightData={flightData}
// departureDate={filterData?.departureDate}
// queryParams={router.query}
// adultCount={router.query.adultRequest}
// childCount={router.query.childRequest}

const FlightProperties = ({
  flightData,
  departureDate,
  queryParams,
  adultCount,
  childCount,
}) => {
  console.log(flightData, 'flightData');

  const formatTime = (timeString) => {
    if (!timeString) return ''; // Handle missing data

    const [hours, minutes] = timeString.split(':'); // Split "14:30" -> ["14", "30"]
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }); // Converts to "2:30 PM"
  };

  const convertMinutesToTime = (minutes) => {
    if (!minutes || minutes < 0) return '0 min'; // Handle invalid inputs

    const hours = Math.floor(minutes / 60); // Get hours
    const remainingMinutes = minutes % 60; // Get remaining minutes

    return `${hours > 0 ? `${hours} hr ` : ''}${
      remainingMinutes > 0 ? `${remainingMinutes} min` : ''
    }`.trim();
  };

  return (
    <>
      {flightData?.map((item) => (
        <div className='js-accordion' key={item.id}>
          <div className='py-30 px-10 bg-white rounded-4 base-tr mt-30'>
            <div className='row y-gap-30 justify-between items-end'>
              <div className='col'>
                <div className='row y-gap-10 items-center'>
                  <div className='col-sm-auto'>
                    <img
                      className='size-80'
                      src={item?.carrier?.carrier_details?.image}
                      alt='image'
                    />
                  </div>
                  <div className='col'>
                    <div className='row x-gap-20 items-end'>
                      <div className='col-auto'>
                        <div className='lh-15 fw-500'>
                          {' '}
                          {item?.departure?.airport} - {item?.arrival?.airport}
                        </div>
                        <div className='text-12 lh-15 text-light-1 uppercase'>
                          {item?.carrier?.carrier_details?.name}
                        </div>
                        <div className='text-15 lh-15 text-light-1'>
                          {convertMinutesToTime(item?.elapsedTime)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='row x-gap-20 items-end'>
                      <div className='col-auto'>
                        <div className='lh-15 fw-500'>
                          {' '}
                          {formatTime(item?.departure?.time)}
                        </div>
                        <div className='text-15 lh-15 text-light-1'>
                          {moment(departureDate).format('DD MMM, dddd')}
                        </div>
                        <div className='text-12 lh-15 text-light-1'>
                          {item?.departure?.airport_details?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='row x-gap-20 items-end'>
                      {item?.stopCount > 0 ? (
                        <div className='col-auto'>
                          <div className='lh-15 fw-500'>
                            {' '}
                            Stops ({item?.stopCount})
                          </div>
                          <div className='text-15 lh-15 text-light-1'>
                            {item?.hiddenStops?.map((stop, index) => (
                              <span key={index}>{stop.airport}</span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className='lh-15 fw-500'> Nonstop</div>
                      )}
                    </div>
                  </div>
                  <div className='col'>
                    <div className='row x-gap-20 items-end'>
                      <div className='col-auto'>
                        <div className='lh-15 fw-500'>
                          {' '}
                          {formatTime(item?.arrival?.time)}
                        </div>
                        <div className='text-15 lh-15 text-light-1'>
                          {moment(departureDate).format('DD MMM, dddd')}
                        </div>
                        <div className='text-12 lh-15 text-light-1'>
                          {item?.arrival?.airport_details?.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className='col-md-auto'>
                    <div className='text-15 text-light-1 px-20 md:px-0'>
                      4h 05m
                    </div>
                  </div> */}
                </div>
              </div>
              {/* End .col */}

              <div className='col-md-auto'>
                <div className='d-flex items-center h-full'>
                  <div className='pl-30 border-left-light h-full md:d-none' />
                  <div className=' bg-blue-1 p-2 text-white rounded-4'>
                    <div className='text-right md:text-left mb-10'>
                      {item?.fare?.pricingInformation?.length > 0 ? (
                        <div className='text-20 fw-bold lh-16 text-white'>
                          ৳
                          {
                            item?.fare?.pricingInformation[0]?.totalFare
                              ?.totalPrice
                          }
                        </div>
                      ) : (
                        'No Info'
                      )}
                      {/* <span className='old-price fw-bold text-white text-14 mt-1'>
                        $12,460
                      </span> */}
                    </div>
                    <div className='accordion__button'>
                      <button
                        className='button -blue-1 px-30 h-50  text-blue-1'
                        data-bs-toggle='collapse'
                        data-bs-target={`#flight-${item?.id}`}
                        style={{ backgroundColor: '#b3d0f5' }}
                      >
                        View Deal <div className='icon-arrow-top-right ml-15' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-md-auto */}
            </div>
            {/* End .row */}

            <div className='collapse' id={`flight-${item?.id}`}>
              <div className=' my-4'>
                <div className=' '>
                  <FlightInfoCard
                    info={item?.fare?.pricingInformation}
                    queryParams={queryParams}
                    flightItem={item}
                    adultCount={adultCount}
                    childCount={childCount}
                    departureDate={departureDate}
                  />
                </div>
              </div>
            </div>
            {/* End collapase content */}
          </div>
          {/* End bg-white */}
        </div>
      ))}
    </>
  );
};

export default FlightProperties;
