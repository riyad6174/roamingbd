import DealsFilter from '../sidebar/DealsFilter';
import Map from '../sidebar/Map';
import SearchBox from '../sidebar/SearchBox';
import PopularFilters from '../sidebar/PopularFilters';
import AminitesFilter from '../sidebar/AminitesFilter';
import RatingsFilter from '../sidebar/RatingsFilter';
import GuestRatingFilters from '../sidebar/GuestRatingFilters';
import StyleFilter from '../sidebar/StyleFilter';
import NeighborhoddFilter from '../sidebar/NeighborhoddFilter';
import PirceSlider from '../sidebar/PirceSlider';
import MainFilterSearchBox from '../hotel-list-v2/MainFilterSearchBox';
import PackageFilter from '../sidebar/PackageFilter';

const Sidebar = () => {
  return (
    <>
      {/* End search box */}

      <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Deals</h5>
        <div className='sidebar-checkbox'>
          <div className='row y-gap-5 items-center'>
            <DealsFilter />
          </div>
        </div>
      </div>
      {/* End deals filter */}

      <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Packages</h5>
        <div className='sidebar-checkbox'>
          <PackageFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      {/* <div className='sidebar__item pb-30'>
        <h5 className='text-18 fw-500 mb-10'>Nightly Price</h5>
        <div className='row x-gap-10 y-gap-30'>
          <div className='col-12'>
            <PirceSlider />
          </div>
        </div>
      </div> */}
      {/* End Nightly priceslider */}

      {/* End Aminities filter */}

      {/* End rating filter */}

      <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Filter Duaration</h5>
        <div className='sidebar-checkbox'>
          <GuestRatingFilters />
        </div>
      </div>
      {/* End Guest Rating */}
      {/* 
      <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Style</h5>
        <div className='sidebar-checkbox'>
          <StyleFilter />
        </div>
      </div> */}
      {/* End style filter */}

      {/* End Aminities filter */}

      {/* End find map */}
    </>
  );
};

export default Sidebar;
