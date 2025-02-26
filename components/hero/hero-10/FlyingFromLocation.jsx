import { useState, useRef, useEffect } from 'react';
import { IoMdSwap } from 'react-icons/io';

const FlyingFromLocation = ({
  airportList,
  onSelectAirport,
  onSearch,
  isLoadingFrom = false,
  setIsDropdownOpenFrom,
  isDropdownOpenFrom = false,
  handleFromDropdownOpen,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  // const [isDropdownOpenFrom, setIsDropdownOpenFrom] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (item) => {
    setSelectedItem(item);
    setSearchValue(`${item.name} (${item.code})`);
    setIsDropdownOpenFrom(false);
    onSelectAirport(item);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  // useEffect(() => {
  //   if (searchValue) {
  //     setIsDropdownOpenFrom(true);
  //   }
  // }, [airportList]);

  // const handleClickOutside = (event) => {
  //   if (
  //     dropdownRef.current &&
  //     !dropdownRef.current.contains(event.target) &&
  //     !event.target.closest('.searchMenu-loc')
  //   ) {
  //     setIsDropdownOpenFrom(false);
  //     onSearch('');
  //   }
  // };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpenFrom(false); // Only manage own state
      onSearch('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const handleDropdownToggle = () => {
  //   setIsDropdownOpenFrom((prev) => {
  //     if (!prev) {
  //       setSearchValue('');
  //       onSearch('');
  //     }
  //     return !prev;
  //   });
  // };

  return (
    <div ref={dropdownRef} className='relative'>
      <div
        style={{
          padding: '10px',
          border: '1px solid #a5a4a4',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        className='searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch relative'
        onClick={() => {
          // setIsDropdownOpenFrom(true);
          setSearchValue('');
          onSearch('');
          handleFromDropdownOpen();
        }}
      >
        <h4 className='text-15 text-light-1 fw-300 ls-2 lh-16'>Going From</h4>
        <div className='text-15 text-light-1 fw-600  ls-2 lh-16'>
          {selectedItem
            ? `${selectedItem.city}, ${selectedItem.code}`
            : 'City, airport'}
        </div>
      </div>

      {isDropdownOpenFrom && (
        <div
          className='shadow-2 min-width-400'
          style={{
            position: 'absolute',
            zIndex: 999,
            background: 'white',
            width: '100%',
          }}
        >
          <div className='bg-white px-20 py-20 rounded-4'>
            <input
              autoComplete='off'
              type='search'
              placeholder='City, airport'
              className='form-control mb-2 border py-10'
              value={searchValue}
              onChange={handleSearchChange}
              onClick={(e) => e.stopPropagation()}
            />

            {isLoadingFrom ? (
              <div class='d-flex justify-content-center'>
                <div
                  class='spinner-border spinner-border-sm text-primary mt-2'
                  role='status'
                >
                  <span class='visually-hidden'>Loading...</span>
                </div>
              </div>
            ) : (
              <ul className='y-gap-5 js-results'>
                {airportList.length > 0 ? (
                  airportList.map((item, index) => (
                    <li
                      className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                        selectedItem && selectedItem.code === item.code
                          ? 'active'
                          : ''
                      }`}
                      key={index}
                      role='button'
                      onClick={() => handleOptionClick(item)}
                    >
                      <div className='d-flex'>
                        <div className='icon-location-2 text-light-1 text-20 pt-4' />
                        <div className='ml-10'>
                          <div className='text-15 lh-12 fw-500 js-search-option-target'>
                            {item.city}, {item.country}
                          </div>
                          <div className='text-14 lh-12 text-light-1 mt-5'>
                            {item.name} ({item.code})
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className='text-center text-muted py-2'>
                    No airports found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}

      <button
        style={{
          position: 'absolute',
          right: '-25px',
          top: '15px',
          height: '40px',
          width: '40px',
          borderRadius: '100%',
          backgroundColor: 'white',
          zIndex: '999',
        }}
        className='border'
      >
        <IoMdSwap style={{ color: 'blue', fontWeight: '700' }} />
      </button>
    </div>
  );
};

export default FlyingFromLocation;
