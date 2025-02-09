import MainFilterSearchBox from './MainFilterSearchBox';

const index = () => {
  return (
    <section className='masthead -type-3 z-5'>
      <div className='masthead__bg'>
        <img
          alt='image'
          src='/img/masthead/3/banner-1.jpeg'
          className='js-lazy'
        />
      </div>
      <div className='container'>
        <div className='row justify-center'>
          <div className='col-auto'>
            <div className='text-center'>
              <h1
                className='text-40 lg:text-40 md:text-30 text-white'
                data-aos='fade-up'
              >
                Plan Your Perfect Trip
              </h1>
              <span
                className='d-flex gap-4 align-items-center justify-content-center'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <span className='d-flex gap-3 align-items-center justify-content-center'>
                  <img
                    alt='image'
                    src='/img/icons/icon-1.png'
                    className='js-lazy'
                  />
                  <p className='text-white mt-6 md:mt-10 border-bottom'>
                    Secure Payment
                  </p>
                </span>

                <span className='d-flex gap-3 align-items-center justify-content-center'>
                  <img
                    alt='image'
                    src='/img/icons/icon-2.png'
                    className='js-lazy'
                  />

                  <p className='text-white mt-6 md:mt-10 border-bottom'>
                    Support in approx 30s
                  </p>
                </span>
              </span>
            </div>
            {/* End hero title */}

            <div
              className='masthead__tabs'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
