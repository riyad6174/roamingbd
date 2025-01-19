const PackageCard = () => {
  const slightContent = [
    {
      id: 1,
      img: '/img/package/umrah.png',
      title: 'Hajj Al-Ifrad (Main Hajj) Package',
      text: `Learn about British history at the Tower of London, a medieval
              castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: '100',
    },
    {
      id: 2,
      img: '/img/package/umrah.png',
      title: 'Hajj Al-Ifrad (Main Hajj) Package',
      text: `Learn about British history at the Tower of London, a medieval
              castle that was first built in 1066 by William the Conqueror.`,
      delayAnimation: '100',
    },
  ];

  return (
    <div className='row p-4'>
      {slightContent.map((item, index) => (
        <div
          key={index}
          className='col-md-6 p-2 card package-card rounded-4 border-0 '
        >
          {/* Image Section */}
          <div className='position-relative  rounded-4'>
            <img
              src={item.img}
              alt={item.title}
              className='img-fluid rounded-4 h-100 w-100'
            />
            <div className='overlay-info position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 text-white'>
              <div className='text-white'>
                <p className='mb-0 fw-bold'>Price starts from (per person)</p>
                <h5 className='fw-bold'>BDT 13,500</h5>
                <p className='small fw-bold'>{item.title}</p>
                <p className='small'>
                  <i className='bi bi-geo-alt-fill'></i> 40
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
