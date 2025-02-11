import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://travel.pritom.me/api/v1/frontend/visa-country/data/list'
        );
        const data = await response.json();
        setCountries(data.data.data); // Adjusted to access nested data
      } catch (error) {
        console.error('Error fetching visa countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div className='row w-75'>
        {countries.map((item) => (
          <div
            className='col-lg-3 col-md-6 mb-4 d-flex justify-content-start gy-5' // Center each column
            data-aos='fade'
            key={item.id}
          >
            <div className='d-flex gap-2 align-items-center'>
              <div className='d-flex justify-center'>
                <Image
                  src={item.image_path || '/placeholder.jpg'}
                  alt={item.name || 'Country Image'}
                  width={50}
                  height={50}
                  className='rounded'
                />
              </div>
              <h4 className='text-18 fw-500'>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
