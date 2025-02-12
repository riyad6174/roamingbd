import { useState } from 'react';
import { IoMdSwap } from 'react-icons/io';
const FlyingFromLocation = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: 'London',
      address: 'Greater London, United Kingdom',
    },
    {
      id: 2,
      name: 'New York',
      address: 'New York State, United States',
    },
    {
      id: 3,
      name: 'Paris',
      address: 'France',
    },
    {
      id: 4,
      name: 'Madrid',
      address: 'Spain',
    },
    {
      id: 5,
      name: 'Santorini',
      address: 'Greece',
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      {/* <div
        style={{
          padding: '5px 0',
          border: '1px solid rgb(165, 164, 164)',
          borderRadius: '5px',
        }}
        className='searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch relative'
      >
        <div
          data-bs-toggle='dropdown'
          data-bs-auto-close='true'
          data-bs-offset='0,22'
        >
          <h4 className='text-15 fw-300 ls-2 lh-16'>Leaving From</h4>
          <div className='text-15 text-light-1 ls-2 lh-16'>
            <input
              autoComplete='off'
              type='search'
              placeholder='City, airport'
              className='js-search js-dd-focus'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className='shadow-2 dropdown-menu min-width-400'>
          <div className='bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4'>
            <ul className='y-gap-5 js-results'>
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? 'active' : ''
                  }`}
                  key={item.id}
                  role='button'
                  onClick={() => handleOptionClick(item)}
                >
                  <div className='d-flex'>
                    <div className='icon-location-2 text-light-1 text-20 pt-4' />
                    <div className='ml-10'>
                      <div className='text-15 lh-12 fw-500 js-search-option-target'>
                        {item.name}
                      </div>
                      <div className='text-14 lh-12 text-light-1 mt-5'>
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          style={{
            position: 'absolute',
            right: '-25px',
            top: '10px',
            height: '40px',
            width: '40px',
            borderRadius: '100%',
            backgroundColor: 'white',
            zIndex: '999',
          }}
          className='  border '
        >
          <IoMdSwap style={{ color: 'blue', fontWeight: '700' }} />
        </button>
      </div> */}

      <div
        style={{
          padding: '8px 8px',
          border: '1px solid rgb(165, 164, 164)',
          borderRadius: '5px',
        }}
        className='relative pr-50 searchMenu-date js-form-dd js-calendar d-flex gap-3 align-items-center justify-content-between px-2 '
      >
        <div className='d-flex flex-column align-items-start'>
          <span className='text-14 fw-300 ls-2 text-muted lh-16'>
            Leaving from
          </span>
          <span className='text-14 fw-600 ls-2 lh-16 text-muted'>
            City, airport
          </span>
        </div>
        <button
          style={{
            position: 'absolute',
            right: '-25px',
            top: '10px',
            height: '40px',
            width: '40px',
            borderRadius: '100%',
            backgroundColor: 'white',
            zIndex: '999',
          }}
          className='  border '
        >
          <IoMdSwap style={{ color: 'blue', fontWeight: '700' }} />
        </button>
      </div>
    </>
  );
};

export default FlyingFromLocation;
