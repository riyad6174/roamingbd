import { hotelsData } from '../../data/hotels';
import { useEffect, useState } from 'react';

const VisaTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://travel.pritom.me/api/v1/frontend/visa-country/data/list-with-service'
        );
        const data = await response.json();
        setTypes(data.data.data); // Adjusted to access nested data
      } catch (error) {
        console.error('Error fetching visa countries:', error);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div className='container d-flex align-items-center justify-content-center '>
      <div className='row justify-content-center g-4'>
        {types.slice(0, 4).map((item, index) => (
          <div key={index} className='col-md-3'>
            <div className='card rounded-0'>
              <img
                src={item.image_path}
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body'>
                <ul className='text-light-1'>
                  {item?.services.map((service, index) => (
                    <li key={index} className='d-flex gap-3 align-items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='DarkBlue'
                        className='bi bi-square-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
                      </svg>
                      <p>{service.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaTypes;
