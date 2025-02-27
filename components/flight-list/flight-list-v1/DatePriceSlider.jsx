import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import moment from 'moment';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DatePriceSlider = ({ departureDate, onSelectDate }) => {
  // Ensure initial state is set correctly with fallback to today
  const [selectedDate, setSelectedDate] = useState(
    departureDate
      ? moment(departureDate).format('YYYY-MM-DD')
      : moment().format('YYYY-MM-DD')
  );

  console.log(departureDate, 'ss2');
  console.log(selectedDate, 'ss');

  // Ensure `selectedDate` updates when `departureDate` changes
  useEffect(() => {
    if (departureDate) {
      setSelectedDate(moment(departureDate).format('YYYY-MM-DD'));
    }
  }, [departureDate]);

  // Generate date range (First card = departure date, next 6 days)
  const dateCards = Array.from({ length: 7 }, (_, index) => {
    const date = moment(departureDate || moment())
      .add(index, 'days')
      .format('YYYY-MM-DD');

    return {
      id: index,
      date,
      displayDate: moment(date).format('MMM D'),
      price: `৳ ${12_000 + index * 500}`, // Example price logic
    };
  });

  const handleSelect = (date) => {
    setSelectedDate(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  return (
    <div className='container my-4'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 6 },
        }}
      >
        {dateCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className={`card rounded-0 date-card ${
                selectedDate === card.date
                  ? 'bg-blue-1 text-white border-blue-1'
                  : 'bg-light'
              }`}
              onClick={() => handleSelect(card.date)}
              style={{ cursor: 'pointer' }}
            >
              <div className='card-body text-center'>
                <h6 className='date-text'>{card.displayDate}</h6>
                <p className='price-text'>view</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DatePriceSlider;
