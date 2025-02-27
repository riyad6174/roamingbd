import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentTab } from '../../../features/hero/findPlaceSlice';
import FromSearch from './FromSearch';
import ToSearch from './ToSearch';
import VisaType from './VisaTpe';
import TourSearch from './TourSearch';
import Link from 'next/link';
import FlyingFromLocation from '../hero-10/FlyingFromLocation';
import FlyingToLocation from '../hero-10/FlyingToLocation';
import { BiChevronDown } from 'react-icons/bi';
import { baseUrl } from '../../../utils/network';
import DateSearch from '../../flight-list/common/DateSearch';
import GuestSearch from '../../flight-list/common/GuestSearch';
import DateSearchMulti from '../../flight-list/common/DateSearchMulti';
import { DateObject } from 'react-multi-date-picker';

const MainFilterSearchBox = () => {
  const router = useRouter();
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  // State to store selected values
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [selectedVisaTypeId, setSelectedVisaTypeId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const [isLoadingFrom, setIsLoadingFrom] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new DateObject().format('YYYY-MM-DD')
  );
  const [guestData, setGuestData] = useState({ Adults: 2, Children: 1 });
  const [isDropdownOpenFrom, setIsDropdownOpenFrom] = useState(false);
  const [isDropdownOpenTo, setIsDropdownOpenTo] = useState(false);

  const [fromAirportList, setFromAirportList] = useState([]);
  const [toAirportList, setToAirportList] = useState([]);

  const [fromSearchTerm, setFromSearchTerm] = useState('');
  const [toSearchTerm, setToSearchTerm] = useState('');

  const [selectedFlightTab, setSelectedFlightTab] = useState('oneway');
  const Flighttabs = [
    { key: 'oneway', label: 'One Way' },
    { key: 'roundtrip', label: 'Round Trip' },
    { key: 'multicity', label: 'Multicity' },
  ];

  useEffect(() => {
    const path = router.pathname;
    if (path.includes('/visa')) dispatch(addCurrentTab('Visa'));
    else if (path.includes('/package/tour-package'))
      dispatch(addCurrentTab('Tour'));
    else if (path.includes('/hotel')) dispatch(addCurrentTab('Hotel'));
    else if (path.includes('/flight')) dispatch(addCurrentTab('Flights'));
    else dispatch(addCurrentTab('Home'));
  }, [router.pathname, dispatch]);

  const handleSearch = () => {
    if (currentTab === 'Visa' && selectedVisaTypeId && selectedCountryId) {
      router.push(`/visa/${selectedVisaTypeId}?country=${selectedCountryId}`);
    } else if (currentTab === 'Tour') {
      router.push(`/package/package-search?location=${selectedLocation}`);

      // Add logic for Tour search here if needed
    } else if (currentTab === 'Flights') {
      console.log(selectedFromAirport, selectedToAirport);

      router.push(
        `/flight/flight-list-v1?originLocation=${selectedFromAirport.code}&destinationLocation=${selectedToAirport.code}&adultRequest=${guestData.Adults}&childRequest=${guestData.Children}&isReturn=0&departureDateTime=${selectedDate}`
      );

      // Add logic for Tour search here if needed
    } else {
      console.error('Please fill in required fields');
    }
  };

  const handleLocationSelect = (selectedLocation) => {
    console.log('Selected location:', selectedLocation);
    setSelectedLocation(selectedLocation);
    // You can handle the selected location here
  };

  // In MainFilterSearchBox.jsx, modify the useEffect for fetching airports:
  // useEffect(() => {
  //   const fetchAirports = async (searchTerm, type) => {
  //     if (currentTab === 'Flights') {
  //       try {
  //         const response = await fetch(
  //           `${baseUrl}/frontend/airport/list?term=${searchTerm}&perPage=5`
  //         );
  //         const data = await response.json();
  //         if (data.success) {
  //           if (type === 'from') {
  //             setFromAirportList(data.data.data);
  //           } else {
  //             setToAirportList(data.data.data);
  //           }
  //         }
  //       } catch (error) {
  //         console.error('Error fetching airport list:', error);
  //         if (type === 'from') {
  //           setFromAirportList([]);
  //         } else {
  //           setToAirportList([]);
  //         }
  //       }
  //     }
  //   };
  //   // Add debounce to prevent excessive API calls
  //   const debounceTimer = setTimeout(() => {
  //     fetchAirports(terms, 'from');
  //     fetchAirports(terms, 'to');
  //   }, 300);

  //   return () => clearTimeout(debounceTimer);
  // }, [currentTab, terms]);

  useEffect(() => {
    const fetchAirports = async (searchTerm, type) => {
      if (currentTab === 'Flights') {
        setIsLoadingFrom(true);

        try {
          const response = await fetch(
            `${baseUrl}/frontend/airport/list?term=${searchTerm}&perPage=5`
          );
          const data = await response.json();

          if (data.success) {
            if (type === 'from') {
              setFromAirportList(data.data.data);
            } else if (type === 'to') {
              setToAirportList(data.data.data);
            }
          }
        } catch (error) {
          console.error(`Error fetching ${type} airport list:`, error);
          if (type === 'from') {
            setFromAirportList([]);
          } else {
            setToAirportList([]);
          }
        } finally {
          setIsLoadingFrom(false);
        }
      }
    };

    // Fetch initial data when tab is Flights
    if (currentTab === 'Flights') {
      const debounceTimer = setTimeout(() => {
        // Fetch initial From airports
        if (!fromSearchTerm) {
          fetchAirports('', 'from'); // Fetch empty search for initial data
        } else {
          fetchAirports(fromSearchTerm, 'from');
        }

        // Fetch initial To airports
        if (!toSearchTerm) {
          fetchAirports('', 'to'); // Fetch empty search for initial data
        } else {
          fetchAirports(toSearchTerm, 'to');
        }
      }, 300);

      return () => clearTimeout(debounceTimer);
    }
  }, [fromSearchTerm, toSearchTerm, currentTab]);

  const handleDateChange = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
  };

  const handleGuestCountChange = (updatedCounts) => {
    console.log('Updated Guest Counts:', updatedCounts);
    setGuestData(updatedCounts);
  };

  const handleFromSearchChange = (value) => {
    setFromSearchTerm(value);
  };

  const handleToSearchChange = (value) => {
    setToSearchTerm(value);
  };

  // Handle opening dropdowns (ensuring only one is open at a time)
  const handleFromDropdownOpen = () => {
    setIsDropdownOpenFrom(true);
    setIsDropdownOpenTo(false);
  };

  const handleToDropdownOpen = () => {
    setIsDropdownOpenTo(true);
    setIsDropdownOpenFrom(false);
  };

  // Automatically open "To" dropdown when "From" is selected
  const handleAirportSelect = (selectedAirport) => {
    setSelectedFromAirport(selectedAirport);
    setIsDropdownOpenFrom(false);
    setIsDropdownOpenTo(true);
  };

  // Handle To airport selection
  const handleAirportSelectTo = (selectedAirport) => {
    setSelectedToAirport(selectedAirport);
    setIsDropdownOpenTo(false);
  };

  // const handleAirportSelect = (selectedAirport) => {
  //   console.log('Selected Departure Airport:', selectedAirport);
  //   setSelectedFromAirport(selectedAirport);
  // };

  // const handleAirportSelectTo = (selectedAirport) => {
  //   console.log('Selected Destination Airport:', selectedAirport);
  //   setSelectedToAirport(selectedAirport);
  // };

  return (
    <>
      <div className='tabs -bookmark  js-tabs d-flex justify-content-center '>
        <div className='tabs__controls bg-blue-1 rounded-5 mb-2 mb-md-0  p-2 d-flex justify-content-center items-center js-tabs-controls'>
          {tabs?.map((tab) => (
            <Link href={tab.link} key={tab?.id} passHref legacyBehavior>
              <button
                className={`tabs__button px-30 px-md-30  py-20 rounded-5 fw-600 text-light js-tabs-button ${
                  tab?.name === currentTab ? 'is-tab-el-active' : ''
                }`}
                onClick={() => dispatch(addCurrentTab(tab?.name))}
              >
                <i className={`${tab.icon} text-20 mr-10`}></i>
                {tab?.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className='tabs__content js-tabs-content py-2'>
        {currentTab === 'Visa' ? (
          <div className='mainSearch bg-white pr-20 py-40 px-50 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
            <div className='button-grid items-center'>
              <FromSearch />
              <ToSearch onCountrySelect={setSelectedCountryId} />
              <VisaType
                selectedCountryId={selectedCountryId}
                onVisaTypeSelect={setSelectedVisaTypeId}
              />

              <div className='button-item'>
                <button
                  className=' d-flex items-center   px-35  col-12 rounded-4'
                  onClick={handleSearch}
                  style={{
                    border: '2px solid #006CE4',
                    color: '#006CE4',
                    padding: '12px 0',
                  }}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : currentTab === 'Tour' ? (
          <div className='mainSearch bg-white px-70 pr-20 py-20 lg:px-20 lg:py-10 lg:pb-20 rounded-4'>
            <div className='d-flex flex-row align-items-center w-100'>
              <div className=' ' style={{ width: '700px' }}>
                <TourSearch onLocationSelect={handleLocationSelect} />
              </div>

              <div className='button-item'>
                <button
                  className=' d-flex items-center   px-35  col-12 rounded-4'
                  onClick={handleSearch}
                  style={{
                    border: '2px solid #001a69',
                    color: 'white',
                    padding: '16px 0',
                    backgroundColor: '#001a69',
                  }}
                >
                  <i className='icon-search text-20 mr-10' />
                </button>
              </div>
            </div>
          </div>
        ) : currentTab === 'Flights' ? (
          <div className=' bg-white mainSearch -col-4 -w-1100 bg-white shadow-1 rounded-4  py-10 lg:px-20 lg:pt-3 lg:pb-10 mt-6'>
            <div className='d-flex flex-md-wrap justify-content-start gap-2 px-3 py-3'>
              {Flighttabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`btn fw-500 px-3 py-2 text-14  rounded-4 d-flex align-items-center ${
                    selectedFlightTab === tab.key
                      ? 'bg-blue-1 text-white'
                      : 'bg-light border text-dark'
                  }`}
                  onClick={() => setSelectedFlightTab(tab.key)}
                >
                  <input
                    type='radio'
                    name='filterOption'
                    checked={selectedFlightTab === tab.key}
                    className='me-2 d-none'
                    readOnly
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            {/* add logic here to check if one way or multicity */}
            <div className='button-grid items-center px-20 py-10'>
              <FlyingFromLocation
                airportList={fromAirportList}
                onSelectAirport={handleAirportSelect}
                onSearch={handleFromSearchChange}
                isLoadingFrom={isLoadingFrom}
                setIsDropdownOpenFrom={setIsDropdownOpenFrom}
                isDropdownOpenFrom={isDropdownOpenFrom}
                handleFromDropdownOpen={handleFromDropdownOpen}
              />
              {/* End Location Flying From */}

              <FlyingToLocation
                airportList={toAirportList}
                onSelectAirportTo={handleAirportSelectTo}
                onSearch={handleToSearchChange}
                isLoadingFrom={isLoadingFrom}
                setIsDropdownOpenTo={setIsDropdownOpenTo}
                isDropdownOpenTo={isDropdownOpenTo}
                handleToDropdownOpen={handleToDropdownOpen}
              />
              {/* End Location Flying To */}

              <div className='searchMenu-date border px-30 lg:py-20 lg:px-0 js-form-dd js-calendar'>
                {selectedFlightTab === 'roundtrip' ? (
                  <div>
                    <DateSearchMulti onDateChange={handleDateChange} />
                  </div>
                ) : (
                  <div>
                    <DateSearch onDateChange={handleDateChange} />
                  </div>
                )}
              </div>
              {/* End Return */}

              <GuestSearch onGuestCountChange={handleGuestCountChange} />

              <div className='button-item'>
                <button
                  className=' d-flex items-center   px-35  col-12 rounded-4'
                  onClick={handleSearch}
                  style={{
                    border: '2px solid #006CE4',
                    color: '#006CE4',
                    padding: '19px 0',
                  }}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
              </div>
              {/* End search button_item */}
            </div>
          </div>
        ) : (
          <div className='mainSearch px-50 bg-white pr-20 py-30 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
            <div className='button-grid items-center'>
              {/* <LocationSearch /> */}

              <div
                style={{
                  padding: '10px 8px',
                  border: '1px solid gray',
                  borderRadius: '5px',
                }}
                className='searchMenu-date js-form-dd js-calendar d-flex gap-3 align-items-center justify-content-between px-2 '
              >
                <div className='d-flex flex-column align-items-start'>
                  <span className='text-14 fw-300 ls-2 text-muted lh-16'>
                    Destination
                  </span>
                  <span className='text-14 fw-600 ls-2 lh-16 text-muted'>
                    City, airport, region, landmark or property name
                  </span>
                </div>
              </div>

              {/* <div className='searchMenu-date  px-30 lg:py-20 lg:px-0 js-form-dd js-calendar'>
                <div>
                  <DateSearch />
                </div>
              </div> */}
              <div
                style={{ padding: '10px 10px' }}
                className='searchMenu-date js-form-dd js-calendar d-flex gap-3 align-items-center justify-content-between px-2 '
              >
                <div className='d-flex flex-column align-items-start'>
                  <span className='text-13 fw-500 ls-2 text-muted lh-16'>
                    Check-in
                  </span>
                  <span className='text-14 fw-600 ls-2 lh-16'>Sun, Dec 15</span>
                </div>
                <div>
                  <span className='text-13 fw-500 ls-2 lh-16 text-muted'>
                    1 Night
                  </span>
                </div>
                <div className='d-flex flex-column align-items-end'>
                  <span className='text-13 fw-500 ls-2 lh-16 text-muted'>
                    Check-out
                  </span>
                  <span className='text-14 fw-600 ls-2 lh-16'>Sun, Dec 15</span>
                </div>
              </div>

              {/* <GuestSearch /> */}
              <div
                style={{ padding: '8px 0' }}
                className='searchMenu-date js-form-dd js-calendar d-flex align-items-center justify-content-between px-2 '
              >
                <div className='d-flex flex-column align-items-start'>
                  <span className='text-14 fw-300 ls-2 lh-16 text-muted'>
                    Rooms and Guests
                  </span>
                  <span className='text-15 fw-500 ls-2 lh-16'>
                    1 Room, 2 Adults, 0 Children
                  </span>
                </div>

                <BiChevronDown style={{ fontSize: '30px', color: 'gray' }} />
              </div>
              <div className='button-item'>
                <button
                  className=' d-flex items-center   px-35  col-12 rounded-4'
                  onClick={handleSearch}
                  style={{
                    border: '2px solid #006CE4',
                    color: '#006CE4',
                    padding: '16px 0',
                  }}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
                {/* <button
                  className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-glass text-blue-1'
                  onClick={handleSearch}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainFilterSearchBox;
