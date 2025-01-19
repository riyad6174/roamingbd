import FilterBox from './filter-box';

const SidebarPackageBookingDetails = ({ tour }) => {
  return (
    <div className='container my-5'>
      <div className='card rounded-0 bg-white'>
        {/* First Section */}
        <div className='card-body'>
          <div className=''>
            {/* First Column */}
            <h4>Price Details</h4>

            <div className='py-10 '>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='fw-bold'>Base Price</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span>1 Room x 1 Night</span>
                <span>BDT 14764</span>
              </div>
            </div>
            <div className='py-10 '>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='fw-bold'>Taxes, Fee and Surcharges</span>
                <span className='fw-bold'>BDT 2000</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span>Vat</span>
                <span>BDT 14764</span>
              </div>
            </div>
            <div className='py-10 '>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='fw-bold'>Other Services</span>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span>Charity</span>
                <span>BDT 14764</span>
              </div>
            </div>
            <div className='py-10 text-20'>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='fw-bold'>Total Amount</span>
                <span className='fw-bold'>BDT 2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPackageBookingDetails;
