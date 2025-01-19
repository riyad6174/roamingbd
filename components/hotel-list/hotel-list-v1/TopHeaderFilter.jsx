const TopHeaderFilter = () => {
  return (
    <>
      <div className='row y-gap-10 items-center justify-between '>
        <div className='col-auto'>
          <div className='text-18'>
            <span className='fw-500'>3,269 properties</span> in Dhaka
          </div>
        </div>
        {/* End .col */}

        <div className='col-auto'>
          <span className='d-flex items-end justify-end text-12 py-2 text-end'>
            *Price Includes VAT & Tax
          </span>
          <div className='row x-gap-20  y-gap-20'>
            <div className='col-auto'>
              <button className='button -blue-1 h-40 px-20 rounded-50 shadow-3 bg-blue-1-05 text-15 text-blue-1'>
                <i className='icon-up-down text-12 mr-10' />
                Sort By RoamingBD Recommended
              </button>
            </div>
            <div className='col-auto'>
              <button className='button -blue-1 h-40 px-20 rounded-50 shadow-3 bg-blue-1-05 text-15 text-blue-1'>
                <i className='icon-up-down text-12 mr-10' />
                Price Per Room Per Night (Excl Tax & Fees)
              </button>
            </div>
            {/* End .col */}

            <div className='col-auto d-none xl:d-block'>
              <button
                data-bs-toggle='offcanvas'
                data-bs-target='#listingSidebar'
                className='button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1'
              >
                <i className='icon-up-down text-14 mr-10' />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
