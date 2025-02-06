import { useState, useEffect } from 'react';
import { baseUrl } from '../../../utils/network';

const TourSearch = ({ onLocationSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [locationSearchContent, setLocationSearchContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Function to fetch location data from the API
  const fetchLocations = async (searchText) => {
    setIsLoading(true); // Set loading to true before making the request
    const response = await fetch(
      `${baseUrl}/frontend/package/data/list-of-location/${searchText}`
    );
    const data = await response.json();
    if (data.success) {
      setLocationSearchContent(data.data);
    } else {
      setLocationSearchContent([]); // Handle empty data
    }
    setIsLoading(false); // Set loading to false after the request completes
  };

  // Trigger the fetch request whenever the search value changes
  useEffect(() => {
    if (searchValue) {
      fetchLocations(searchValue);
    } else {
      setLocationSearchContent([]); // Clear the results if search value is empty
    }
  }, [searchValue]);

  const handleOptionClick = (item) => {
    setSearchValue(item);
    setSelectedItem(item);
    if (onLocationSelect) {
      onLocationSelect(item); // Send selected location to the parent component
    }
  };

  return (
    <>
      <div className='searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
        <div
          data-bs-toggle='dropdown'
          data-bs-auto-close='true'
          data-bs-offset='0,22'
        >
          <h4 className='text-15 fw-500 ls-2 lh-16'>Destinations</h4>
          <div className='text-15 text-light-1 ls-2 lh-16'>
            <input
              autoComplete='off'
              type='search'
              placeholder='Search Destination?'
              className='js-search js-dd-focus'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className='shadow-2 dropdown-menu min-width-400'>
          <div className='bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4'>
            <ul className='y-gap-5 js-results'>
              {isLoading ? (
                <li className='text-center text-15 text-light-1 py-15'>
                  Searching...
                </li>
              ) : locationSearchContent.length === 0 && searchValue ? (
                <li className='text-center text-15 text-light-1 py-15'>
                  No locations found
                </li>
              ) : (
                locationSearchContent.map((item, index) => (
                  <li
                    className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                      selectedItem === item ? 'active' : ''
                    }`}
                    key={index}
                    role='button'
                    onClick={() => handleOptionClick(item)}
                  >
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4' />
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          {item}
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourSearch;
