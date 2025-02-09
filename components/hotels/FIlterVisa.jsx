import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const FilterVisa = () => {
  const [visaTypes, setVisaTypes] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await fetch(
          'https://travel.pritom.me/api/v1/frontend/visa-type/data/list'
        );
        const data = await response.json();
        setVisaTypes(data.data);
      } catch (error) {
        console.error('Error fetching visa types:', error);
      }
    };

    fetchVisaTypes();
  }, []);

  const fetchVisaDetails = async (slug) => {
    try {
      const response = await fetch(
        `https://travel.pritom.me/api/v1/frontend/visa-type/data/details/${slug}`
      );
      const data = await response.json();
      if (data.success) {
        setSelectedVisa(data.data);
        setIsPopupOpen(true);
      }
    } catch (error) {
      console.error('Error fetching visa details:', error);
    }
  };

  return (
    <>
      {visaTypes.slice(0, 4).map((item) => (
        <div
          className='col-xl-3 col-lg-3 col-sm-6'
          key={item?.id}
          data-aos='fade'
          onClick={() => fetchVisaDetails(item.slug)}
          style={{ cursor: 'pointer' }}
        >
          <div className='hotelsCard -type-1 hover-inside-slider'>
            <div className='hotelsCard__image'>
              <div className='cardImage ratio ratio-1:1'>
                <div className='cardImage__content'>
                  <Image
                    width={300}
                    height={300}
                    className='rounded-4 col-12 js-lazy'
                    src={item.image_path || '/placeholder.jpg'}
                    alt={item.name || 'Visa Image'}
                  />
                </div>
              </div>
            </div>

            <div className='cardImage__bottomBadgeVisa'>
              <div className='d-flex items-center bg-blue-1 px-10 py-1 rounded-5'>
                <div className='flex-center rounded-4 size-30 text-12 fw-600 text-white'>
                  visa
                </div>
                <div className='text-14 bg-white px-20 rounded-5 text-blue-1 ml-10'>
                  {item.name || 'Unknown Visa'}
                </div>
              </div>
            </div>
          </div>

          {/* Popup Modal */}
          {isPopupOpen && selectedVisa?.id === item.id && (
            <div
              className='popup-overlay'
              onClick={() => setIsPopupOpen(false)}
            >
              <div
                className='popup-content'
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className='close-btn'
                  onClick={() => setIsPopupOpen(false)}
                >
                  ×
                </button>

                <h3 className='popup-title'>{selectedVisa.name}</h3>

                <div className='popup-scroll'>
                  {selectedVisa.services.length > 0 ? (
                    selectedVisa.services.map((service, index) => (
                      <button
                        key={index}
                        className='country-btn'
                        onClick={() =>
                          router.push(
                            `/visa/${selectedVisa.id}?country=${service.country.id}`
                          )
                        }
                      >
                        {service.country.name}
                      </button>
                    ))
                  ) : (
                    <p className='no-country'>No countries available</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Popup Styles */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          text-align: center;
          position: relative;
          width: 90%;
          max-width: 400px;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: transparent;
          color: #333;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .popup-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        /* Scrollable Popup */
        .popup-scroll {
          max-height: 250px; /* Set max height */
          overflow-y: auto; /* Enable scrolling */
          padding: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Custom Scrollbar */
        .popup-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .popup-scroll::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 10px;
        }
        .popup-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .country-btn {
          background: #001a69;
          color: white;
          padding: 10px 16px;
          margin: 5px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
          transition: 0.3s ease;
        }

        .country-btn:hover {
          background: #0056b3;
        }

        .no-country {
          color: #666;
          font-size: 14px;
          margin-top: 10px;
        }

        @media (max-width: 600px) {
          .popup-content {
            width: 95%;
            padding: 15px;
          }

          .country-btn {
            font-size: 14px;
            padding: 8px 12px;
          }

          .popup-scroll {
            max-height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default FilterVisa;
