import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';
import { baseUrl } from '../../utils/network';

const CustomerInfo = ({ onFormSubmit, isSubmitting }) => {
  const router = useRouter();

  // Function to create a new passenger object
  const createCustomerObject = () => ({
    GivenName: '',
    Surname: '',
    Gender: 'M',
    PassengerType: 'ADT',
    Phone: '',
    Email: '',
    DateOfBirth: '',
    Service: '', // Additional field for service info
    LocationCode: router.query.originLocation || '', // Set from parent query
    Document: {
      Number: '', // Passport Number
      ExpirationDate: '', // Passport Expiry Date
      Type: 'P', // Default Document Type = Passport
      IssueCountry: '',
      NationalityCountry: '',
    },
  });

  const [customers, setCustomers] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch countries list for dropdown
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${baseUrl}/frontend/country/list`);
        const data = await response.json();
        if (data.success) {
          const options = data.data.map((country) => ({
            value: country.code,
            label: country.name,
            image: country.image_path,
          }));
          setCountries(options);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Initialize passengers based on total passengers (adult + child)
  useEffect(() => {
    if (!router.isReady) return;

    const totalPassengers =
      parseInt(router.query.adultRequest || 0, 10) +
      parseInt(router.query.childRequest || 0, 10);

    setCustomers(
      Array.from({ length: totalPassengers }, () => createCustomerObject())
    );
  }, [router.isReady, router.query]);

  const handleCustomerChange = (index, field, value) => {
    const updatedCustomers = [...customers];
    const customer = { ...updatedCustomers[index] };

    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      customer[parent] = { ...customer[parent], [child]: value };
    } else {
      customer[field] = value;
    }

    updatedCustomers[index] = customer;
    setCustomers(updatedCustomers);
  };

  // Validate form before submission
  const validateForm = () => {
    return customers.every(
      (c) =>
        c.GivenName &&
        c.Surname &&
        c.Gender &&
        c.PassengerType &&
        // c.LocationCode &&
        c.Phone &&
        c.Email &&
        c.DateOfBirth &&
        c.Service &&
        c.Document.Number &&
        c.Document.ExpirationDate &&
        c.Document.IssueCountry &&
        c.Document.NationalityCountry
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill all required fields.');
      return;
    }

    onFormSubmit(customers);
  };

  const formatOptionLabel = ({ value, label, image }) => (
    <div className='d-flex align-items-center gap-2 w-100'>
      <img src={image} alt={value} style={{ width: '25px' }} />
      <span>
        {label} ({value})
      </span>
    </div>
  );

  return (
    <div className='col-xl-12 col-lg-12 mt-30'>
      <h2 className='text-22 fw-500 mt-40 md:mt-24'>
        Please Share Passengers Info
      </h2>

      <form onSubmit={handleSubmit}>
        {customers.map((customer, index) => (
          <div key={index} className='bg-light-2 p-4 rounded-4 mb-4'>
            <h3 className='text-18 fw-500 mb-3'>Passenger {index + 1}</h3>

            <div className='row x-gap-20 y-gap-20'>
              <div className='col-md-6'>
                <label>Given Name</label>
                <input
                  type='text'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.GivenName}
                  onChange={(e) =>
                    handleCustomerChange(index, 'GivenName', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Surname</label>
                <input
                  type='text'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.Surname}
                  onChange={(e) =>
                    handleCustomerChange(index, 'Surname', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Gender</label>
                <select
                  value={customer.Gender}
                  className='border bg-white py-10 rounded'
                  onChange={(e) =>
                    handleCustomerChange(index, 'Gender', e.target.value)
                  }
                  required
                >
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='O'>Other</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label>Date Of Birth</label>
                <input
                  type='date'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.DateOfBirth}
                  onChange={(e) =>
                    handleCustomerChange(index, 'DateOfBirth', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Phone Number</label>
                <input
                  type='tel'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.Phone}
                  onChange={(e) =>
                    handleCustomerChange(index, 'Phone', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Email</label>
                <input
                  type='email'
                  className='border bg-white py-10 rounded'
                  required
                  value={customer.Email}
                  onChange={(e) =>
                    handleCustomerChange(index, 'Email', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Service</label>
                <input
                  type='text'
                  className='border bg-white py-10 rounded'
                  required
                  value={customer.Service}
                  onChange={(e) =>
                    handleCustomerChange(index, 'Service', e.target.value)
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Passport Number</label>
                <input
                  type='text'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.Document.Number}
                  onChange={(e) =>
                    handleCustomerChange(
                      index,
                      'Document.Number',
                      e.target.value
                    )
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Expiration Date</label>
                <input
                  type='date'
                  required
                  className='border bg-white py-10 rounded'
                  value={customer.Document.ExpirationDate}
                  onChange={(e) =>
                    handleCustomerChange(
                      index,
                      'Document.ExpirationDate',
                      e.target.value
                    )
                  }
                />
              </div>

              <div className='col-md-6'>
                <label>Issue Country</label>
                <Select
                  required
                  options={countries}
                  className='py-10 rounded'
                  value={countries.find(
                    (c) => c.value === customer.Document.IssueCountry
                  )}
                  onChange={(selected) =>
                    handleCustomerChange(
                      index,
                      'Document.IssueCountry',
                      selected?.value
                    )
                  }
                  formatOptionLabel={formatOptionLabel}
                  placeholder='Select Issue Country '
                />
              </div>

              <div className='col-md-6'>
                <label>Nationality Country</label>
                <Select
                  required
                  options={countries}
                  className='py-10 rounded'
                  value={countries.find(
                    (c) => c.value === customer.Document.NationalityCountry
                  )}
                  onChange={(selected) =>
                    handleCustomerChange(
                      index,
                      'Document.NationalityCountry',
                      selected?.value
                    )
                  }
                  formatOptionLabel={formatOptionLabel}
                  placeholder='Select Nationality Country'
                />
              </div>
            </div>
          </div>
        ))}

        <div className='text-center mt-4'>
          <button
            type='submit'
            className='btn btn-dark rounded-0'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Confirm & Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
