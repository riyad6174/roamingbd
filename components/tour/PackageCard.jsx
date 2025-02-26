import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { openLogin } from '../../features/modal/modalSlice';

// Function to strip HTML tags and return plain text
const stripHtml = (html) => {
  if (typeof document !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return html;
};

// Function to slice text and add "..."
const truncateText = (text, maxLength = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const PackageCard = ({ packages }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNavigation = (url) => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectTo', url);
      dispatch(openLogin()); // Open login popup if no token
    } else {
      router.push(url); // Redirect if authenticated
    }
  };

  return (
    <>
      {packages.map((item, index) => {
        // Strip HTML and truncate description
        const plainTextDescription = truncateText(
          stripHtml(item.description || 'No Description'),
          200
        );

        return (
          <div
            key={index}
            className='card travel-card rounded-4 border-0 shadow mb-3'
          >
            <div className='row g-0'>
              {/* Image Section */}
              <div className='col-md-4'>
                <div className='position-relative h-100'>
                  <img
                    src={item.image_path}
                    alt={item.title}
                    className='img-fluid rounded h-100 w-100'
                  />
                  <div className='overlay-info position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3 text-white'>
                    <span className='badge bg-dark text-uppercase'>
                      {item?.tour_duration} Day
                    </span>
                    <div>
                      <p className='mb-0 fw-bold'>
                        Price starts from (per person)
                      </p>
                      <h5 className='fw-bold'>BDT {item?.price}/-</h5>
                      <p className='small'>{item.title}</p>
                      <p className='small'>
                        <i className='bi bi-geo-alt-fill'></i> {item?.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='col-md-8'>
                <div className='p-4'>
                  {/* Title - Redirect if logged in, else show login */}
                  <Link
                    href={`/package/tour-package-single/${item.slug}`}
                    className='fw-bold fs-4 mb-0 text-primary cursor-pointer'
                    style={{ cursor: 'pointer' }}
                  >
                    {item.name}
                  </Link>
                  <p className='text-muted mt-2'>
                    <i className='bi bi-geo-alt'></i> {item.location}
                  </p>
                  <div className='row'>
                    <div className='d-flex align-items-start gap-2 justify-content-start'>
                      <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                        {item?.no_person} Person
                      </div>
                      <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                        {item?.tour_duration} Days
                      </div>
                      <div className='px-10 py-1 border fw-bold text-12 text-muted rounded'>
                        {item?.is_air_fair === 1 ? (
                          <span className='text-success'>Fair Included</span>
                        ) : (
                          <span className='text-danger'>Fair Not Included</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='d-flex flex-column flex-md-row  gap-md-3 justify-content-between align-items-md-center mt-4'>
                    <div>
                      <h6 className='fw-bold mt-4'>Description:</h6>
                      <p
                        className='small text-muted py-4 description-truncate'
                        dangerouslySetInnerHTML={{
                          __html: plainTextDescription,
                        }}
                      ></p>
                    </div>
                    <div className='d-flex flex-column gap-3 justify-content-start align-items-start mt-4'>
                      <div>
                        <p className='small mb-0'>
                          Price starts from (per person)
                        </p>
                        <h4 className='fw-bold'>BDT {item.price}/-</h4>
                      </div>
                      {/* Booking Button - Requires Login */}
                      <button
                        className='btn btn-primary btn-sm rounded-0 px-10 py-2'
                        onClick={() =>
                          handleNavigation(
                            `/package/package-booking/${item.slug}`
                          )
                        }
                      >
                        Select Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PackageCard;
