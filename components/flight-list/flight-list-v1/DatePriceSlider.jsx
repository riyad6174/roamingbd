import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DatePriceSlider = () => {
  const dateCards = [
    { id: 1, dateRange: 'Jan 8 – Jan 10', price: '৳ 12,499' },
    { id: 2, dateRange: 'Jan 9 – Jan 11', price: '৳ 13,199' },
    { id: 3, dateRange: 'Jan 10 – Jan 12', price: '৳ 14,599' },
    { id: 4, dateRange: 'Jan 11 – Jan 13', price: '৳ 11,999' },
    { id: 5, dateRange: 'Jan 12 – Jan 14', price: '৳ 12,999' },
    { id: 6, dateRange: 'Jan 13 – Jan 15', price: '৳ 15,299' },
    { id: 6, dateRange: 'Jan 13 – Jan 15', price: '৳ 15,299' },
    { id: 6, dateRange: 'Jan 13 – Jan 15', price: '৳ 15,299' },
    { id: 6, dateRange: 'Jan 13 – Jan 15', price: '৳ 15,299' },
    { id: 6, dateRange: 'Jan 13 – Jan 15', price: '৳ 15,299' },
  ];

  return (
    <div className='container my-4'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          576: { slidesPerView: 2 }, // Small screens: 2 cards
          768: { slidesPerView: 3 }, // Medium screens: 3 cards
          1200: { slidesPerView: 6 }, // Large screens: 4 cards
        }}
      >
        {dateCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className='card rounded-0 date-card'>
              <div className='card-body text-center'>
                <h6 className='date-text text-12'>{card.dateRange}</h6>
                <p className='price-text text-12'>view</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DatePriceSlider;
