import Social from '../../common/social/Social';

const Copyright = () => {
  return (
    <div className='row justify-center items-center y-gap-10'>
      <div className='col-auto'>
        <div className='row x-gap-30 y-gap-10'>
          <div className='col-auto'>
            <div className='d-flex items-center'>
              Copyright © {new Date().getFullYear()} by
              <a
                href='https://themeforest.net/user/ib-themes'
                className='mx-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                Roaming BD.
              </a>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}

          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      {/* End .col */}
    </div>
  );
};

export default Copyright;
