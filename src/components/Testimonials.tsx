import Rating from '@mui/material/Rating';

import Divider_ from './Divider';

import useWebInfo from '../hooks/useWebStore';

import quote from '../assets/images/quote.webp';

export default function Testimonials({
  otherStyles,
}: {
  otherStyles?: string;
}) {
  const { testimonials_ } = useWebInfo();
  return (
    <section className={`tsat__space ${otherStyles} pb-20`}>
      <div className='text-center flex items-center justify-center flex-col my-10'>
        <aside className='tsat__subtitle'>TESTIMONIALS</aside>
        <h2 className='tsat__title w-full md:w-2/3'>WHAT TRAVELLERS SAY</h2>
        <Divider_ />
      </div>

      <div className='flex items-center justify-evenly flex-wrap mt-10'>
        {testimonials_.map(({ id, image, rating, role, message, name }) => (
          <div
            key={id}
            className='sm:px-[15px] py-5 relative max-w-full w-[400px] md:w-1/2 lg:w-1/3'
          >
            <figure className='border-2 border-primary_clr w-[110px] h-[110px] overflow-hidden rounded-full mb-10 mx-auto flex items-center justify-center relative z-[2]'>
              <img
                loading='lazy'
                src={image}
                className='w-full max-w-full h-full max-h-full object-cover'
                alt='testimonial_img'
              />
            </figure>

            <div className='relative night_overlay_before before:opacity-5 pt-[90px] px-5 pb-4 -mt-[90px] z-[1] overflow-hidden rounded-[8px]'>
              <img
                loading='lazy'
                src={quote}
                alt=''
                className='-z-10 absolute w-20 aspect-square top-[3%]'
              />
              <div className='relative'>
                <p className='text-neutral min-h-[100px] text-[13px] italic leading-[1.5] mb-[10px]'>
                  {message}
                </p>
                <div className='flex items-center justify-center w-full relative mb-[5px]'>
                  <Rating
                    size='small'
                    readOnly
                    precision={0.1}
                    value={rating}
                  />
                </div>
                <h3 className='text-center text-[20px] font-semibold'>
                  {name}
                </h3>
                <span className='text-center text-[12px] block'>{role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
