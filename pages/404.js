import dynamic from 'next/dynamic';
import CallToActions from '../components/common/CallToActions';
import Seo from '../components/common/Seo';
import DefaultHeader from '../components/header/default-header';
import DefaultFooter from '../components/footer/default';
import NotFound from '../components/common/NotFound';
import Header3 from '../components/header/header-3';
import Footer7 from '../components/footer/footer-7';

const index = () => {
  return (
    <>
      <Seo pageTitle='404' />
      {/* End Page Title */}

      <div className='header-margin'></div>
      {/* header top margin */}

      <Header3 />

      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      {/* End Call To Actions Section */}

      <Footer7 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
