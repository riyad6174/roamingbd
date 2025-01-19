import FilterBox from './filter-box';

const SidebarPackageType = ({ tour }) => {
  return (
    <div className='container my-5'>
      <div className='card'>
        {/* First Section */}
        <div className='card-body'>
          <div className='row'>
            {/* First Column */}
            <div className='col-md-4'>
              <h4 className='text-24 uppercase'>Standard </h4>
              <p className='text-10'>Hotel Windy Terrace (Cox&apos;s Bazar)</p>
            </div>
            {/* Second Column */}
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-6 px-2 '>
                  <p className='text-10'>Valid From</p>
                  <div className='border rounded-4 d-flex items-center justify-content-center gap-2 '>
                    <p className='text-30 fw-bold'>16</p>
                    <div className=''>
                      <p className='text-12'>December</p>
                      <p className='text-10'>Thursday,2024</p>
                    </div>
                  </div>
                </div>
                <div className='col-6 px-2 '>
                  <p className='text-10'>Valid From</p>
                  <div className='border rounded-4 d-flex items-center justify-content-center gap-2 '>
                    <p className='text-30 fw-bold'>16</p>
                    <div className=''>
                      <p className='text-12'>December</p>
                      <p className='text-10'>Thursday,2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className='card-body'>
          <div className='row gx-0'>
            <div className='col-md-4'>
              <div className='text-10 bg-red-3 text-red-2 my-2'>
                Price Per Person Single
              </div>
              <h5 className='text-14 underline'>BDT 17,500</h5>
              <p className='text-10'>Price includes VAT & Tax.</p>
            </div>
            <div className='col-md-4'>
              <div className='text-10 bg-red-3 text-red-2 my-2'>
                Price Per Person Single
              </div>
              <h5 className='text-14 underline'>BDT 17,500</h5>
              <p className='text-10'>Price includes VAT & Tax.</p>
            </div>{' '}
            <div className='col-md-4'>
              <div className='text-10 bg-red-3 text-red-2 my-2'>
                Price Per Person Single
              </div>
              <h5 className='text-14 underline'>BDT 17,500</h5>
              <p className='text-10'>Price includes VAT & Tax.</p>
            </div>
          </div>
        </div>

        {/* Third Section with Full-Width Button */}
        <div className='card-body text-center'>
          <button className='btn btn-primary w-100'>Select Offer</button>
        </div>
      </div>
    </div>
  );
};

export default SidebarPackageType;
