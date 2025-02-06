import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { BiDownload, BiInfoCircle, BiMoney } from 'react-icons/bi';

const VisaProcessingCard = ({ visaServices }) => {
  console.log(visaServices, 'visa');

  return (
    <div className=' mt-5'>
      <div className='row justify-content-end'>
        <div className=''>
          <div className='visa-card d-flex justify-content-between align-items-center p-3 rounded-4 shadow-sm bg-light'>
            {/* Left Side: Visa Info */}
            <div>
              <Image
                className='border-2 border-light p-2'
                src={visaServices?.type?.image_path}
                width={250}
                height={200}
              />
              <h6 className='fw-bold text-20 text-dark py-3 px-4'>
                {/* <BiMoney className='me-2' /> */}
                {visaServices?.name}
              </h6>
              {/* <p className='text-muted mb-1'>VISA Processing FEE</p> */}
            </div>

            {/* Right Side: Price & Button */}
            <div className='text-end d-flex flex-column'>
              {/* <span className=' d-flex justify-content-end text-muted'>
                <span>{visaServices?.tour_duration} Days</span>
              </span> */}
              <span className=' d-flex justify-content-end text-muted'>
                <span>{visaServices?.country?.name} </span>
              </span>
              <p className='currency border-bottom fs-4 fw-bold text-primary'>
                ৳ {visaServices?.processing_fee || visaServices?.price}
              </p>
              <small className='info-text text-secondary py-2'>
                {/* <BiInfoCircle className='me-1' /> This fee is applicable for a */}
                this fee is applicable for single person
              </small>
              <Link href={`/visa/visa-booking/${visaServices?.slug}`}>
                <button className='btn my-2 btn-primary rounded-3 px-3'>
                  {/* <BiDownload className='me-1' /> Proceed → */}
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcessingCard;
