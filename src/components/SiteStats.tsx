import useWebInfo from '../hooks/useWebStore';

export default function SiteStats() {
  const { stats_ } = useWebInfo();
  return (
    <section className='tsat__space py-20 bg-opacity-80 bg-neutral w-full relative'>
      <div className='flex items-center justify-center flex-col text-center mx-auto '>
        <aside className='tsat__subtitle text-white before:bg-white'>
          CALLBACK FOR MORE
        </aside>
        <h2 className='tsat__title text-white md:w-[75%] leading-[1.3] mt-2'>
          GO TRAVEL.DISCOVER. REMEMBER US!!
        </h2>
        <p className='text-base-100 md:w-[75%] text-[14px] leading-[1.2]'>
          So why wait? Start planning your dream vacation today! Simply browse
          through our website to see all of the amazing tours we offer, and
          don't hesitate to contact us with any questions. We can't wait to help
          you plan the trip of a lifetime.
        </p>
      </div>
      <div className='relative text-base-100 mt-10 flex items-center justify-between flex-wrap gap-4'>
        {stats_.map(({ stat, icon, qty }) => (
          <div
            key={stat}
            className='max-w-[350px] mx-auto w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] bg-primary flex items-center justify-between py-[25px] px-6 bg-opacity-90'
          >
            <div className='pr-4 border-r-2 border-base-100 border-opacity-80'>
              <i
                className={`text-accent text-[70px] lg:text-[55px] ${icon}`}
              ></i>
            </div>
            <div className='flex flex-col justify-center pl-3'>
              <span className='text-5xl sm:text-4xl font-black leading-[1]'>
                {qty}
              </span>
              <span className='text-[13px] font-semibold text-base-100'>
                {stat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
