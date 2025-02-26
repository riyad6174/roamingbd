import Slider from 'react-slick';

const PoularDestinations = () => {
  const flights = [
    { route: 'Dhaka → Delhi', airline: 'Air India', price: 'BDT 14,433' },
    { route: 'Dhaka → Cox’s', airline: 'Air India', price: 'BDT 14,433' },
    { route: 'Dhaka → USA', airline: 'Air India', price: 'BDT 14,433' },
    { route: 'Dhaka → Chicago', airline: 'Air India', price: 'BDT 14,433' },
    { route: 'Dhaka → Chicago', airline: 'Air India', price: 'BDT 14,433' },
    { route: 'Dhaka → Chicago', airline: 'Air India', price: 'BDT 14,433' },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {flights.map((item, index) => (
        <div key={index} className='pt-10 px-2 col-md-3 col-sm-6 mb-3'>
          <div className='flight-card  '>
            <div className='flight-info '>
              <div className='d-flex items-center justify-start gap-4'>
                <img src='/img/icons/biman.png' className='' />
                <span>
                  {' '}
                  <h5>{item.route}</h5>
                  <p>{item.airline}</p>
                </span>
              </div>

              <span className='flight-price'>
                Starts from <br /> <strong>{item.price}</strong>
              </span>
            </div>
            <div className='flight-icon'>✈️</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PoularDestinations;
