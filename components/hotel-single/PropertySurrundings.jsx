const PropertySurrundings = () => {
  const highlightsContent = [
    {
      id: 1,
      icon: 'icon-city',
      text: `In London City Centre`,
    },
    {
      id: 2,
      icon: 'icon-airplane',
      text: `Airport transfer`,
    },
    {
      id: 3,
      icon: 'icon-bell-ring',
      text: `Front desk [24-hour]`,
    },
    {
      id: 4,
      icon: 'icon-tv',
      text: `Premium TV channels`,
    },
  ];

  return (
    <div className='px-30 py-20 border-light rounded-4 mt-20'>
      <div className='text-18 fw-500 pb-20'>Surroundings</div>

      {highlightsContent.map((item) => (
        <div className='row  x-gap-10 y-gap-10' key={item.id}>
          <div className='col-auto'>
            <i className={`${item.icon} text-18 text-blue-1`} />
          </div>
          <div className='col-auto'>
            <div className='text-15 '>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertySurrundings;
