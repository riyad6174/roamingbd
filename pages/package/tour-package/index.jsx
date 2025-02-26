import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header3 from '../../../components/header/header-3';
import Hero3 from '../../../components/hero/hero-3';
import Footer7 from '../../../components/footer/footer-7';
import SearchBoxContent from '../../../components/hero/hero-9/SearchBoxContent';
import Copyright from '../../../components/footer/footer-7/Copyright';
import Seo from '../../../components/common/Seo';
import PackageCard from '../../../components/tour/PackageCard';
import PackageCardUmrah from '../../../components/tour/PackageCardUmrah';
import { baseUrl } from '../../../utils/network';

const Home3 = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/frontend/package-category/data/list-with-package`
        );
        const data = await response.json();
        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error('Error fetching package categories:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <>
      <Seo pageTitle='Home-3' />
      <Header3 />
      <Hero3 />

      <div
        className='offcanvas offcanvas-top vh-100'
        tabIndex={-1}
        id='offcanvasTop2'
        aria-labelledby='offcanvasTopLabel'
        style={{ zIndex: 1200 }}
      >
        <div className='offcanvas-header position-absolute top-0 end-0'>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          />
        </div>
        <SearchBoxContent />
      </div>

      {categories.map((category, index) => (
        <section className='layout-pt-md layout-pb-lg' key={category.id}>
          <div className='container'>
            <div className='row'>
              <div className='col-auto'>
                <div className='sectionTitle -md'>
                  <h2 className='sectionTitle__title'>{category.name}</h2>
                </div>
              </div>
            </div>

            <div className='md-row y-gap-30 pt-40'>
              {index % 2 === 0 ? (
                <PackageCard packages={category.packages} />
              ) : (
                <PackageCardUmrah packages={category.packages} />
              )}
            </div>
          </div>
        </section>
      ))}

      <Footer7 />
      <div className='py-20 bg-blue-1 text-white text-center'>
        <Copyright />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home3), { ssr: false });
