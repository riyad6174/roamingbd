import dynamic from 'next/dynamic';
import CallToActions from '../components/common/CallToActions';
import Seo from '../components/common/Seo';
import DefaultHeader from '../components/header/default-header';
import DefaultFooter from '../components/footer/default';
import LoginWithSocial from '../components/common/LoginWithSocial';
import SignUpForm from '../components/common/SignUpForm';
import Header1 from '../components/header/header-3';
import Footer7 from '../components/footer/footer-7';

const SignUp = () => {
  return (
    <>
      <Seo pageTitle='Sign Up' />
      {/* End Page Title */}

      <div className='header-margin'></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <section className='layout-pt-lg layout-pb-lg bg-blue-2'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-xl-6 col-lg-7 col-md-9'>
              <div className='px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4'>
                <SignUpForm />
                {/* End SignUP */}

                <div className='row y-gap-20 pt-30'>
                  <div className='col-12'>
                    <div className='text-center'>or sign in with</div>
                  </div>
                  <LoginWithSocial />
                  <div className='col-12'>
                    <div className='text-center px-30'>
                      By creating an account, you agree to our Terms of Service
                      and Privacy Statement.
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <Footer7 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(SignUp), { ssr: false });
