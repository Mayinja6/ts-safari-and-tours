import Breadcrumb from '../components/Breadcrumb';
import Divider_ from '../components/Divider';
import SiteStats from '../components/SiteStats';
import useWebInfo from '../hooks/useWebStore';

const Services = () => {
  const { services_ } = useWebInfo();
  return (
    <>
      <Breadcrumb title={'Services'} />
      <div className='text-center flex items-center justify-center flex-col my-10'>
        <aside className='tsat__subtitle'>SERVICES</aside>
        <h2 className='tsat__title w-full md:w-2/3'>WHAT WE OFFER</h2>
        <Divider_ />
      </div>

      <div className='relative flex flex-wrap items-center justify-evenly tsat__space lg:gap-4 mb-10'>
        {services_.map(({ id, service, body, image }) => (
          <div
            key={`service_${id}`}
            className='relative w-full md:w-[calc(50%-16px)] sm:px-5'
          >
            <div
              className='relative p-5 sm:p-10 mb-5 sm:mb-10'
              style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.1)' }}
            >
              <div className='flex  flex-col'>
                <div className='flex mb-5  items-end'>
                  <span className='font-black text-primary text-[65px] mr-4 leading-[0.9]'>
                    {`0${id}`}.
                  </span>
                  <h3 className='text-[20px] md:text-[28px] font-bold leading-[1.1em]'>
                    {service}
                  </h3>
                </div>
                <p className='text-[14px] min-h-[85px] mb-4'>{body}</p>
              </div>
              <figure>
                <img loading='lazy' src={image} alt='service_Img' />
              </figure>
            </div>
          </div>
        ))}
      </div>

      <SiteStats />
    </>
  );
};

export default Services;
