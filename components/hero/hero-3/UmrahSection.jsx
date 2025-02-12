import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UmrahPackage = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        {/* First card taking 25% width and full height */}
        <div className='col-md-5'>
          <div className='card h-100 relative'>
            <img
              src='/img/package/hajj.jpg'
              className='card-img-top h-100 rounded-3 js-lazy'
              alt='VIP Hajj Package'
            />
            {/* <div className='absolute bottom-0 text-white'>
              <h5 className='card-title'>14 Days VIP Hajj Package</h5>
              <p className='card-text'>Starts from BDT. 680000 /Per Person</p>
              <p className='card-text'>14 Days</p>
            </div> */}
          </div>
        </div>

        {/* Remaining cards in the same row */}
        <div className='col-md-7'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='blogCard -type-1 d-block '>
                <div className='blogCard__image'>
                  <div className='ratio ratio-1:1 rounded-3 rounded-8'>
                    <img
                      className='img-ratio js-lazy'
                      src='/img/package/umrah.png'
                      alt='image'
                    />
                  </div>
                </div>
                <div className='mt-20'>
                  <h4 className='text-dark-1 text-15 fw-700'>
                    Hajj Al-Ifrad (Main Hajj) Package
                  </h4>
                  <div className='text-red-1 text-12 lh-14 mt-3'>
                    Starts from BDT. 580000 /Per Person
                  </div>
                  <div className='text-dark-1 text-14 lh-14 mt-3 fw-bold'>
                    40 Days
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='blogCard -type-1 d-block '>
                <div className='blogCard__image'>
                  <div className='ratio ratio-1:1 rounded-3 rounded-8'>
                    <img
                      className='img-ratio js-lazy'
                      src='/img/package/umrah.png'
                      alt='image'
                    />
                  </div>
                </div>
                <div className='mt-20'>
                  <h4 className='text-dark-1 text-15 fw-700'>
                    Hajj Al-Ifrad (Main Hajj) Package
                  </h4>
                  <div className='text-red-1 text-12 lh-14 mt-3'>
                    Starts from BDT. 580000 /Per Person
                  </div>
                  <div className='text-dark-1 text-14 lh-14 mt-3 fw-bold'>
                    40 Days
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4'>
              <div className='blogCard -type-1 d-block '>
                <div className='blogCard__image'>
                  <div className='ratio ratio-1:1 rounded-3 rounded-8'>
                    <img
                      className='img-ratio js-lazy'
                      src='/img/package/umrah.png'
                      alt='image'
                    />
                  </div>
                </div>
                <div className='mt-20'>
                  <h4 className='text-dark-1 text-15 fw-700'>
                    Hajj Al-Ifrad (Main Hajj) Package
                  </h4>
                  <div className='text-red-1 text-12 lh-14 mt-3'>
                    Starts from BDT. 580000 /Per Person
                  </div>
                  <div className='text-dark-1 text-14 lh-14 mt-3 fw-bold'>
                    40 Days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahPackage;
