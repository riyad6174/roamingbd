import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PackageBookingCard = ({ tour }) => {
  return (
    <div className='container my-5'>
      <div className='card'>
        {/* Image Section */}
        <div className='card-body'>
          <div className='row x-gap-20 bg-white  y-gap-20'>
            <div className='col-md-auto'>
              <div className='  md:w-1/1 rounded-4'>
                <div className=''>
                  <div className=' rounded-4 custom_inside-slider'>
                    <Image
                      width={300}
                      height={300}
                      className='rounded-4  col-12 js-lazy'
                      src={tour?.image_path}
                      alt='image'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className='col-md'>
              <h3 className='text-24 lh-16 fw-500'>
                {tour?.name}
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
                  <p className='text-14'>{tour?.location}</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <div className='row '>
                  <div className=' d-flex align-items-start gap-2 justify-content-start'>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {tour?.no_person} Person
                    </div>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {tour?.tour_duration} Days
                    </div>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {tour?.is_air_fair === 1 ? (
                        <span className='text-success'>Fair Included</span>
                      ) : (
                        <span className='text-danger'>Fair Not Included</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className='text-14 lh-15 mt-10'>
                  <div className='text-light-1 small'>
                    *this fee is applicable for single person
                  </div>
                  <div className='d-flex align-items-center justify-content-start gap-2'>
                    <div className='fw-500 text-18 py-10 '>
                      <span className='bg-light py-1 px-2 border text-blue-1'>
                        BDT {tour?.price}/-
                      </span>
                    </div>
                    <Link
                      href={`/package/package-booking/${tour?.slug}`}
                      className='fw-500 text-18 py-10 '
                    >
                      <span className='btn btn-primary text-white rounded-0 border py-1 px-2 border text-blue-1'>
                        Procceed Payment
                      </span>
                    </Link>
                  </div>
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

export default PackageBookingCard;
