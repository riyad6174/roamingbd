import ContactInfo from './ContactInfo';
import Copyright from './Copyright';
import FooterContent from './FooterContent';
import AppButton from './AppButton';
import Subscribe from './Subscribe';

const index = () => {
  return (
    <footer className=' footer -type-1 text-dark-1 bg-light-4 footer-blue_custom'>
      <div className='container'>
        <div className='row y-gap-30 py-40'>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center'>
              <div className='d-flex justify-center'></div>
              <h4 className='text-18 fw-500'>Authorized By</h4>
            </div>
          </div>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center pr-30'>
              <div className='d-flex justify-center'></div>
              <img
                src='/img/icons/aftab.png'
                alt='image'
                // className='size-100'
              />
            </div>
          </div>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center pr-30'>
              <div className='d-flex justify-center'></div>
              <img
                src='/img/icons/civil.png'
                alt='image'
                // className='size-100'
              />
            </div>
          </div>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center pr-30'>
              <div className='d-flex justify-center'></div>
              <img
                src='/img/icons/north.png'
                alt='image'
                // className='size-100'
              />
            </div>
          </div>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center pr-30'>
              <div className='d-flex justify-center'></div>
              <img
                src='/img/icons/stock.png'
                alt='image'
                // className='size-100'
              />
            </div>
          </div>
          <div
            className='col-lg-2 col-md-4 gap-4'
            data-aos='fade'
            data-aos-delay={200}
            // key={item.id}
          >
            <div className='d-flex gap-2 align-items-center pr-30'>
              <div className='d-flex justify-center'></div>
              <img
                src='/img/icons/iata.png'
                alt='image'
                // className='size-100'
              />
            </div>
          </div>

          {/* <Subscribe /> */}
          {/* End .row */}
          <div className='row y-gap-40 px-20  justify-between xl:justify-start layout-pt-sm'>
            {/* <div className='col-xl-2 col-lg-4 col-sm-6'>
              <h5 className='text-16 fw-500 mb-30'>Contact Us</h5>
              <ContactInfo />
            </div> */}
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            {/* <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Mobile</h5>
              <AppButton />
            </div> */}
          </div>
          <div className='py-10'>
            <img src='/img/ssl/image.png' />
          </div>

          {/* End .row */}
        </div>
        {/* End footer top */}

        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
