import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentTab } from '../../../features/hero/findPlaceSlice';
import DateSearch from '../DateSearch';
import GuestSearch from './GuestSearch';
import LocationSearch from './LocationSearch';
import FromSearch from './FromSearch';
import ToSearch from './ToSearch';
import VisaType from './VisaTpe';
import TourSearch from './TourSearch';
import Link from 'next/link';
import FlyingFromLocation from '../hero-10/FlyingFromLocation';
import FlyingToLocation from '../hero-10/FlyingToLocation';
import { BiChevronDown } from 'react-icons/bi';

const MainFilterSearchBox = () => {
  const router = useRouter();
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  // State to store selected values
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [selectedVisaTypeId, setSelectedVisaTypeId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filterOption, setFilterOption] = useState('london');

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
      Router.push(`/visa/${selectedVisaTypeId}?country=${selectedCountryId}`);
    } else if (currentTab === 'Tour') {
      Router.push(`/package/package-search?location=${selectedLocation}`);

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

  const filterOptions = [
    { label: 'One Way', value: 'london' },
    { label: 'Round Way', value: 'new_york' },
    { label: 'Multicity', value: 'paris' },
    // { label: "Istanbul", value: "istanbul" },
    // add more options as needed
  ];

  return (
    <>
      <div className='tabs -bookmark js-tabs d-flex justify-content-center '>
        <div className='tabs__controls bg-blue-1 rounded-5 p-2 d-flex justify-content-center items-center js-tabs-controls'>
          {tabs?.map((tab) => (
            <Link href={tab.link} key={tab?.id} passHref legacyBehavior>
              <button
                className={`tabs__button px-30 py-20 rounded-5 fw-600 text-light js-tabs-button ${
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
          <div className='mainSearch bg-glass pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
            <div className='button-grid items-center'>
              <FromSearch />
              <ToSearch onCountrySelect={setSelectedCountryId} />
              <VisaType
                selectedCountryId={selectedCountryId}
                onVisaTypeSelect={setSelectedVisaTypeId}
              />
              <div className='button-item'>
                <button
                  className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-glass text-blue-1'
                  onClick={handleSearch}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : currentTab === 'Tour' ? (
          <div className='mainSearch bg-glass pr-20 py-20 lg:px-20 lg:py-10 lg:pb-20 rounded-4'>
            <div className='d-flex flex-row align-items-center w-100'>
              <div className=' ' style={{ width: '700px' }}>
                <TourSearch onLocationSelect={handleLocationSelect} />
              </div>
              <div className='mt-3 w-25 d-flex justify-content-center'>
                <button
                  className='mainSearch__submit button -dark-1 py-15 px-35 h-60 rounded-4 bg-glass text-blue-1 w-100'
                  onClick={handleSearch}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : currentTab === 'Flights' ? (
          <div className=' bg-white mainSearch -col-4 -w-1100 bg-white shadow-1 rounded-4  py-10 lg:px-20 lg:pt-3 lg:pb-10 mt-6'>
            <div className='tabs -pills-2 pb-10'>
              <div className='tabs__controls row x-gap-15 justify-start px-20 js-tabs-controls'>
                <div className='col-auto'>
                  <button className='tabs__button text-14 fw-500 px-20 py-5 border-0 rounded-4 bg-blue-5 text-white js-tabs-button mb-10 d-flex align-items-center'>
                    <input
                      type='radio'
                      name='filterOption'
                      checked
                      className='mr-2'
                    />
                    <span className='px-2'>One Way</span>
                  </button>
                </div>
                <div className='col-auto'>
                  <button className='tabs__button text-14 fw-500 px-20 py-5 border-0 rounded-4 bg-light-2 js-tabs-button mb-10 d-flex align-items-center'>
                    <input type='radio' name='filterOption' className='mr-2' />
                    <span className='px-2'>Round Trip</span>
                  </button>
                </div>
                <div className='col-auto'>
                  <button className='tabs__button text-14 fw-500 px-20 py-5 border-0 rounded-4 bg-light-2 js-tabs-button mb-10 d-flex align-items-center'>
                    <input type='radio' name='filterOption' className='mr-2' />
                    <span className='px-2'>Multicity</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='button-grid items-center px-20 py-10'>
              <FlyingFromLocation />
              {/* End Location Flying From */}

              <FlyingToLocation />
              {/* End Location Flying To */}

              <div
                style={{ padding: '5px 0' }}
                className='searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar'
              >
                <div>
                  <h4 className='text-15 fw-300 text-muted ls-2 lh-16'>
                    Depart
                  </h4>
                  {/* <DateSearch /> */}
                  <p className='fw-600 text-15 text-dark'>Sun, Dec 16</p>
                </div>
              </div>
              {/* End Depart */}

              {/* <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Return</h4>
              <DateSearch />
            </div>
          </div> */}
              {/* End Return */}
              {/* 
              <GuestSearch /> */}
              <div
                style={{ padding: '8px 0' }}
                className='searchMenu-date js-form-dd gap-2 js-calendar d-flex align-items-center justify-content-between px-2 '
              >
                <div className='d-flex flex-column align-items-start'>
                  <span className='text-14 fw-300 ls-2 lh-16 text-muted'>
                    Number of Passengers
                  </span>
                  <span className='text-15 fw-500 ls-2 lh-16'>
                    1 Adult, Economy
                  </span>
                </div>

                <BiChevronDown style={{ fontSize: '30px', color: 'gray' }} />
              </div>
              {/* End guest */}

              <div className='button-item'>
                {/* <button
                  className='mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white'
                  onClick={() => Router.push('#')}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button> */}
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
