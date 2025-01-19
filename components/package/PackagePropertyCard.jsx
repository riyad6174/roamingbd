import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { hotelsData } from '../../data/hotels';

const PackagePropertyCard = () => {
  return (
    <>
      {hotelsData.slice(0, 7).map((item) => (
        <div className='col-12' key={item?.id}>
          <div className='border-top-light pt-30'>
            <div className='row x-gap-20 y-gap-20'>
              <div className='col-md-auto'>
                <div className='cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4'>
                  <div className='cardImage__content'>
                    <div className='cardImage-slider rounded-4  custom_inside-slider'>
                      <Swiper
                        className='mySwiper'
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.slideImg?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <div className='travel-card position-relative h-100'>
                              <img
                                src={item.img}
                                alt={item.title}
                                className='img-fluid rounded h-100 w-100'
                              />
                              <div className='overlay-info position-absolute  top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3 text-white'>
                                <span className='badge bg-dark text-uppercase'>
                                  3 Day
                                </span>
                                <div>
                                  <p className='mb-0 text-12 fw-bold'>
                                    Price starts from (per person)
                                  </p>
                                  <h5 className='fw-bold text-12'>
                                    BDT 13,500
                                  </h5>
                                  <p className='small text-10'>{item.title}</p>
                                  <p className='small text-10'>
                                    <i className='bi bi-geo-alt-fill'></i>{' '}
                                    Bangkok, Thailand
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}

                  {/* <div className='cardImage__wishlist'>
                    <button className='button -blue-1 bg-white size-30 rounded-full shadow-2'>
                      <i className='icon-heart text-12'></i>
                    </button>
                  </div> */}
                </div>
              </div>
              {/* End .col */}

              <div className='col-md'>
                <h3 className='text-20 lh-16 fw-500'>
                  Bangkok: A Safari Experience
                  {/* <br className='lg:d-none' /> {item?.location} */}
                  {/* <div className='d-inline-block ml-10'>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                  </div> */}
                </h3>

                <div className='row x-gap-10 y-gap-10 items-center pt-10'>
                  <div className='col-auto'>
                    <p className='text-14'>
                      Bangkok, Thailand - Pattaya, Thailand
                    </p>
                  </div>
                </div>

                <div className='text-14 lh-15 mt-20'>
                  <div className='fw-500'>Highlights</div>
                  <div className='text-light-1'>
                    <ul className='px-10'>
                      <li>Explore the Buddhist village of Ramu</li>
                      <li>
                        Discover ancient monasteries, khyangs, and pagodas
                      </li>
                      <li>Enjoy local cuisine for lunch and dinner</li>
                    </ul>
                  </div>
                </div>

                <div className='text-14 text-light-1 lh-15 mt-10'>
                  <div className='fw-500'>
                    Hotel Windy Terrace (Cox&aposo;s Bazar)
                  </div>
                </div>
              </div>
              {/* End .col-md */}

              <div className='col-md-auto text-right md:text-left'>
                <span className='badge bg-success px-10 py-2'>Best Deal</span>

                <div className=''>
                  <div className='text-14 text-light-1 mt-50 md:mt-20'>
                    8 nights, 2 adult
                  </div>
                  <div className='text-22 lh-12 fw-600 mt-5'> BDT 13,500</div>
                  <div className='text-14 text-light-1 mt-5'>
                    +US$828 taxes and charges
                  </div>

                  <Link
                    href={`/hotel/hotel-single-v2/${item.id}`}
                    className='button -md -dark-1 bg-blue-1 text-white mt-24'
                  >
                    Select Offer{' '}
                    {/* <div className='icon-arrow-top-right ml-15'></div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PackagePropertyCard;
