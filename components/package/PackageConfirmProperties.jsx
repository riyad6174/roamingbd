import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

const dummyData = {
  id: 1,
  title: 'Sea Pearl Beach Resort and Spa Ltd.',
  location: "Cox's Bazar, Bangladesh",
  slideImg: ['/img/hotels/1.png'],
  price: 25000,
};

const PackageConfirmProperty = () => {
  return (
    <div className=' '>
      <div className='mt-10'>
        {/* Image Section */}
        <div className=''>
          <div className='row x-gap-20 bg-white  y-gap-20'>
            <div className='col-md-auto'>
              <div className='cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4'>
                <div className='cardImage__content'>
                  <div className='cardImage-slider rounded-4 custom_inside-slider'>
                    <Swiper
                      className='mySwiper'
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {dummyData?.slideImg?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            width={250}
                            height={250}
                            className='rounded-4 col-12 js-lazy'
                            src={slide}
                            alt='image'
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className='col-md'>
              <div className='d-flex align-items-center justify-content-between'>
                <h3 className='text-24 lh-16 fw-500'>
                  {dummyData?.title}
                  <div className='d-inline-block ml-10'>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                    <i className='icon-star text-10 text-yellow-2'></i>
                  </div>
                </h3>
                <div className='d-flex align-items-center justify-content-between gap-4'>
                  <button className='btn bg-blue-1 text-white px-2 py-2'>
                    Download Ticket
                  </button>
                  <button className='btn bg-blue-1 text-white px-2 py-2'>
                    Print Ticket
                  </button>
                </div>
              </div>

              <div className='row x-gap-10 y-gap-10 items-center pt-10'>
                <div className='col-auto'>
                  <p className='text-14'>{dummyData?.location}</p>
                </div>

                <div className='col-auto'>
                  <div className='size-3 rounded-full bg-light-1'></div>
                </div>

                <div className='col-auto'>
                  <p className='text-14'>2 km to city center</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <div className='row'>
                  <div className='col-md-6 d-flex align-items-start gap-2 justify-content-center'>
                    <div className='d-flex flex-column align-items-start gap-2'>
                      <span> Fri, Jan 3</span>
                      <span className='text-10'>
                        From 11:00 to 06:00 <br /> the next day
                      </span>
                    </div>
                    <div className='border-b w-25'></div>
                    <div className='d-flex flex-column gap-2'>
                      <span> Sat, Jan 3</span>
                      <span className='text-10'>Before 12:00</span>
                    </div>
                  </div>
                  <div className='col-md-6 col-md-6 d-flex align-items-start gap-2 justify-content-center'>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      1 Night
                    </div>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      1 Room
                    </div>
                  </div>
                </div>
                <div className='text-14 lh-15 mt-10'>
                  <div className='fw-500 text-18'>
                    Deluxe Twin Room Non Smoking
                  </div>
                  <div className='text-light-1'>2 Breakfast Included</div>
                </div>
              </div>
            </div>
            {/* End .col-md */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageConfirmProperty;
