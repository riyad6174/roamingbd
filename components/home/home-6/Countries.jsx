const Countries = () => {
  const blockContent = [
    {
      id: 1,
      icon: '/img/icons/canada.png',
      title: 'Bangladesh',
      delayAnim: '0',
    },
    {
      id: 2,
      icon: '/img/icons/canada.png',
      title: 'United States',
      delayAnim: '50',
    },
    {
      id: 3,
      icon: '/img/icons/canada.png',
      title: 'United Kingdom',
      delayAnim: '100',
    },
    {
      id: 4,
      icon: '/img/icons/canada.png',
      title: 'Canada',
      delayAnim: '150',
    },
    {
      id: 5,
      icon: '/img/icons/canada.png',
      title: 'Australia',
      delayAnim: '200',
    },
    {
      id: 6,
      icon: '/img/icons/canada.png',
      title: 'Singapore',
      delayAnim: '250',
    },
    {
      id: 7,
      icon: '/img/icons/canada.png',
      title: 'Turkey',
      delayAnim: '300',
    },
    {
      id: 8,
      icon: '/img/icons/canada.png',
      title: 'Qatar',
      delayAnim: '350',
    },
  ];

  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div className='row w-75'>
        {blockContent.map((item) => (
          <div
            className='col-lg-3 col-md-6 mb-4 d-flex justify-content-start gy-5' // Center each column
            data-aos='fade'
            data-aos-delay={item.delayAnim}
            key={item.id}
          >
            <div className='d-flex gap-2 align-items-center'>
              <div className='d-flex justify-center'>
                <img src={item.icon} alt={`${item.title} flag`} className='' />
              </div>
              <h4 className='text-18 fw-500'>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
