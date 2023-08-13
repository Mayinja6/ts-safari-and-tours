import Breadcrumb from '../components/Breadcrumb';
import SiteStats from '../components/SiteStats';
import Testimonials from '../components/Testimonials';

export default function AboutScreen() {
  return (
    <main>
      <Breadcrumb title='About Us' />
      <section className='tsat__space my-16'>
        <aside className='tsat__subtitle'>OUR BENEFITS</aside>
        <div className='flex flex-wrap mb-5'>
          <h1 className='tsat__title md:w-[55%] leading-tight lg:text-[40px]'>
            OUR TRAVEL AGENCY HAS BEEN BEST AMONG OTHERS SINCE 1982
          </h1>
          <div className='md:w-[45%] md:pl-8'>
            <div>
              <p className='text-[14px]'>
                Our experienced travel agents will work with you to create a
                customized itinerary that meets all of your travel needs and
                preferences. And with our wide range of tour options, you're
                sure to find something that fits your budget and interests.
              </p>
              <p className='text-[14px] mt-5'>
                So why wait? Start planning your dream vacation today! Simply
                browse through our website to see all of the amazing tours we
                offer, and don't hesitate to contact us with any questions. We
                can't wait to help you plan the trip of a lifetime.
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-wrap gap-5 my-10'>
          <div className='relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]'>
            <span className='bg-secondary text-base-100 text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]'>
              <i className='icon-trophy text-6xl'></i>
            </span>
            <div className='w-[calc(100%-80px)] pl-5'>
              <h2 className='mb-2 font-bold text-[18px] uppercase'>
                Award winning
              </h2>
              <span className='text-[14px] block'>
                We offer tours to destinations all around the world.
              </span>
            </div>
          </div>
          <div className='relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]'>
            <span className='bg-secondary text-base-100 text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]'>
              <i className='icon-star text-6xl'></i>
            </span>
            <div className='w-[calc(100%-80px)] pl-5'>
              <h2 className='mb-2 font-bold text-[18px] uppercase'>
                Well allowance
              </h2>
              <span className='text-[14px] block'>
                You're sure to find something that fits your budget.
              </span>
            </div>
          </div>
          <div className='relative flex border mb-3 p-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]'>
            <span className='bg-secondary text-base-100 text-[25px] relative h-[80px] w-[80px] flex items-center justify-center p-[10px]'>
              <i className='icon-heart text-6xl'></i>
            </span>
            <div className='w-[calc(100%-80px)] pl-5'>
              <h2 className='mb-2 font-bold text-[18px] uppercase'>
                Full Insurance
              </h2>
              <span className='text-[14px] block'>
                Simply browse our website to see the tours we offer.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Testimonials otherStyles='bg-[#f7f7f7] pt-10' />
      <SiteStats />
    </main>
  );
}
