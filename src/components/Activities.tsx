import { Link } from 'react-router-dom';
import bgImage from '../assets/images/newsletter.webp';
import Divider_ from './Divider';
import useWebInfo from '../hooks/useWebStore';

export default function Activities() {
  const { activities_ } = useWebInfo();
  return (
    <section
      className='relative tsat__space bg-cover bg-center bg-fixed day_overlay_before before:opacity-90 py-[100px]'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='flex items-center justify-center flex-col text-center mx-auto mb-10 relative text-white'>
        <aside className='tsat__subtitle text-white before:bg-white'>
          TRAVEL BY ACTIVITY
        </aside>
        <h2 className='tsat__title'>ADVENTURE & ACTIVITY</h2>
        <Divider_ />
        <p className='text-[14px] md:w-2/3'>
          So why wait? Start planning your dream vacation today! Simply browse
          through our website to see all of the amazing tours we offer, and
          don't hesitate to contact us with any questions. We can't wait to help
          you plan the trip of a lifetime.
        </p>
      </div>

      <div className='flex items-center justify-center flex-wrap mb-10 relative'>
        {activities_.map(({ activity, icon, destinations }) => (
          <Link
            key={activity}
            to={'/tours'}
            className='max-w-full w-[160px] sm:w-1/3 md:w-1/4 lg:w-1/6'
          >
            <div className='group relative p-2'>
              <div className='max-w-[200px] relative p-[15px] flex text-center justify-center flex-col items-center border-2 border-[#f1f1f1]'>
                <img
                  loading='lazy'
                  className='w-[109px] h-auto scale-[.96] group-hover:scale-100 transition-all'
                  src={icon}
                  alt='activity_img'
                />

                <pre className='font-["Roboto_slab"] text-white group-hover:text-accent font-bold mt-2 duration-300 transition-all hover:text-secondary_clr'>
                  {activity}
                </pre>
                <p className='text-white text-[13px]'>
                  {destinations} Destination{destinations === 1 ? '' : 's'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
