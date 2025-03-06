import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Seo from '../../../components/common/Seo';
import Header3 from '../../../components/header/header-3';
import Footer7 from '../../../components/footer/footer-7';
import FlightProperties from '../../../components/flight-list/flight-list-v1/FlightProperties';
import Sidebar from '../../../components/flight-list/flight-list-v1/Sidebar';
import DatePriceSlider from '../../../components/flight-list/flight-list-v1/DatePriceSlider';
import { baseUrl } from '../../../utils/network';
import FlightFilters from '../../../components/flight-list/flight-list-v1/FlightFilters';

const FlightList = () => {
  const router = useRouter();
  const [flightData, setFlightData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterLoading, setFilterLoading] = useState(false);
  // filter related states
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceRange, setPriceRange] = useState({});
  const [isPriceModified, setIsPriceModified] = useState(false);
  const [selectedBaggage, setSelectedBaggage] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);

  const handlePriceChange = useCallback((newRange) => {
    setIsPriceModified(true);
    setPriceRange(newRange);
  }, []);

  useEffect(() => {
    setIsPriceModified(false);
  }, [selectedAirlines, selectedBaggage, selectedStops]);

  // Update filterData effect
  useEffect(() => {
    if (filterData && !isPriceModified) {
      setPriceRange({
        min: filterData.minTicketPrice,
        max: filterData.maxTicketPrice,
      });
    }
  }, [filterData, isPriceModified]);

  useEffect(() => {
    if (filterData) {
      setPriceRange({
        min: filterData?.minTicketPrice,
        max: filterData?.maxTicketPrice,
      });
    }
  }, [filterData]);

  useEffect(() => {
    if (!router.isReady) return; // Ensure router is ready before accessing query params
    setFilterLoading(true);
    // Extract query params
    const {
      originLocation,
      destinationLocation,
      departureDateTime,
      adultRequest,
      isReturn,
      childRequest,
    } = router.query;

    if (
      !originLocation ||
      !destinationLocation ||
      !adultRequest ||
      !childRequest ||
      !isReturn ||
      !departureDateTime
    ) {
      setError('Missing required query parameters.');
      setLoading(false);
      setFilterLoading(false);
      return;
    }

    // Prepare request body
    const requestBody = {
      departureDateTime: departureDateTime + 'T11:00:00', // Append time to match API format
      originLocation,
      destinationLocation,
      isReturn,
      adultRequest: Number(adultRequest), // Ensure number format
      childRequest: Number(childRequest), // Ensure number format
      ticketPrice: {
        min: !isPriceModified
          ? 0 // Send 0 if slider not modified
          : priceRange.min === priceRange.max
          ? 0 // Send 0 if min/max are same even when modified
          : priceRange.min || 0,

        max: !isPriceModified
          ? 0 // Send 0 if slider not modified
          : priceRange.min === priceRange.max
          ? 0 // Send 0 if min/max are same even when modified
          : priceRange.max || 0,
      },
      airlines: selectedAirlines,
      baggage: selectedBaggage ? selectedBaggage?.map((b) => b.id) : [],
      stop: selectedStops ? selectedStops : [],
    };

    console.log('Posting data:', requestBody);

    // Make API request
    axios
      .post(`${baseUrl}/frontend/flight/data/search`, requestBody)
      .then((response) => {
        console.log('API Response:', response.data);
        setFlightData(response?.data?.data?.flights);
        setFilterData(response?.data?.data?.filterData);
        setLoading(false);
        setFilterLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError('Failed to fetch flight data.');
        setLoading(false);
        setFilterLoading(false);
      });
  }, [
    router.isReady,
    router.query,
    selectedAirlines,
    isPriceModified,
    selectedBaggage,
    selectedStops,
  ]);

  {
    /* Full Page Loader */
  }
  {
    loading && (
      <div className='loading-overlay'>
        <img src='/img/gif/flight1.gif' className='loading-gif' />
      </div>
    );
  }

  return (
    <>
      <Seo pageTitle='Flight List v1' />
      <div className='header-margin'></div>
      <Header3 />

      <section className='layout-pt-md layout-pb-md bg-light-2'>
        {loading ? (
          <div
            style={{
              height: '80vh ',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src='/img/gif/flight1.gif' className='loading-gif' />
          </div>
        ) : (
          <>
            <DatePriceSlider departureDate={filterData?.departureDate} />

            <div className='container'>
              <div className='row y-gap-30'>
                <div className='col-xl-3'>
                  <aside className='sidebar py-20 px-20 xl:d-none bg-white'>
                    <Sidebar
                      filterData={filterData}
                      selectedAirlines={selectedAirlines}
                      onSelectAirlines={setSelectedAirlines}
                      onPriceChange={handlePriceChange}
                      priceRange={priceRange}
                      onSelectBaggage={setSelectedBaggage}
                      onSelectStops={setSelectedStops}
                    />
                  </aside>
                </div>

                {flightData && (
                  <div className='col-xl-9'>
                    {/* <TopHeaderFilter flightData={flightData} /> */}
                    {error || !flightData || flightData.length === 0 ? (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '80vh',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <img
                          src='/img/no-data.png'
                          alt='No Data Found'
                          style={{ height: '400px', marginBottom: '20px' }}
                        />
                        <p className='text-24 text-dark-1'>No Data Found!</p>
                        <p className='text-16 text-light-1'>
                          Try adjusting your filters or searching for another
                          route.
                        </p>
                      </div>
                    ) : (
                      <>
                        <FlightFilters filterData={filterData} />
                        {/* <FlightDetails flightData={flightData} /> */}

                        {filterLoading ? (
                          <div
                            style={{
                              height: '50vh',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src='/img/gif/flight1.gif'
                              className='loading-gif'
                            />
                          </div>
                        ) : (
                          <FlightProperties
                            flightData={flightData}
                            departureDate={filterData?.departureDate}
                            queryParams={router.query}
                            adultCount={router.query.adultRequest}
                            childCount={router.query.childRequest}
                          />
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </section>

      {/* <CallToActions /> */}
      <Footer7 />
    </>
  );
};

export default FlightList;
