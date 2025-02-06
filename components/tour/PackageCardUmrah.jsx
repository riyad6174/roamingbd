import Link from 'next/link';

const PackageCard = ({ packages }) => {
  return (
    <div className='row p-4'>
      {packages.map((item, index) => (
        <div
          key={index}
          className='col-md-6 p-2 card package-card rounded-4 border-0 '
        >
          {/* Image Section */}
          <Link
            href={`/package/tour-package-single/${item.slug}`}
            className='position-relative  rounded-4'
          >
            <img
              src={item.image_path}
              alt={item.name}
              className='img-fluid rounded-4 h-100 w-100'
            />
            <div className='overlay-info position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 text-white'>
              <div className='text-white'>
                <p className='mb-0 fw-bold small'>
                  Price starts from (per person)
                </p>
                <h5 className='fw-bold'>BDT {item.price}/-</h5>
                <p className='small fw-bold'>{item.name}</p>
                <p className='small'>
                  <i className='bi bi-geo-alt-fill'></i> {item.tour_duration}{' '}
                  Days
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
