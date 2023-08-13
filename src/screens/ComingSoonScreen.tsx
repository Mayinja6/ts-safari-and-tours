import bgImage from '../assets/images/coming-soon.webp';
import useWebInfo from '../hooks/useWebStore';

export default function ComingSoonScreen() {
  const { address_, contact_, email_, socialMedia_ } = useWebInfo();

  return (
    <div
      className='tsat__space relative z-[2] text-center bg-no-repeat bg-cover bg-fixed bg-center day_overlay_before py-28 lg:py-14'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='w-full relative text-base-100 min-h-screen flex flex-col items-center justify-center gap-5'>
        <div className='head'>
          <h2 className='font-["poppins"] font-black text-[36px] md:text-6xl lg:text-8xl after:bg-base-100 after:content-[""] after:w-24 text-base-100 after:h-1 after:block after:mx-auto after:mt-5'>
            COMING SOON !!
          </h2>
          <aside className='font-["montserrat"] font-bold mt-1 md:mt-8 text-lg md:text-2xl'>
            SOMETHING AWESOME IS ON IT'S WAY.
          </aside>
        </div>
        <div className='my-5 md:my-10 flex items-center justify-evenly flex-wrap'>
          <div className='counter w-[140px] sm:w-[160px] m-3 pt-1.5 px-2.5 pb-5 flex items-center flex-col bg-accent'>
            <span className='counter-days font-["poppins"] text-7xl font-black'>
              00
            </span>
            <span className='label-text'>Days</span>
          </div>
          <div className='counter w-[140px] sm:w-[160px] m-3 pt-1.5 px-2.5 pb-5 flex items-center flex-col bg-accent'>
            <span className='counter-hours font-["poppins"] text-7xl font-black'>
              00
            </span>
            <span className='label-text'>Hours</span>
          </div>
          <div className='counter w-[140px] sm:w-[160px] m-3 pt-1.5 px-2.5 pb-5 flex items-center flex-col bg-accent'>
            <span className='counter-minutes font-["poppins"] text-7xl font-black'>
              00
            </span>
            <span className='label-text'>Minutes</span>
          </div>
          <div className='counter w-[140px] sm:w-[160px] m-3 pt-1.5 px-2.5 pb-5 flex items-center flex-col bg-accent'>
            <span className='counter-seconds font-["poppins"] text-7xl font-black'>
              00
            </span>
            <span className='label-text'>Seconds</span>
          </div>
        </div>
        <div className='w-full flex gap-y-5 justify-center sm:justify-between items-center flex-wrap'>
          <div className='text-[12px] flex-wrap justify-evenly flex gap-4'>
            <a className='link__hover' href={`tel:${contact_}`}>
              <i className='icon-phone font-black mr-1'></i> {contact_}
            </a>
            <a className='link__hover' href={`mailto:${email_}`}>
              <i className='icon-envelope font-black mr-1'></i> {email_}
            </a>
            <span>
              <i className='icon-map font-black mr-1'></i>{' '}
              {`${address_.zipCode} ${address_.address},
            ${address_.state}`}
            </span>
          </div>
          <div className=''>
            {socialMedia_.map((social) => (
              <a
                title={social.id}
                key={`header_${social.id}`}
                className='mr-3 last:mr-0 cursor-pointer link__hover border-1 border-accent hover:bg-primary hover:text-base-100 hover:border-primary'
                target='_blank'
                href={social.link}
                rel='noopener noreferrer'
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
