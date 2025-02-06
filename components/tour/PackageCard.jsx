import Link from 'next/link';

const PackageCard = ({ packages }) => {
  const slightContent = [
    {
      id: 1,
      img: '/img/backgrounds/1.png',
      title: 'Bangkok: A Safari Experience',
      text: `Learn about British history at the Tower of London, a medieval
              castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: '100',
    },
  ];

  return (
    <>
      {packages.map((item, index) => (
        <div key={index} className='card travel-card rounded-4 border-0 shadow'>
          <div className='row g-0'>
            {/* Image Section */}
            <div className='col-md-4'>
              <div className='position-relative h-100'>
                <img
                  src={item.image_path}
                  alt={item.title}
                  className='img-fluid rounded h-100 w-100'
                />
                <div className='overlay-info position-absolute  top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3 text-white'>
                  <span className='badge bg-dark text-uppercase'>
                    {item?.tour_duration} Day
                  </span>
                  <div>
                    <p className='mb-0 fw-bold'>
                      Price starts from (per person)
                    </p>
                    <h5 className='fw-bold'>BDT {item?.price}/-</h5>
                    <p className='small'>{item.title}</p>
                    <p className='small '>
                      <i className='bi bi-geo-alt-fill'></i>
                      {item?.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='col-md-8'>
              <div className='p-4'>
                <Link
                  href={`/package/tour-package-single/${item.slug}`}
                  className='d-flex justify-content-between align-items-center'
                >
                  <h4 className='fw-bold mb-0'>{item.name}</h4>
                  {/* <span className='badge bg-success px-5 py-2'>Best Deal</span> */}
                </Link>
                <p className='text-muted mt-2'>
                  <i className='bi bi-geo-alt'></i> {item.location}
                </p>
                <div className='row '>
                  <div className=' d-flex align-items-start gap-2 justify-content-start'>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {item?.no_person} Person
                    </div>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {item?.tour_duration} Days
                    </div>
                    <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                      {item?.is_air_fair === 1 ? (
                        <span className='text-success'>Fair Included</span>
                      ) : (
                        <span className='text-danger'>Fair Not Included</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <h6 className='fw-bold mt-4'>Description:</h6>

                    <p className='small text-muted py-4'>
                      {item.description || 'No Description'}
                    </p>
                  </div>
                  <div className='d-flex flex-column gap-3 justify-content-start align-items-start mt-4'>
                    <div>
                      <p className='small mb-0'>
                        Price starts from (per person)
                      </p>
                      <h4 className='fw-bold'>BDT {item.price}/-</h4>
                    </div>
                    <Link href={`/package/package-booking/${item.slug}`}>
                      <button className='btn btn-primary btn-sm rounded-0 px-10 py-2'>
                        Select Offer
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PackageCard;
