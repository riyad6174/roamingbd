import React from 'react';

function CountryInformation({ countryInfo }) {
  // Sample country data (this would typically come from your API)
  const country = {
    id: 4,
    name: 'BD',
    capital: 'Dhaka',
    language: null,
    largest_city: 'Dhaka',
    religion: 'hdnsmd',
    population: '1200',
    phone_code: '+880',
    time_zone: 'GMT',
    image_path:
      'https://travel.pritom.me/upload/visa/visa-country-bd-1738767325.jpg',
  };

  // Define the fields you want to display along with their title labels.
  //   const infoItems = [
  //     { title: 'Country Name', value: country.name },
  //     { title: 'Capital', value: country.capital },
  //     { title: 'Largest City', value: country.largest_city },
  //     { title: 'Religion', value: country.religion },
  //     { title: 'Population', value: country.population },
  //     { title: 'Phone Code', value: country.phone_code },
  //     { title: 'Time Zone', value: country.time_zone },
  //   ];

  return (
    <div className='container text-15 text-muted my-5'>
      <h3 className='text-20 fw-bold mb-10 text-blue-1'>Country Info</h3>
      <div className='row row-cols-md-2 g-4'>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Country Name</h5>
              <p className='card-text text-16'>{countryInfo?.name}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Capital</h5>
              <p className='card-text text-16'>{countryInfo?.capital}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Largest City</h5>
              <p className='card-text text-16'>{countryInfo?.largest_city}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Population</h5>
              <p className='card-text text-16'>{countryInfo?.population}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Phone Code</h5>
              <p className='card-text text-16'>{countryInfo?.phone_code}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Time Zone</h5>
              <p className='card-text text-16'>{countryInfo?.time_zone}</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100'>
            <div className='card-body '>
              <h5 className='card-title text-16'>Religion</h5>
              <p className='card-text text-16'>{countryInfo?.religion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInformation;
