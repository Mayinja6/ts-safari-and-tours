import { Link, useNavigate } from 'react-router-dom';

import Members from '../components/Members';
import Divider_ from '../components/Divider';
import Activities from '../components/Activities';
import SingleTour from '../components/SingleTour';
import Newsletter from '../components/Newsletter';

import useWebInfo from '../hooks/useWebStore';

import hero_banner from '../assets/images/hero.webp';
import BannerPattern from '../assets/images/bg_pattern.webp';
import bgImage from '../assets/images/newsletter.webp';
import about2 from '../assets/images/about/2.webp';
import about3 from '../assets/images/about/1.webp';

export default function HomeScreen() {
  const { tours_ } = useWebInfo();
  const navigate = useNavigate();

  return (
    <main className='relative'>
      <section
        className='w-full tsat__space py-[200px] md:py-[230px] text-center relative bg-no-repeat bg-cover bg-center md:bg-right bg-fixed day_overlay_before'
        style={{
          backgroundImage: `url(${hero_banner})`,
        }}
      >
        <div className='relative text-base-100'>
          <h2 className='text-[32px] sm:text-[45px] md:text-[50px] lg:text-[82px] font-black leading-[1.2] text-base-100 mb-10 lg:mb-[30px] uppercase'>
            EXPERIENCE THE NATURE'S BEAUTY
          </h2>
          <p className='mb-[45px] lg:mb-8 text-base-100 text-[14px] sm:w-3/4 mx-auto'>
            Welcome to our tour agency website! Whether you're looking to
            explore the stunning beaches of Thailand, discover the rich history
            of Europe, or embark on an African safari, we have a tour for you.
          </p>
          <Link to='/tours' className='uppercase tsat__btn text-[14px] py-4'>
            Explore DESTINATIONS
          </Link>
        </div>
      </section>

      <section className='relative pb-24'>
        <div
          className={`h-[144px] -mt-[70px] w-full bg-cover bg-no-repeat content-['']`}
          style={{ backgroundImage: `url(${BannerPattern})` }}
        ></div>
        <div className='tsat__space -mt-[210px] lg:-mt-[160px]'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('coming-soon');
            }}
            className='bg-base-100 p-5 lg:p-10 flex flex-wrap items-end'
          >
            <div className='p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative'>
              <label htmlFor='destination' className='block text-[14px] mb-2'>
                Search Destination*
              </label>
              <input
                type='text'
                id='destination'
                name='destination'
                placeholder='Enter Destination'
                className='rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none'
              />
            </div>
            <div className='p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative'>
              <label htmlFor='pay-number' className='block text-[14px] mb-2'>
                People Count*
              </label>
              <input
                type='text'
                id='pay-number'
                name='pay-number'
                className='rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none'
                placeholder='No.of People'
              />
            </div>
            <div className='p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative'>
              <label htmlFor='checkin-date' className='block text-[14px] mb-2'>
                Check In Date*
              </label>
              <input
                type='date'
                id='checkin-date'
                name='checkin-date'
                className='rounded-[2px] w-full bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none'
              />
            </div>
            <div className='p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative'>
              <label htmlFor='checkout-date' className='block text-[14px] mb-2'>
                Checkout Date*
              </label>
              <input
                type='date'
                id='checkout-date'
                name='checkout-date'
                className='rounded-[2px] bg-[#F1F1F1] px-2 py-3 text-[14px] focus:outline-none w-full'
              />
            </div>
            <div className='p-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 relative'>
              <input
                type='submit'
                className='tsat__btn py-4 w-full'
                value='INQUIRE NOW'
              />
            </div>
          </form>
        </div>
      </section>

      <section className='tsat__space'>
        <div className='flex items-center justify-center text-center flex-col'>
          <aside className='tsat__subtitle'>POPULAR DESTINATIONS</aside>
          <h2 className='tsat__title font-black'>TOP NOTCH DESTINATIONS</h2>
          <Divider_ />
        </div>

        <div className='my-12 relative flex items-center justify-evenly flex-wrap gap-x-2'>
          {[...tours_].slice(0, 4).map((tour) => (
            <SingleTour key={tour.id} {...tour} />
          ))}
        </div>
        {tours_.length > 4 && (
          <div className='mb-20 mt-10 flex justify-center'>
            <Link to='/tours'>
              <button className='tsat__btn py-4'>MORE DESTINATIONS</button>
            </Link>
          </div>
        )}
      </section>

      <section className=' tsat__space pb-10'>
        <div className='flex items-start flex-wrap pt-[70px]'>
          <div className='w-full mx-auto md:w-3/4 lg:w-1/2'>
            <div className='px-4 md:flex md:flex-wrap relative'>
              <div className='mx-auto w-full sm:w-[70%] md:w-[42%] relative'>
                <div className='bg-secondary border-[8px] border-base-100 flex items-center md:ml-[30px] md:mt-8 justify-center flex-col relative z-[1] py-6 sm:py-[45px] px-3 sm:px-5  w-[85%] sm:w-auto mx-auto'>
                  <h3 className='text-[20px] sm:text-[24px] text-center sm:text-left font-bold leading-[1.1] text-base-100 mb-5'>
                    Something you want to know about us !!
                  </h3>
                  <span title='About Us' className='tsat__btn py-3'>
                    Learn More
                  </span>
                </div>
                <div className='relative -mt-10 sm:-mt-20'>
                  <img
                    loading='lazy'
                    src={about3}
                    className='max-w-full  mx-auto w-full'
                    alt='About_img'
                  />
                </div>
              </div>
              <div className='border-[8px] border-base-100 relative mx-auto md:flex my-5 md:my-0 w-full sm:w-[70%] md:w-[58%]'>
                <div>
                  <img
                    loading='lazy'
                    src={about2}
                    className='w-full h-auto max-w-full'
                    alt='About_Img'
                  />
                </div>
              </div>
              <div>
                <div className=' border-[8px] border-base-100 relative mx-auto md:flex md:ml-[30%] md:-mt-[340px] w-full sm:w-[70%] mt-5'>
                  <img
                    loading='lazy'
                    src={bgImage}
                    className='w-full h-auto max-w-full'
                    alt='About_Img'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 sm:px-4 mt-10 lg:mt-0'>
            <div className='md:pl-[30px]'>
              <div>
                <aside className='tsat__subtitle'>INTRODUCTION ABOUT US</aside>
                <h2 className='tsat__title lg:text-[45px] leading-tight'>
                  ULTIMATE GUIDE TO EPIC ADVENTURE
                </h2>
                <div className='mt-5 pl-10 md:pl-8'>
                  <Divider_ />
                </div>
                <p className='text-[14px]'>
                  Our experienced travel agents will work with you to create a
                  customized itinerary that meets all of your travel needs and
                  preferences. And with our wide range of tour options, you're
                  sure to find something that fits your budget and interests.
                </p>
              </div>
              <ul className='relative mt-5 m-0 mx-0'>
                <li className='list-none relative flex mb-5'>
                  <span className='bg-primary text-base-100 text-[25px] relative flex items-center justify-center p-[10px] h-24 md:h-20'>
                    <i className='text-accent text-[70px] lg:text-[55px] icon-star font-black'></i>
                  </span>
                  <div className='w-[calc(100%-70px)] pl-5'>
                    <h2 className='mb-1 font-bold uppercase'>
                      BEST PRICE GUARANTEED
                    </h2>
                    <span className='text-[14px] block'>
                      you're sure to find something that fits your budget and
                      interests.
                    </span>
                  </div>
                </li>
                <li className='list-none relative flex mb-5'>
                  <span className='bg-primary text-base-100 text-[25px] relative flex items-center justify-center p-[10px] h-24 md:h-20'>
                    <i className='text-accent text-[70px] lg:text-[55px] icon-map font-black'></i>
                  </span>
                  <div className='w-[calc(100%-70px)] pl-5'>
                    <h2 className='mb-1 font-bold uppercase'>
                      AMAZING DESTINATION
                    </h2>
                    <span className='text-[14px] block'>
                      Whether you're looking to explore the stunning beaches of
                      Thailand, discover the rich history of Europe among
                      others.
                    </span>
                  </div>
                </li>
                <li className='list-none relative flex'>
                  <span className='bg-primary text-base-100 text-[25px] relative flex items-center justify-center p-[10px] h-24 md:h-20'>
                    <i className='text-accent text-[70px] lg:text-[55px] icon-organization font-black'></i>
                  </span>
                  <div className='w-[calc(100%-70px)] pl-5'>
                    <h2 className='mb-1 font-bold uppercase'>
                      PERSONAL SERVICES
                    </h2>
                    <span className='text-[14px] block'>
                      Our experienced travel agents will work with you to create
                      a customized itinerary that meets all of your travel
                      needs.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="relative mt-20">
            <div className="sm:px-2 py-10 flex flex-row items-center flex-wrap justify-center">
              <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
                <figure>
                  <img loading='lazy' src={client1} alt="client_img" />
                </figure>
              </div>
              <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
                <figure>
                  <img loading='lazy' src={client2} alt="client_img" />
                </figure>
              </div>
              <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
                <figure>
                  <img loading='lazy' src={client3} alt="client_img" />
                </figure>
              </div>
              <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
                <figure>
                  <img loading='lazy' src={client4} alt="client_img" />
                </figure>
              </div>
              <div className="min-w-[190px] py-[10px] px-[15px] sm:px-[30px]">
                <figure>
                  <img loading='lazy' src={client5} alt="client_img" />
                </figure>
              </div>
            </div>
          </div> */}
      </section>

      <Activities />
      <Members />
      <Newsletter pt={75} bgImage={bgImage} />
    </main>
  );
}
