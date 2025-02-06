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

const MainFilterSearchBox = () => {
  const router = useRouter();
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  // State to store selected values
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [selectedVisaTypeId, setSelectedVisaTypeId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (router.pathname === '/visa') {
      dispatch(addCurrentTab('Visa'));
    }
    if (router.pathname === '/package/tour-package') {
      dispatch(addCurrentTab('Tour'));
    }
  }, [router.pathname, dispatch]);

  const handleSearch = () => {
    console.log('Selected Country ID:', selectedCountryId);
    console.log('Selected Visa Type ID:', selectedVisaTypeId);

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

  return (
    <>
      <div className='tabs -bookmark js-tabs d-flex justify-content-center '>
        <div className='tabs__controls bg-blue-1 rounded-5 p-2 d-flex justify-content-center items-center js-tabs-controls'>
          {tabs?.map((tab) => (
            <Link href={tab.link} key={tab?.id}>
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

      <div className='tabs__content js-tabs-content'>
        {currentTab === 'Visa' ? (
          <div className='mainSearch bg-glass pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
            <div className='button-grid items-center'>
              <FromSearch />
              <ToSearch onCountrySelect={setSelectedCountryId} />
              <VisaType onVisaTypeSelect={setSelectedVisaTypeId} />
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
          <div className='mainSearch bg-glass pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
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
        ) : (
          <div className='mainSearch bg-glass pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4'>
            <div className='button-grid items-center'>
              <LocationSearch />
              <div className='searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar'>
                <div>
                  <h4 className='text-15 fw-500 ls-2 lh-16'>
                    Check in - Check out
                  </h4>
                  <DateSearch />
                </div>
              </div>
              <GuestSearch />
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
        )}
      </div>
    </>
  );
};

export default MainFilterSearchBox;
