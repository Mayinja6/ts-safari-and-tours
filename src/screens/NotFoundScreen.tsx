import { Link } from 'react-router-dom';
import bgImage from '../assets/images/coming-soon.webp';

export default function NotFoundScreen() {
  return (
    <div
      className='tsat__space relative z-[2] text-center bg-no-repeat bg-cover bg-fixed bg-center py-[160px] md:py-[140px] day_overlay_before'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='w-full relative text-base-100'>
        <span className='text-[145px] md:text-[224px] lg:text-[300px] text-[rgba(255,255,255,0.32)] font-[montserrat] font-black leading-[1]'>
          404
        </span>
        <h2 className='text-base-100 absolute top-1/2 left-0 right-0 -translate-y-[145%] sm:-translate-y-[80%]  mb-0 text-[32px] md:text-[40px] tsat__title lg:text-[65px]'>
          Oops! That page can't be found
        </h2>
        <p className='text-base-100 text-[16px] sm:text-[18px] mt-10 font-bold'>
          It looks like nothing was found at this location. Maybe try one of the
          links below or a search?
        </p>
        <div className='max-w-[640px] mx-auto mt-11 relative'>
          <Link to='/' className='tsat__btn py-3 inline-flex items-center'>
            <i className='icon-arrow-left font-black text-xl mr-2'></i> Back To
            Safety
          </Link>
        </div>
      </div>
    </div>
  );
}
