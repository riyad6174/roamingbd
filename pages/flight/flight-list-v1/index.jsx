import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CallToActions from '../../../components/common/CallToActions';
import Seo from '../../../components/common/Seo';
import Header3 from '../../../components/header/header-3';
import Footer7 from '../../../components/footer/footer-7';
import TopHeaderFilter from '../../../components/flight-list/flight-list-v1/TopHeaderFilter';
import FlightProperties from '../../../components/flight-list/flight-list-v1/FlightProperties';
import Sidebar from '../../../components/flight-list/flight-list-v1/Sidebar';
import FlightDetails from '../../../components/flight-list/flight-list-v1/FlightDetails';
import DatePriceSlider from '../../../components/flight-list/flight-list-v1/DatePriceSlider';
import { baseUrl } from '../../../utils/network';
import FlightFilters from '../../../components/flight-list/flight-list-v1/FlightFilters';

const FlightList = () => {
  const router = useRouter();
  const [flightData, setFlightData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        min: priceRange.min ? priceRange.min : 0,
        max: priceRange.max ? priceRange.max : 0,
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
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError('Failed to fetch flight data.');
        setLoading(false);
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
                    {error ? (
                      // <p className='text-danger'>{error}</p>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '80vh ',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src='/img/no-data.png'
                          className='loading-gif'
                          style={{ height: '400px' }}
                        />
                        <p className='text-24'>No Data Found!</p>
                      </div>
                    ) : (
                      <>
                        <FlightFilters filterData={filterData} />
                        {/* <FlightDetails flightData={flightData} /> */}

                        <FlightProperties
                          flightData={flightData}
                          departureDate={filterData?.departureDate}
                        />
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
