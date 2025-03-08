import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FlightFilters = ({ filterData, selectedSort, setSelectedSort }) => {
  console.log(filterData, 'ffffffffffffff');
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Force Swiper to recognize the custom buttons
    setTimeout(() => {
      document
        .querySelector('.swiper-button-prev-custom')
        ?.classList.remove('swiper-button-disabled');
      document
        .querySelector('.swiper-button-next-custom')
        ?.classList.remove('swiper-button-disabled');
    }, 500);
  }, []);

  const tabs = [
    {
      key: 'cheapest',
      label: 'Cheapest',
      value: `৳${filterData?.minTicketPrice}`,
    },
    { key: 'earliest', label: 'Earliest', value: '07:15 AM' },
    { key: 'fastest', label: 'Fastest', value: '2 Hr 5 Min' },
  ];

  const handleSort = (tab) => {
    setSelectedSort(tab.key);
    setActiveTab(tab.key);
  };

  return (
    <div className='container mt-3'>
      <div className='d-flex flex-wrap justify-content-between text-dark rounded'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`d-flex justify-content-between rounded-0 py-3 btn border-blue-1 text-dark flex-fill text-12${
              activeTab === tab.key
                ? 'active text-14 border-blue-1 bg-blue-1 text-white'
                : ''
            }`}
            onClick={() => handleSort(tab)}
          >
            <span>{tab.label}</span>
            <strong>{tab.value}</strong>
          </button>
        ))}
        <div className='dropdown border-blue-1 rounded-0'>
          <button
            className='btn text-dark dropdown-toggle w-100 h-100 px-40 outline-none'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Sort By
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Price
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Duration
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Departure Time
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Swiper slider section */}
      <div className='position-relative mt-3'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10} // Increase space between slides
          slidesPerView={4} // Reduce number of slides per view to make each card wider
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className='mt-20'
        >
          {filterData?.airplaneList?.map((flight, index) => (
            <SwiperSlide key={index} style={{ width: '250px' }}>
              {' '}
              {/* Increase width here */}
              <div
                className='airline-name p-2 px-40 border bg-light text-center text-12'
                style={{ minWidth: '250px' }}
              >
                <div className='d-flex align-items-center gap-2'>
                  <img
                    src={flight.image}
                    alt={flight.name}
                    style={{ width: '40px', height: '40px' }} // Increased image size
                  />
                  <div className='text-left'>
                    <strong>{flight.name}</strong>
                    <br />
                    <span>{flight.count} flight(s)</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper navigation buttons */}
        <button
          className='swiper-button-prev-custom h-100 position-absolute top-50 start-0 translate-middle-y bg-blue-1 rounded-left text-white p-2 '
          style={{
            zIndex: 5,
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          className='swiper-button-next-custom h-100 position-absolute top-50 end-0 translate-middle-y bg-blue-1 text-white p-2 '
          style={{
            zIndex: 5,
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default FlightFilters;
