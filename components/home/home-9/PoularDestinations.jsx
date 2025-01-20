import Link from 'next/link';
import Slider from 'react-slick';
import { destinations9 } from '../../../data/desinations';

const PoularDestinations = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {destinations9.map((item) => (
        <div
          className='col-xl col-lg-3 col-6'
          key={item.id}
          data-aos='fade-up'
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href='#'
            className='citiesCard -type-5 d-flex justify-content-between align-items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4'
          >
            <div className='d-flex flex-column align-items-center  gap-4'>
              <div className='d-flex justify-content-between align-items-center gap-4 '>
                <img src='/img/icons/biman.png' />

                <h4 className='text-14 fw-500'>{item.location}</h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-arrow-right'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
                  />
                </svg>
                <h4 className='text-14 fw-500'>{item.location}</h4>
              </div>
              <div className='d-flex flex-column  align-items-right '>
                <p className='text-12 text-left'>Start From</p>
                <h3 className='text-20 text-blue-3 text-right'>BDT 14,433</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default PoularDestinations;
