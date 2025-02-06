import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FilterVisa = () => {
  const [visaTypes, setVisaTypes] = useState([]);

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await fetch(
          'https://travel.pritom.me/api/v1/frontend/visa-type/data/list'
        );
        const data = await response.json();
        setVisaTypes(data.data); // Assuming the data is in `data.data`
      } catch (error) {
        console.error('Error fetching visa types:', error);
      }
    };

    fetchVisaTypes();
  }, []);

  return (
    <>
      {visaTypes.slice(0, 4).map((item) => (
        <div
          className='col-xl-3 col-lg-3 col-sm-6'
          key={item?.id}
          data-aos='fade'
        >
          <div className='hotelsCard  -type-1 hover-inside-slider'>
            <div className='hotelsCard__image'>
              <div className='cardImage ratio ratio-1:1'>
                <div className='cardImage__content '>
                  <Image
                    width={300}
                    height={300}
                    className='rounded-4 col-12 js-lazy'
                    src={item.image_path || '/placeholder.jpg'}
                    alt={item.name || 'Visa Image'}
                  />
                </div>
              </div>
            </div>

            <div className='cardImage__bottomBadgeVisa'>
              <div className='d-flex items-center bg-blue-1 px-10 py-1 rounded-5'>
                <div className='flex-center  rounded-4 size-30 text-12 fw-600 text-white'>
                  visa
                </div>
                <div className='text-14 bg-white px-20 rounded-5 text-blue-1 ml-10'>
                  {item.name || 'Unknown Visa'}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilterVisa;
