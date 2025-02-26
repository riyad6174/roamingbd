const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: '/img/icons/biman.png',
      title: 'Biman Bangladesh',
      delayAnim: '0',
    },
    {
      id: 2,
      icon: '/img/icons/us-bangla.png',
      title: 'US-Bangla Airlines',
      delayAnim: '50',
    },
    {
      id: 3,
      icon: '/img/icons/novo.png',
      title: 'NOVOAIR',
      delayAnim: '100',
    },
    {
      id: 4,
      icon: '/img/icons/astra.png',
      title: 'Air Astra',
      delayAnim: '150',
    },
    {
      id: 5,
      icon: '/img/icons/emirates.png',
      title: 'Emirates',
      delayAnim: '200',
    },
    {
      id: 6,
      icon: '/img/icons/singapore.png',
      title: 'Singapore Airlines',
      delayAnim: '250',
    },
    {
      id: 7,
      icon: '/img/icons/turkish.png',
      title: 'Turkish Airlines',
      delayAnim: '300',
    },
    {
      id: 8,
      icon: '/img/icons/qatar.png',
      title: 'Qatar Airways',
      delayAnim: '300',
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className='col-lg-3 col-6 gap-4 '
          data-aos='fade'
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className='d-flex gap-2 align-items-center '>
            <div className='d-flex justify-center'>
              <img src={item.icon} alt='image' className='size-30' />
            </div>
            <h4 className='text-14  fw-500'>{item.title}</h4>
            <div className='ml-15'>
              {/* <p className="text-15 mt-10">{item.text}</p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
