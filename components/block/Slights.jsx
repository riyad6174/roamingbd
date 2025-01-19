const Slights = () => {
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
      {slightContent.map((item, index) => (
        <div key={index} className='card travel-card rounded-4 border-0 shadow'>
          <div className='row g-0'>
            {/* Image Section */}
            <div className='col-md-4'>
              <div className='position-relative h-100'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='img-fluid rounded h-100 w-100'
                />
                <div className='overlay-info position-absolute  top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3 text-white'>
                  <span className='badge bg-dark text-uppercase'>3 Day</span>
                  <div>
                    <p className='mb-0 fw-bold'>
                      Price starts from (per person)
                    </p>
                    <h5 className='fw-bold'>BDT 13,500</h5>
                    <p className='small'>{item.title}</p>
                    <p className='small '>
                      <i className='bi bi-geo-alt-fill'></i> Bangkok, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className='col-md-8'>
              <div className='p-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4 className='fw-bold mb-0'>{item.title}</h4>
                  <span className='badge bg-success px-5 py-2'>Best Deal</span>
                </div>
                <p className='text-muted mt-2'>
                  <i className='bi bi-geo-alt'></i> Bangkok, Thailand - Pattaya,
                  Thailand
                </p>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <h6 className='fw-bold mt-4'>Highlights:</h6>
                    <ul className='list-unstyled text-muted'>
                      <li>Explore the Buddhist village of Ramu</li>
                      <li>
                        Discover ancient monasteries, khyangs, and pagodas
                      </li>
                      <li>Enjoy local cuisine for lunch and dinner</li>
                    </ul>
                    <p className='small text-muted py-4'>
                      <i className='bi bi-building'></i> Hotel Windy Terrace
                      (Cox&apos;s Bazar)
                    </p>
                  </div>
                  <div className='d-flex flex-column gap-3 justify-content-start align-items-start mt-4'>
                    <div>
                      <p className='small mb-0'>
                        Price starts from (per person)
                      </p>
                      <h4 className='fw-bold'>BDT 13,500</h4>
                    </div>
                    <button className='btn btn-primary btn-lg'>
                      Select Offer
                    </button>
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

export default Slights;
