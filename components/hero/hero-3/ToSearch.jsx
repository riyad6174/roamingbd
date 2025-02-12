import axios from 'axios';
import { useEffect, useState } from 'react';

const ToSearch = ({ onCountrySelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await axios.get(
          'https://travel.pritom.me/api/v1/frontend/visa-country/data/list'
        );
        if (response.data.success) {
          setCountry(response.data.data.data);
        }
      } catch (error) {
        console.error('Error fetching visa types:', error);
      }
    };
    fetchVisaTypes();
  }, []);

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    onCountrySelect(item.id); // Pass selected country ID to parent
  };

  return (
    <div className='searchMenu-loc py-1 px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
      <div
        data-bs-toggle='dropdown'
        data-bs-auto-close='true'
        data-bs-offset='0,22'
      >
        <h4 className='text-15 fw-500 ls-2 lh-16'>To Country</h4>
        <div className='text-15 text-light-1 ls-2 lh-16'>
          <input
            autoComplete='off'
            type='search'
            placeholder='Where are you going?'
            className='js-search js-dd-focus'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className='shadow-2 dropdown-menu min-width-400'>
        <div className='bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4'>
          <ul className='y-gap-5 js-results'>
            {countries.map((item) => (
              <li
                key={item.id}
                className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                  selectedItem && selectedItem.id === item.id ? 'active' : ''
                }`}
                role='button'
                onClick={() => handleOptionClick(item)}
              >
                <div className='d-flex'>
                  <div className='ml-10'>
                    <div className='text-15 lh-12 fw-500 js-search-option-target'>
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToSearch;
