import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { destinations3 } from '../../../data/desinations';
import Link from 'next/link';

const Travellers = () => {
  return (
    <div className='pt-40 overflow-hidden  js-section-slider'>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.js-destination-next',
          prevEl: '.js-destination-prev',
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {destinations3.map((item) => (
          <div key={item.id} className=''>
            <SwiperSlide>
              <Link
                href='#'
                className='citiesCard -type-2'
                data-aos='fade'
                data-aos-delay={item.delayAnimation}
              >
                <div className='citiesCard__image rounded-4 ratio ratio-3:4'>
                  <img
                    className='img-ratio rounded-4 js-lazy'
                    src={item.img}
                    alt='image'
                  />
                </div>
                <div className='citiesCard__content mt-10'>
                  <h4 className='text-18 lh-13 fw-500 text-dark-1'>
                    {item.title}
                  </h4>
                  <div className='text-14 text-light-1'>
                    {item.travellers} travellers
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <div>
        <button className='section-slider-nav  -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev'>
          <i className='icon icon-chevron-left text-12' />
        </button>
        <button className='section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next'>
          <i className='icon icon-chevron-right text-12' />
        </button>
        {/* <div className='slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar' /> */}
      </div>
    </div>
  );
};

export default Travellers;
