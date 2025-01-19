import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { hotelsData } from '../../data/hotels';
import isTextMatched from '../../utils/isTextMatched';

const FilterVisa = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === 'next'
        ? 'slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next'
        : 'slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev';
    className += ' arrow';
    const char =
      props.type === 'next' ? (
        <>
          <i className='icon icon-chevron-right text-12'></i>
        </>
      ) : (
        <>
          <span className='icon icon-chevron-left text-12'></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {hotelsData.slice(0, 4).map((item) => (
        <div
          className='col-xl-3 col-lg-3 col-sm-6'
          key={item?.id}
          data-aos='fade'
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/hotel/hotel-single-v1/${item.id}`}
            className='hotelsCard  -type-1 hover-inside-slider'
          >
            <div className='hotelsCard__image'>
              <div className='cardImage inside-slider'>
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type='next' />}
                  prevArrow={<ArrowSlick type='prev' />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className='cardImage ratio ratio-1:1' key={i}>
                      <div className='cardImage__content '>
                        <Image
                          width={300}
                          height={300}
                          className='rounded-4 col-12 js-lazy'
                          src={slide}
                          alt='image'
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* <div className='cardImage__wishlist'>
                  <button className='button -blue-1 bg-white size-30 rounded-full shadow-2'>
                    <i className='icon-heart text-12' />
                  </button>
                </div> */}
              </div>
            </div>

            <div className='cardImage__bottomBadgeVisa'>
              <div className='d-flex items-center bg-blue-1 px-10 py-1 rounded-5'>
                <div className='flex-center  rounded-4 size-30 text-12 fw-600 text-white'>
                  visa
                </div>

                <div className='text-14 bg-white px-20 rounded-5 text-blue-1 ml-10'>
                  Schooling Visa
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FilterVisa;
