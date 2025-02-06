import { useState, useEffect } from 'react';
import axios from 'axios';

const VisaType = ({ onVisaTypeSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [visaTypes, setVisaTypes] = useState([]);

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await axios.get(
          'https://travel.pritom.me/api/v1/frontend/visa-type/data/list'
        );
        if (response.data.success) {
          setVisaTypes(response.data.data);
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
    onVisaTypeSelect(item.id); // Pass selected visa type ID to parent
  };

  return (
    <>
      <div className='searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
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
              placeholder='Select a Visa type'
              className='js-search js-dd-focus'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className='shadow-2 dropdown-menu min-width-400'>
          <div className='bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4'>
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
                    {/* <div className='icon-newsletter text-light-1 text-20 pt-4' /> */}
                    <div className='ml-10'>
                      <div className='text-15 lh-12 fw-500 js-search-option-target'>
                        {item.name}
                      </div>
                      {/* <div className='text-14 lh-12 text-light-1 mt-5'>
                        {item.description}
                      </div> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaType;
