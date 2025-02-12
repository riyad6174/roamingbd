import CallToActions from '../../../components/common/CallToActions';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-3';
import DefaultFooter from '../../../components/footer/footer-7';
import Sidebar from '../../../components/hotel-list/hotel-list-v2/Sidebar';
import PackageCard from '../../../components/tour/PackageCard';
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from '../../../utils/network';
import dynamic from 'next/dynamic';
import TourSearch from '../../../components/hero/hero-3/TourSearch';
const PackageSearch = () => {
  const router = useRouter();
  const { location } = router.query;

  const [searchResult, setSearchResult] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (!location || isFiltering) return; // Prevent fetch if filtering is active

    const fetchSearchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/frontend/package/data/list?location=${location}`
        );
        if (response.data.success) {
          setSearchResult(response.data.data.data);
        } else {
          console.error('Error fetching tour:', response.data.message);
        }
      } catch (error) {
        console.error('API Fetch Error:', error);
      }
    };

    fetchSearchData();
  }, [location]); // Remove `isFiltering` from dependencies

  const handleLocationSelect = (selectedLocation) => {
    console.log('Selected location:', selectedLocation);
    setSelectedLocation(selectedLocation);
    // You can handle the selected location here
  };

  const fetchPackages = async (filters = {}) => {
    setIsFiltering(true); // Mark filtering as active

    try {
      const validFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value != null)
      );

      const queryParams = new URLSearchParams(validFilters).toString();
      console.log('Fetching with filters:', queryParams);

      const response = await axios.get(
        `${baseUrl}/frontend/package/data/list?${queryParams}`
      );

      if (response.data.success) {
        setSearchResult(response.data.data.data);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setTimeout(() => setIsFiltering(false), 300); // Delay resetting filtering state
    }
  };

  const handleSearch = () => {
    Router.push(`/package/package-search?location=${selectedLocation}`);
  };

  return (
    <>
      <Seo pageTitle='Tour Search' />

      <div className='header-margin'></div>
      <Header11 />

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='mainSearch border bg-light pr-30 py-20 lg:px-20 lg:py-10 lg:pb-10 rounded-4'>
            <div className='d-flex flex-row align-items-center w-100'>
              <div className=' ' style={{ width: '1200px' }}>
                <TourSearch
                  initialLocation={location}
                  onLocationSelect={handleLocationSelect}
                />
              </div>
              <div className='mt-3 w-25 d-flex justify-content-center'>
                <button
                  className='mainSearch__submit button -dark-1 py-15 px-35 h-60 rounded-4 bg-blue-1 text-white text-blue-1 w-100'
                  onClick={handleSearch}
                >
                  <i className='icon-search text-20 mr-10' />
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className='row y-gap-30 mt-20'>
            <div className='col-xl-3'>
              <aside className='sidebar y-gap-40 xl:d-none'>
                <Sidebar onFilterChange={fetchPackages} />
              </aside>

              <div
                className='offcanvas offcanvas-start'
                tabIndex='-1'
                id='listingSidebar'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title'>Filter Packages</h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>

                <div className='offcanvas-body'>
                  <aside className='sidebar y-gap-40  xl:d-block'>
                    <Sidebar onFilterChange={fetchPackages} />
                  </aside>
                </div>
              </div>
            </div>

            <div className='col-xl-9'>
              <div className='mt-30'></div>
              {searchResult.length > 0 ? (
                <div className='row y-gap-30'>
                  <PackageCard packages={searchResult} />
                </div>
              ) : (
                <div className='text-center py-5'>
                  <h4>No packages found</h4>
                  <p>Try adjusting your filters or search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(PackageSearch), { ssr: false });
