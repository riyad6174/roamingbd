const HeaderSearch = () => {
  return (
    <div className='single-field bg-white rounded relative d-flex items-center xl:d-none mr-20'>
      <input
        className='pl-50 border-light text-blue-1 h-40 rounded-8'
        type='text'
        required
        placeholder='Destination, attraction, hotel, etc'
      />
      <button
        type='submit'
        className='absolute bg-blue-1   d-flex items-center h-full'
      >
        <i className='icon-search text-20 px-15 text-white' />
      </button>
    </div>
  );
};

export default HeaderSearch;
