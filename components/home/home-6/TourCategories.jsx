import Link from 'next/link';
import Slider from 'react-slick';
import { tourCategories1 } from '../../../data/tourCategories';

const TourCategories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
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
    <Slider {...settings} arrows={false} className='custom-slider'>
      {tourCategories1.slice(8, 13).map((item) => (
        <div
          className='card-container'
          key={item.id}
          data-aos='fade'
          data-aos-delay={item.dealyAimation}
        >
          <Link
            href='#'
            className='tourTypeCard -type-1 d-block rounded-4 border'
          >
            <div className='tourTypeCard__content text-left pt-20 pb-24 px-30'>
              <img src='/img/icons/cash.png' alt='logo icon' />
              <h4 className='text-dark-1 text-18 fw-500 mt-30 md:mt-10'>
                Save & Earn
              </h4>
              <p className='text-light-1 pb-30 lh-14 text-14 mt-5'>
                Become a member to get exclusive <br /> discounts and earn Trip
                Coins <br /> which can be used just like cash.
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TourCategories;
