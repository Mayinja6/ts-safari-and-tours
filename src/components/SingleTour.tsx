import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { Tour } from '../hooks/useWebStore';

export default function SingleTour({ id, tour, image, place, rating }: Tour) {
  return (
    <Link
      to={`/tours/${id}`}
      key={`${tour}_${id}`}
      className='tsat__tour group relative p-2 mb-4 bg-base-100 max-w-[350px] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-8px)]'
      style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.1)' }}
    >
      <div className='tsat__tour_img scale-[0.99] relative w-full h-full night_overlay_before before:transition-all before:opacity-50 group-hover:before:opacity-25'>
        <img loading='lazy' src={image} className='w-full h-full' alt='' />
      </div>
      <div className='my-2 text-center'>
        <pre className='mb-1 line-clamp-1 font-bold text-[18px] transition-all group-hover:text-primary-500'>
          {tour}
        </pre>
        <span className='text-[14px] font-bold uppercase text-secondary'>
          {place}
        </span>
      </div>
      <div className='absolute top-5 pb-4 text-base-100 right-4'>
        <Rating readOnly precision={0.1} value={rating} size='small' />
      </div>
    </Link>
  );
}
