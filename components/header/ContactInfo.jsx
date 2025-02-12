const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: 'Customer Care',
      action: 'tel:+(1) 123 456 7890',
      text: '+(1) 123 456 7890',
    },
    {
      id: 2,
      title: 'Need live support?',
      action: 'mailto:xyz@abc.com',
      text: 'hi@roamingbd.com',
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className='mb-20' key={item.id}>
          <div className={'text-14'}>{item.title}</div>
          <a href={item.action} className='text-18 fw-500 text-dark-1 mt-5'>
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
