import Stops from '../sidebar/Stops';
import Airlines from '../sidebar/Airlines';
import Alliance from '../sidebar/Alliance';
import DepartingFrom from '../sidebar/DepartingFrom';
import PirceSlider from '../sidebar/PirceSlider';
import ArrivingAt from '../sidebar/BaggagePolicy';
import Cabin from '../sidebar/Cabin';
import FlightSchedules from '../sidebar/FlightSchedules';
import { useState } from 'react';
import BaggagePolicy from '../sidebar/BaggagePolicy';

const Sidebar = ({ filterData }) => {
  const [openSections, setOpenSections] = useState({
    stops: true,
    flightSchedules: true,
    cabin: true,
    price: true,
    airlines: true,
    alliance: true,
    departingFrom: true,
    BaggagePolicy: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className='sidebar'>
      {/* Stops */}
      <div className='sidebar__item'>
        <div
          className='text-18 fw-500 mb-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('stops')}
        >
          Stops{' '}
          <span className='toggle-icon '>
            {openSections.stops ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.stops && (
          <div className='sidebar-checkbox'>
            <Stops />
          </div>
        )}
      </div>

      {/* Flight Schedules */}
      <div className='sidebar__item'>
        <div
          className='text-18 fw-500 mb-10 py-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('flightSchedules')}
        >
          Flight Schedules{' '}
          <span className='toggle-icon'>
            {openSections.flightSchedules ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.flightSchedules && (
          <div className='sidebar-checkbox '>
            <FlightSchedules />
          </div>
        )}
      </div>

      {/* Cabin */}
      {/* <div className='sidebar__item'>
        <div
          className='text-18 fw-500 mb-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('cabin')}
        >
          Cabin{' '}
          <span className='toggle-icon'>
            {openSections.cabin ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.cabin && (
          <div className='sidebar-checkbox'>
            <Cabin />
          </div>
        )}
      </div> */}

      {/* Price Range */}
      <div className='sidebar__item pb-30'>
        <div
          className='text-18 fw-500 mb-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('price')}
        >
          Price{' '}
          <span className='toggle-icon'>
            {openSections.price ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections?.price && (
          <div className='row x-gap-10 y-gap-30'>
            <div className='col-12'>
              <PirceSlider
                minPrice={filterData?.minTicketPrice}
                maxPrice={filterData?.maxTicketPrice}
              />
            </div>
          </div>
        )}
      </div>

      {/* Airlines */}
      <div className='sidebar__item'>
        <div
          className='text-18 fw-500 mb-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('airlines')}
        >
          Airlines{' '}
          <span className='toggle-icon'>
            {openSections?.airlines ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections?.airlines && (
          <div className='sidebar-checkbox pb-20'>
            <Airlines airplaneList={filterData?.airplaneList} />
          </div>
        )}
      </div>

      {/* Alliance */}
      {/* <div className='sidebar__item'>
        <div
          className='text-18 fw-500 mb-10'
          onClick={() => toggleSection('alliance')}
        >
          Alliance{' '}
          <span className='toggle-icon'>
            {openSections.alliance ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.alliance && (
          <div className='sidebar-checkbox'>
            <Alliance />
          </div>
        )}
      </div> */}

      {/* Departing From */}
      {/* <div className='sidebar__item py-10'>
        <div
          className='text-18 fw-500 mb-10'
          onClick={() => toggleSection('departingFrom')}
        >
          Departing from{' '}
          <span className='toggle-icon'>
            {openSections.departingFrom ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.departingFrom && (
          <div className='sidebar-checkbox'>
            <DepartingFrom />
          </div>
        )}
      </div> */}

      {/* Arriving At */}
      <div className='sidebar__item py-10'>
        <div
          className='text-18 fw-500 mb-10 d-flex align-items-center justify-content-between'
          onClick={() => toggleSection('BaggagePolicy')}
        >
          Baggage Policy
          <span className='toggle-icon'>
            {openSections.BaggagePolicy ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-chevron-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                />
              </svg>
            )}
          </span>
        </div>
        {openSections.BaggagePolicy && (
          <div className='sidebar-checkbox'>
            <BaggagePolicy baggage={filterData?.baggageList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
