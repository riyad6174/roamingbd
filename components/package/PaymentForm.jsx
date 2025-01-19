import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function PaymentForm() {
  const [itemsTabs, setItemsTabs] = useState(1);
  const cardTabs = [
    { id: 1, name: 'Credit/Debit Card' },
    { id: 2, name: 'Digital Payment' },
  ];

  return (
    <div className='mt-40 bg-white px-10 py-10 rounded-4'>
      <h3 className='text-22 fw-500 mb-20'>How do you want to pay?</h3>
      <Tabs>
        <TabList className='row y-gap-20 x-gap-20'>
          {cardTabs.map((item) => (
            <Tab
              className='col-auto'
              onClick={() => setItemsTabs(item.id)}
              key={item.id}
            >
              <button
                className={
                  itemsTabs === item.id
                    ? 'button -dark-1 bg-blue-1 text-white px-20 py-15'
                    : 'button -blue-1 bg-light-2 px-20 py-15'
                }
              >
                {item.name}
              </button>
            </Tab>
          ))}
        </TabList>
        {/* End tablist */}

        <TabPanel>
          <div className='row x-gap-20 y-gap-20 pt-20'>
            <div className='col-12'>
              <div className='form-input '>
                <input type='text' required />
                <label className='lh-1 text-16 text-light-1'>
                  Select payment method *
                </label>
              </div>
            </div>
            {/* End col */}

            <div className='col-md-6'>
              <div className='form-input '>
                <input type='text' required />
                <label className='lh-1 text-16 text-light-1'>
                  Card holder name *
                </label>
              </div>

              <div className='form-input mt-20'>
                <input type='text' required />
                <label className='lh-1 text-16 text-light-1'>
                  Credit/debit card number *
                </label>
              </div>

              <div className='row x-gap-20 y-gap-20 pt-20'>
                <div className='col-md-6'>
                  <div className='form-input '>
                    <input type='text' required />
                    <label className='lh-1 text-16 text-light-1'>
                      Expiry date *
                    </label>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-input '>
                    <input type='text' required />
                    <label className='lh-1 text-16 text-light-1'>
                      CVC/CVV *
                    </label>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col */}
            <div className='col-md-6'>
              <img
                src='/img/booking-pages/card.png'
                alt='image'
                className='h-full'
              />
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </TabPanel>
        {/* credit debit info */}

        <TabPanel>
          <div className='mt-60 md:mt-32'>
            <div className='mt-20'>
              <div className='form-input '>
                <input type='text' required />
                <label className='lh-1 text-16 text-light-1'>
                  Select payment method *
                </label>
              </div>
            </div>
            <div className='mt-20'>
              <ul className='list-disc y-gap-4 text-15 text-light-1'>
                <li>
                  You have chosen to pay by PayPal. You will be forwarded to the
                  PayPal website to proceed with this transaction.
                </li>
                <li>The total amount you will be charged is: $2,338.01</li>
              </ul>
            </div>
          </div>
          {/* End mt60 */}
        </TabPanel>
        {/* End digital payment */}
      </Tabs>
    </div>
  );
}

export default PaymentForm;
