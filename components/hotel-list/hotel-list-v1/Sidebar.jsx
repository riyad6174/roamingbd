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

const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar__item -no-border position-relative">
        <Map />
      </div> */}
      {/* End find map */}

      {/* <div className='sidebar__item -no-border'>
        <h5 className='text-18 fw-500 mb-10'>Search by property name</h5>
        <SearchBox />
      </div> */}
      {/* End search box */}

      <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Price Details</h5>
        <div>
          <h6>Base Price</h6>
        </div>
        <div className='d-flex items-center justify-between border-bottom py-10'>
          <span>1 room x 1 night</span>
          <span>৳ 5500</span>
        </div>
        <div className='d-flex items-center justify-between pt-10'>
          <h6>Taxes, Fee and Surcharges</h6>
          <h6>৳ 880</h6>
        </div>
        <div className='d-flex items-center justify-between  py-5'>
          <span>VAT</span>
          <span>৳ 500</span>
        </div>
        <div className='d-flex items-center justify-between border-bottom py-5'>
          <span>Service Fee</span>
          <span>৳ 500</span>
        </div>
        <div className='d-flex items-center justify-between pt-10'>
          <h6>Others Services</h6>
        </div>

        <div className='d-flex items-center justify-between border-bottom py-5'>
          <span>Charity</span>
          <span>৳ 500</span>
        </div>
        <div className='d-flex items-center justify-between pt-10'>
          <h5>Total Amount</h5>
          <h5>৳ 6500</h5>
        </div>
      </div>
      {/* End deals filter */}

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

      {/* <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Star Rating</h5>
        <div className='row x-gap-10 y-gap-10 pt-10'>
          <RatingsFilter />
        </div>
      </div> */}
      {/* End rating filter */}

      {/* <div className='sidebar__item'>
        <h5 className='text-18 fw-500 mb-10'>Guest Rating</h5>
        <div className='sidebar-checkbox'>
          <GuestRatingFilters />
        </div>
      </div> */}
      {/* End Guest Rating */}

      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
