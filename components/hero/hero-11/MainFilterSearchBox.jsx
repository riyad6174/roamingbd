import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { addCurrentTab } from '../../../features/hero/findPlaceSlice';
import DateSearch from '../DateSearch';
import GuestSearch from './GuestSearch';
import LocationSearch from './LocationSearch';
import FlyingFromLocation from '../hero-10/FlyingFromLocation';
import FlyingToLocation from '../hero-10/FlyingToLocation';
import FilterHotelsTabs2 from '../../hotels/filter-tabs/FilterHotelsTabs2';
import { useState } from 'react';

const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState('london');

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
        <div className='tabs__controls bg-blue-1 rounded-5 p-2  d-flex  justify-content-center items-center js-tabs-controls'>
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              className={`tabs__button px-30 py-20 rounded-5  fw-600 text-light js-tabs-button ${
                tab?.name === currentTab ? 'is-tab-el-active' : ''
              }`}
              onClick={() => dispatch(addCurrentTab(tab?.name))}
            >
              <i className={`${tab.icon} text-20 mr-10`}></i>
              {tab?.name}
            </button>
          ))}
        </div>
      </div>

      <div className='tabs__content js-tabs-content'>
        <div className=' bg-glass mainSearch -col-4 -w-1070 bg-white shadow-1 rounded-4 pr-20 py-10 lg:px-20 lg:pt-5 lg:pb-10 mt-15'>
          <div className='tabs -pills-2 pb-10'>
            <div className='tabs__controls row x-gap-15 justify-start px-20 js-tabs-controls'>
              {filterOptions.map((option) => (
                <div className='col-auto' key={option.value}>
                  <button
                    className={`tabs__button text-14 fw-500 px-20 py-5 rounded-4 bg-light-2 js-tabs-button mb-10 ${
                      filterOption === option.value ? 'is-tab-el-active' : ''
                    }`}
                    onClick={() => setFilterOption(option.value)}
                  >
                    {option.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='button-grid items-center'>
            <FlyingFromLocation />
            {/* End Location Flying From */}

            <FlyingToLocation />
            {/* End Location Flying To */}

            <div className='searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar'>
              <div>
                <h4 className='text-15 fw-500 ls-2 lh-16'>Depart</h4>
                <DateSearch />
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

            <GuestSearch />
            {/* End guest */}

            <div className='button-item'>
              <button
                className='mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white'
                onClick={() => Router.push('#')}
              >
                <i className='icon-search text-20 mr-10' />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
