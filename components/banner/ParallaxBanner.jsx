import Link from 'next/link';
import { Parallax } from 'react-parallax';

const ParallaxBanner = () => {
  return (
    <Parallax
      strength={200}
      bgImage='/img/backgrounds/4.png'
      bgImageAlt='amazing place'
      bgClassName='object-fit-cover'
    >
      <div className='section-bg layout-pt-xl layout-pb-xl'>
        <div className='container'>
          <div className='row justify-start text-left'>
            <div className='col-auto' data-aos='fade'>
              <div className='text-white mb-10'>
                <Link href='/' className='header-logo mr-20'>
                  <img src='/img/general/logo.png' alt='logo icon' />
                </Link>
              </div>
              <h3 className='text-30 text-white'>
                Why Book Flights with Roaming BD
              </h3>
              <div className='d-inline-block mt-30'>
                <p className='text-15 text-white'>Flights to suit you</p>
                <p className='text-16 text-white'>
                  Ready to jet off? Booking a flight is the first step to an
                  exciting getaway. However, with so <br /> many things to
                  consider, finding cheap flights is not always the easiest of
                  tasks. That&apos;s why, at <br /> Roaming BD, we&apos;ve made
                  things simple. Letting you search and compare <br /> flights
                  from thousands of different airlines to destinations all over
                  the world, it&apos;s never been easier to
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
