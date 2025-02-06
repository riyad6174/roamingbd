import CallToActions from '../../../components/common/CallToActions';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-3';
import DefaultFooter from '../../../components/footer/footer-7';
import Sidebar from '../../../components/hotel-list/hotel-list-v2/Sidebar';
import PackageCard from '../../../components/tour/PackageCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseUrl } from '../../../utils/network';
import dynamic from 'next/dynamic';

const TourSearch = () => {
  const router = useRouter();
  const { location } = router.query;

  const [searchResult, setSearchResult] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    if (!location) return; // Don't fetch if location is missing

    const fetchSearchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/frontend/package/data/list/?location=${location}`
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

    if (!isFiltering) {
      fetchSearchData();
    }
  }, [location, isFiltering]); // Removed `isFiltering` dependency

  const fetchPackages = async (filters = {}) => {
    setIsFiltering(true); // Mark filtering state

    try {
      // Correctly serialize filter parameters
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
        setSearchResult([]); // Set empty array if no data
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setIsFiltering(false); // Reset filtering state
    }
  };

  return (
    <>
      <Seo pageTitle='Tour Search' />

      <div className='header-margin'></div>
      <Header11 />

      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='row y-gap-30'>
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

export default dynamic(() => Promise.resolve(TourSearch), { ssr: false });
