import FilterBox from './filter-box';

const SidebarPackageBookingCard = () => {
  return (
    <div className='container my-5'>
      <div class='card'>
        <img src='/img/hotels/bkk.png' class='card-img-top' alt='...' />
        <div class='card-body'>
          <h5 class='card-title text-16'>Roaming BD Travel Agency</h5>
          <p class='text-18'>
            15% Off on All-Inclusive Vacation <br /> Packages
          </p>
          <div className='d-flex py-10  align-items-center justify-content-between'>
            <a
              href='#'
              class='btn mr-2 btn-light flex align-items-center gap-4 justify-content-between  '
            >
              <span className='fw-bold text-14 border-dotted'>WANDER15</span>
              <span>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-copy'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'
                  />
                </svg>
              </span>
            </a>
            <a href='#' class='btn btn-light '>
              <i class='fab fa-github'></i> Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPackageBookingCard;
