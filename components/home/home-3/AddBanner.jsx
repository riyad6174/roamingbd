import Image from 'next/image';
import Link from 'next/link';

const AddBanner = () => {
  const addContent = [
    {
      id: 1,
      img: '/img/backgrounds/1.png',
      title: 'Fly away to your dream vacation',
      subTitle: 'Get inspired – compare and book flights with flexibility',
      meta: '',
      routerPath: '/',
      delayAnimation: '100',
      buttonName: 'Search For Flights',
    },
    {
      id: 2,
      img: '/img/backgrounds/3.png',
      title: 'Go for a good time, not a long time',
      subTitle:
        'Finish your year with a mini break. Save 15% or more when you book and stay by January 7, 2025. ',

      meta: '',
      routerPath: '/',
      delayAnimation: '200',
      buttonName: 'Search For Hotels',
    },
    {
      id: 3,
      img: '/img/backgrounds/2.png',
      title: 'Online Visa Assessment',
      subTitle:
        'Contact us today by fill up free online visa assessment and we will contact you',

      meta: 'Enjoy Summer Deals',
      routerPath: '/',
      delayAnimation: '300',
      buttonName: 'Discover More',
    },
  ];

  return (
    <>
      {addContent.map((item) => (
        <div
          className='col-lg-4 col-sm-6'
          data-aos='fade'
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className='ctaCard -type-1 rounded-4 '>
            <div className='ctaCard__image ratio ratio-2:1'>
              <Image
                width={410}
                height={455}
                className='js-lazy img-ratio'
                src={item.img}
                alt='image'
              />
            </div>
            <div className='ctaCard__content py-20 px-20 lg:py-30 lg:px-30'>
              <h4 className='text-16 lg:text-16 text-white'>{item.title}</h4>
              {item.subTitle ? (
                <>
                  <div className='text-12 fw-500 text-white mb-10'>
                    {item.subTitle}
                  </div>
                </>
              ) : (
                ''
              )}
              <div className='d-inline-block mt-30'>
                <Link
                  href={item.routerPath}
                  className='button px-48 py-10 bg-blue-1 -min-180 bg-white text-light'
                >
                  {item.buttonName}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
