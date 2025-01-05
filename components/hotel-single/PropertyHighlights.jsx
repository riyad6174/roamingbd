const PropertyHighlights2 = () => {
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
    <div className='d-flex align-items-center justify-content-start gap-4 pt-30'>
      {highlightsContent.map((item) => (
        <div
          className='d-flex justify-content-center rounded-4 px-4 border gap-4 bg-green-1 align-items-center '
          key={item.id}
        >
          <div className='d-flex gap-4  align-items-center  py-4 px-5'>
            <i className={`${item.icon} text-24 text-blue-1`} />
            <div className='text-15 '>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
