import { useEffect, useState } from 'react';
import { LiaPassportSolid } from 'react-icons/lia';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VisaTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://travel.pritom.me/api/v1/frontend/visa-country/data/list-with-service'
        );
        const data = await response.json();
        console.log(data.data.data, 'type data');
        setTypes(data.data.data); // Adjusted to access nested data
      } catch (error) {
        console.error('Error fetching visa countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className='container position-relative'>
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: '.js-visa-slider-next',
          prevEl: '.js-visa-slider-prev',
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {types.slice(0, 6).map((item, index) => (
          <SwiperSlide key={index}>
            <div className='card rounded-0'>
              {/* Image wrapper with relative positioning */}
              <div style={{ position: 'relative' }}>
                <img
                  src={item.image_path}
                  className='card-img-top rounded-0'
                  alt={item.name || 'Visa Country'}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                {/* Visa Icon with absolute positioning */}
                <LiaPassportSolid
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
                    right: '15px',
                    fontSize: '40px',
                    color: 'white',
                    background: '#0098ff',
                    padding: '5px',
                    borderRadius: '5px',
                  }}
                />
              </div>

              <div className='card-body'>
                <div className='text-center py-10'>
                  <h3 className='fs-5'>{item.name}</h3>
                </div>

                <ul className='text-light-1'>
                  {item?.services.map((service, index) => (
                    <li key={index} className='d-flex gap-3 align-items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='#0075ff'
                        className='bi bi-square-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
                      </svg>
                      <p>{service.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className='section-slider-nav -prev flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-visa-slider-prev'>
        <i className='icon icon-chevron-left text-12' />
      </button>
      <button className='section-slider-nav -next flex-center button -blue-1 bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none js-visa-slider-next'>
        <i className='icon icon-chevron-right text-12' />
      </button>
    </div>
  );
};

export default VisaTypes;
