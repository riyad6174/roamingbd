import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../utils/network';

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    cat_id: null,
    min_price: null,
    max_price: null,
    min_duration: null,
    max_duration: null,
  });

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/frontend/package/data/filter`
        );
        if (response.data.success) {
          setFilters(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchFilters();
  }, []);

  // Debounce filter application to prevent excessive API calls
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedFilters.cat_id || selectedFilters.min_price) {
        applyFilters();
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [selectedFilters]);

  const handleFilterChange = (type, values) => {
    setSelectedFilters((prev) => ({
      ...prev, // Preserve previous selections
      ...values,
    }));
  };

  const applyFilters = async () => {
    try {
      const queryParams = new URLSearchParams();

      if (selectedFilters.cat_id)
        queryParams.append('cat_id', selectedFilters.cat_id);
      if (selectedFilters.min_price)
        queryParams.append('min_price', selectedFilters.min_price);
      if (selectedFilters.max_price)
        queryParams.append('max_price', selectedFilters.max_price);
      if (selectedFilters.min_duration)
        queryParams.append('min_duration', selectedFilters.min_duration);
      if (selectedFilters.max_duration)
        queryParams.append('max_duration', selectedFilters.max_duration);

      const response = await axios.get(
        `${baseUrl}/frontend/package/data/list?${queryParams.toString()}`
      );

      if (response.data.success) {
        onFilterChange(response.data.data.data);
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };

  if (!filters) return <p>Loading filters...</p>;

  return (
    <div>
      {/* Price Range Section */}
      <div className='sidebar__item py-5'>
        <h5 className='text-18 fw-500 mb-10'>Price Range</h5>
        <div className='sidebar-checkbox'>
          {filters.price_range.map((range, index) => (
            <div key={index} className='col-auto py-4'>
              <div className='form-radio'>
                <div className='radio d-flex items-center'>
                  <input
                    type='radio'
                    name='price_range'
                    value={range.start}
                    onChange={() =>
                      handleFilterChange('price', {
                        min_price: range.start,
                        max_price: range.end,
                      })
                    }
                    checked={selectedFilters.min_price === range.start}
                  />
                  <div className='radio__mark'>
                    <div className='radio__icon' />
                  </div>
                  <div className='ml-10'>
                    BDT{range.start} - BDT{range.end}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Section */}
      <div className='sidebar__item py-5'>
        <h5 className='text-18 fw-500 mb-10'>Duration</h5>
        <div className='sidebar-checkbox'>
          {filters.day_range.map((range, index) => (
            <div key={index} className='col-auto py-4'>
              <div className='form-radio'>
                <div className='radio d-flex items-center'>
                  <input
                    type='radio'
                    name='day_range'
                    value={range.start}
                    onChange={() =>
                      handleFilterChange('duration', {
                        min_duration: range.start,
                        max_duration: range.end,
                      })
                    }
                    checked={selectedFilters.min_duration === range.start}
                  />
                  <div className='radio__mark'>
                    <div className='radio__icon' />
                  </div>
                  <div className='ml-10'>
                    {range.start} - {range.end} days
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className='sidebar__item py-5'>
        <h5 className='text-18 fw-500 mb-10'>Categories</h5>
        <div className='sidebar-checkbox'>
          {filters.categories.map((category) => (
            <div key={category.id} className='col-auto py-4'>
              <div className='form-radio'>
                <div className='radio d-flex items-center'>
                  <input
                    type='radio'
                    name='category'
                    value={category.id}
                    onChange={() =>
                      handleFilterChange('category', { cat_id: category.id })
                    }
                    checked={selectedFilters.cat_id === category.id}
                  />
                  <div className='radio__mark'>
                    <div className='radio__icon' />
                  </div>
                  <div className='ml-10'>{category.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
