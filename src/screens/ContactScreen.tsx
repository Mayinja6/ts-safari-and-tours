import { useNavigate } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import Divider_ from '../components/Divider';

import useWebInfo from '../hooks/useWebStore';

export default function ContactScreen() {
  const { address_, contact_, email_, socialMedia_ } = useWebInfo();
  const navigate = useNavigate();
  return (
    <section>
      <Breadcrumb title='Contact Us' />
      <div className='tsat__space flex flex-wrap gap-12 md:gap-8 my-10'>
        <div className='relative w-full md:w-[calc(50%-32px)] md:px-4'>
          <div className='mb-[50px] flex items-center flex-col justify-center sm:justify-start text-center sm:text-left'>
            <aside className='tsat__subtitle'>GET IN TOUCH</aside>
            <div className='flex items-center flex-wrap my-4'>
              <h2 className='tsat__title leading-[1.1em] font-black mb-4'>
                CONTACT US TO GET MORE INFO
              </h2>
              <div className='w-full flex items-center justify-center mt-5'>
                <Divider_ />
              </div>
              <p className='text-[14px] text-[#383838]'>
                Don't hesitate to contact us with any questions. We can't wait
                to help you plan the trip of a lifetime.
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/coming-soon');
            }}
            className='relative'
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name*'
              className='w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary transition-colors duration-200'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email*'
              className='w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary transition-colors duration-200'
            />
            <textarea
              rows={5}
              placeholder='Your Message*'
              className='w-full outline-none border px-[10px] border-[#d9d9d9] my-2 py-3  focus:border-primary transition-colors duration-200'
            ></textarea>
            <button className='tsat__btn py-4' type='submit'>
              SUBMIT MESSAGE
            </button>
          </form>
        </div>

        <div className='relative w-full md:w-[calc(50%-32px)] md:px-4'>
          <h3 className='font-semibold text-[23px] mb-[15px]'>
            Need help ?? Feel free to contact us !
          </h3>
          <p className='mb-4 text-[14px] text-[#383838]'>
            Our experienced travel agents will work with you to create a
            customized itinerary that meets all of your travel needs and
            preferences. And with our wide range of tour options, you're sure to
            find something that fits your budget and interests.
          </p>
          <p className='mb-4 text-[14px] text-[#383838]'>
            So why wait? Start planning your dream vacation today! Simply browse
            through our website to see all of the amazing tours we offer, and
            don't hesitate to contact us with any questions. We can't wait to
            help you plan the trip of a lifetime.{' '}
          </p>
          <ul className='relative text-[14px] my-12 m-0 mx-0'>
            <li className='list-none relative flex mb-5'>
              <span className='bg-accent text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center'>
                <i className='icon-map font-black'></i>
              </span>
              <div className='w-[calc(100%-60px)] pl-5'>
                <h4 className='mb-2 font-bold'>Location Address</h4>
                <span className='text-[13px] block leading-[1.1]'>
                  {`${address_.zipCode} ${address_.address},
            ${address_.state}`}
                </span>
              </div>
            </li>
            <li className='list-none relative flex mb-5'>
              <span className='bg-accent text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center'>
                <i className='icon-envelope font-black'></i>
              </span>
              <div className='w-[calc(100%-60px)] pl-5'>
                <h4 className='mb-2 font-bold'>Email Address</h4>
                <span className='text-[13px] block leading-[1.1] link__hover'>
                  {email_}
                </span>
              </div>
            </li>
            <li className='list-none relative flex mb-5'>
              <span className='bg-accent text-white text-[25px] h-[60px]  w-[60px] flex items-center justify-center'>
                <i className='icon-phone font-black'></i>
              </span>
              <div className='w-[calc(100%-60px)] pl-5'>
                <h4 className='mb-2 font-bold'>Phone Number</h4>
                <span className='text-[13px] block leading-[1.3]'>
                  Telephone: {contact_}
                  <br /> Mobile: {contact_}
                </span>
              </div>
            </li>
          </ul>
          <div>
            <h3 className='font-semibold text-[23px] mb-[15px]'>
              Follow us on social media..
            </h3>
            <div className='flex gap-3'>
              {socialMedia_.map((social) => (
                <a
                  target='_blank'
                  key={social.id}
                  title={social.id}
                  href={social.link}
                  rel='noopener noreferrer'
                  className='text-primary border border-accent text-[20px] text-center h-10 w-10 flex items-center justify-center link__hover hover:bg-primary hover:text-white hover:border-primary'
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
