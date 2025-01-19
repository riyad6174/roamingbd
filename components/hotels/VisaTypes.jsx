import Image from 'next/image';
import Link from 'next/link';
import { hotelsData } from '../../data/hotels';

const VisaTypes = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center '>
      <div className='row justify-content-center g-4'>
        {hotelsData.slice(0, 4).map((item, index) => (
          <div key={index} className='col-md-3'>
            <div className='card rounded-0'>
              <img
                src='/img/gallery/1/usa.png'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body'>
                <ul className='text-light-1'>
                  {[
                    'Schooling Visa',
                    'Higher Education Visa',
                    'Immigration Visa',
                    'Business Visa',
                    'Tourist Visa',
                    'Medical Tourism',
                  ].map((text, index) => (
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
                      <p>{text}</p>
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
