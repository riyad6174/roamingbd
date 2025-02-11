import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const checklistData = [
  {
    title: 'Job Holder',
    requirements: [
      '07 Months Valid Passport With Old Passport (If have)',
      'Visiting card',
      'No objection certificate (NOC)',
      'Marriage certificate copy (If spouse name not mentioned in the passport)',
      'Summary of property, Bank statement, fixed deposit and other financial documents',
      'Personal bank solvency certificate',
      'Recent two (02) copy color photographs (35 mm X 45 mm, White background), not older than 03 months',
      'NID or birth certificate (must) one photo copy',
      'Pay slip documents',
      'Tax return copy of last 03 years',
      'Information of parents, spouse, child, siblings (Name, date of birth, current country of residence)',
      'Bank statement minimum 6 month',
    ],
  },
  {
    title: 'Businessman',
    requirements: [
      '07 Months Valid Passport With Old Passport (If have)',
      'Renewed trade license copy with notary public (English translated)',
      'Visiting card',
      'Marriage certificate copy (If spouse name not mentioned in the passport)',
      'Memorandum for limited company form-page (01) (One photo copy)',
      'Summary of property, Bank statement, fixed deposit and other financial documents',
      'Photocopy of share document',
      'Personal bank solvency certificate',
      'Recent two (02) copy color photographs (35 mm X 45 mm, White background), not older than 03 months',
      'Company letter head pad',
      'NID or birth certificate (must) one photo copy',
      'Tax return copy of last 03 years',
      'Information of parents, spouse, child, siblings (Name, date of birth, current country of residence)',
      'Bank statement minimum 6 month',
    ],
  },
  {
    title: 'Retired Person',
    requirements: [
      '07 Months Valid Passport With Old Passport (If have)',
      'Retirement document (Retired Person) one photo copy',
      'Marriage certificate copy (If spouse name not mentioned in the passport)',
      'Summary of property, Bank statement, fixed deposit and other financial documents',
      'Photocopy of share document',
      'Personal bank solvency certificate',
      'Recent two (02) copy color photographs (35 mm X 45 mm, White background), not older than 03 months',
      'NID or birth certificate (must) one photo copy',
      'Airline ticket reservation',
      'Tax return copy of last 03 years',
      'Information of parents, spouse, child, siblings (Name, date of birth, current country of residence)',
      'Bank statement minimum 6 month',
    ],
  },
  {
    title: 'Advocate / Lawyer',
    requirements: [
      '07 Months Valid Passport With Old Passport (If have)',
      'Visiting card',
      'No objection certificate (NOC)',
      'BAR council certificate (One photo copy)',
      'Marriage certificate copy (If spouse name not mentioned in the passport)',
      'Summary of property, Bank statement, fixed deposit and other financial documents',
      'Personal bank solvency certificate',
      'Recent two (02) copy color photographs (35 mm X 45 mm, White background), not older than 03 months',
      'NID or birth certificate (must) one photo copy',
      'Salary certificate',
      'All documents of financial solvency, Like: FDR, Share, Bonds or other securities, security deposit or cash investment',
      'Pay slip documents',
      'Information of parents, spouse, child, siblings (Name, date of birth, current country of residence)',
      'Bank statement minimum 6 month',
    ],
  },
];

function ChecklistInfo({ data }) {
  return (
    <div className='container my-5'>
      <h3 className='text-20 text-blue-1 fw-bold mb-10'>
        Checklist for required documents for Tourist Visa ({data?.country?.name}
        )
      </h3>
      <div className='card mb-20 px-20 d-flex flex-row align-items-center gap-3'>
        <GiCheckMark style={{ fontSize: '14px' }} />
        <p className='py-2'>
          Required Documents for Electronic Visa ( {data?.country?.name}
          ))
        </p>
      </div>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>
        {checklistData.map((item, index) => (
          <div className='col  ' key={index}>
            <div className='p-3 shadow-lg  border border-secondary h-100'>
              <div>
                <div className='d-flex '>
                  <h5
                    className='px-2 py-1'
                    style={{
                      color: '#05939F',
                      backgroundColor: 'rgb(238, 251, 252) ',
                      border: '1px solid #05939F ,',
                      borderRadius: '5px',
                    }}
                  >
                    {item.title}
                  </h5>
                </div>
                <ul className='list-disc mt-3'>
                  {item.requirements.map((requirement, idx) => (
                    <li
                      key={idx}
                      className='mb-2 gap-2 text-14 d-flex align-items-start'
                    >
                      {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-dot'
                        viewBox='0 0 16 16'
                      >
                        <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
                      </svg> */}
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChecklistInfo;
