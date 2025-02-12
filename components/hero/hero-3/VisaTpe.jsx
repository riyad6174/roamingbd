import { useState, useEffect } from 'react';
import axios from 'axios';

const VisaType = ({ onVisaTypeSelect, selectedCountryId }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [visaTypes, setVisaTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selectedCountryId) {
      setVisaTypes([]);
      setError('');
      return;
    }

    const fetchVisaTypes = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `https://travel.pritom.me/api/v1/frontend/visa-type/${selectedCountryId}/data/list-by-country`
        );

        if (response.data.success && response.data.data.length > 0) {
          setVisaTypes(response.data.data);
        } else {
          setVisaTypes([]);
          setError('No visa types available for this country');
        }
      } catch (error) {
        console.error('Error fetching visa types:', error);
        setError('Failed to load visa types. Please try again.');
      }
      setLoading(false);
    };

    fetchVisaTypes();
  }, [selectedCountryId]);

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    onVisaTypeSelect(item.id);
  };

  return (
    <div className='searchMenu-loc py-1 px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
      <div
        data-bs-toggle='dropdown'
        data-bs-auto-close='true'
        data-bs-offset='0,22'
      >
        <h4 className='text-15 fw-500 ls-2 lh-16'>
          Select Visa Processing Type
        </h4>
        <div className='text-15 text-light-1 ls-2 lh-16'>
          <input
            autoComplete='off'
            type='search'
            placeholder={
              selectedCountryId
                ? 'Select a Visa type'
                : 'Select a country first'
            }
            className='js-search js-dd-focus'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={!selectedCountryId}
          />
        </div>
      </div>

      <div className='shadow-2 dropdown-menu min-width-400'>
        <div className='bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4'>
          {!selectedCountryId ? (
            <p className='text-center text-danger'>Select a country first</p>
          ) : loading ? (
            <p className='text-center text-blue-1'>Loading visa types...</p>
          ) : error ? (
            <p className='text-center text-danger'>{error}</p>
          ) : (
            <ul className='y-gap-5 js-results'>
              {visaTypes.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? 'active' : ''
                  }`}
                  key={item.id}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaType;
