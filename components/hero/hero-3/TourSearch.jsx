import { useState, useEffect } from 'react';
import { baseUrl } from '../../../utils/network';

const TourSearch = ({ initialLocation, onLocationSelect }) => {
  const [searchValue, setSearchValue] = useState(initialLocation || '');
  const [selectedItem, setSelectedItem] = useState(initialLocation || null);
  const [locationSearchContent, setLocationSearchContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialLocation) {
      setSearchValue(initialLocation);
      setSelectedItem(initialLocation);
    }
  }, [initialLocation]);

  const fetchLocations = async (searchText) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${baseUrl}/frontend/package/data/list-of-location/${searchText}`
      );
      const data = await response.json();
      setLocationSearchContent(data.success ? data.data : []);
    } catch (error) {
      console.error('Error fetching locations:', error);
      setLocationSearchContent([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchValue) {
      fetchLocations(searchValue);
    } else {
      setLocationSearchContent([]);
    }
  }, [searchValue]);

  const handleOptionClick = (item) => {
    setSearchValue(item);
    setSelectedItem(item);
    onLocationSelect?.(item);
  };

  return (
    <div className='searchMenu-loc  px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
      <div
        data-bs-toggle='dropdown'
        data-bs-auto-close='true'
        data-bs-offset='0,22'
        className='border px-2 py-2'
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
            ) : searchValue === '' ? (
              <li className='text-center text-15 text-light-1 py-15'>
                Start typing to search destinations
              </li>
            ) : locationSearchContent.length === 0 ? (
              <li className='text-center text-15 text-light-1 py-15'>
                No locations found
              </li>
            ) : (
              locationSearchContent.map((item, index) => (
                <li
                  key={index}
                  role='button'
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem === item ? 'active' : ''
                  }`}
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
  );
};

export default TourSearch;
