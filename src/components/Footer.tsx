import { useNavigate } from 'react-router-dom';
import useWebInfo from '../hooks/useWebStore';

const Footer = () => {
  const { address_, contact_, email_ } = useWebInfo();
  const navigate = useNavigate();
  return (
    <footer className='bg-neutral text-[13px] py-8 sm:py-[80px] text-base-100 tsat__space flex justify-between w-full flex-wrap'>
      <div className='w-full sm:w-1/2 lg:w-1/3 py-4 lg:py-5 relative'>
        <h3 className="uppercase font-bold text-[15px] mb-5 pl-3 mx-auto relative before:bg-primary-500 before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          About Hike Link
        </h3>
        <p className='text-[13px] md:text-[14px] opacity-90 mb-2'>
          T'S Safaris presents an exceptional array of tour experiences that
          encompass both the wonders of wildlife and the authenticity of diverse
          cultures.
        </p>
        <p className='text-[13px] md:text-[14px] opacity-90 mb-2'>
          Inviting you to explore the wonders of Uganda's wildlife and immerse
          yourself.
        </p>
      </div>
      <div className='w-full sm:w-1/2 lg:w-1/3 py-4 lg:py-5 relative'>
        <h3 className="uppercase font-bold text-[15px] mb-5 pl-3 mx-auto relative before:bg-primary-500 before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          CONTACT INFORMATION
        </h3>
        <p className='text-[13px] md:text-[14px] opacity-90 mb-4'>
          So why wait? Start planning your dream vacation today! Simply browse
          through our website to see all of the amazing tours we offer.
        </p>
        <div className='flex flex-col'>
          <a
            href={`tel:${contact_}`}
            className='transition-all my-1 hover:text-primary-500'
          >
            <i className='icon-phone font-black mr-3'></i>
            {contact_}
          </a>
          <a
            href={`mailto:${email_}`}
            className='transition-all text-s my-1 hover:text-primary-500'
          >
            <i className='icon-envelope mr-3 font-black'></i>
            {email_}
          </a>
          <span className='transition-all my-1 hover:text-primary-500'>
            <i className='icon-map mr-3 font-black'></i>
            {`${address_.zipCode} ${address_.address},
            ${address_.state}`}
          </span>
        </div>
      </div>
      {/* <div className='w-full sm:w-1/2 lg:w-1/3 py-4 lg:py-5 relative'>
        <h3 className="uppercase font-bold text-[15px] mb-5 pl-3 mx-auto relative before:bg-primary-500 before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          Latest Post
        </h3>
        <ul>
          {[
            {
              post: 'Life is a beautiful journey not a destination',
              link: '/',
              date: 'August 17, 2021',
              comments: 'No Comments',
            },
            {
              post: 'Take only memories, leave only footprints',
              link: '/',
              date: 'August 17, 2021',
              comments: 'No Comments',
            },
          ].map((blogLink, i) => (
            <li key={i} className='py-2 first:border-b first:border-[#808080]'>
              <a
                className='font-semibold text-[14px] transition-colors hover:text-secondary block mb-2'
                href={blogLink.link}
              >
                {blogLink.post}
              </a>
              <div className='text-[12px] text-[#ddd] flex items-center justify-between'>
                <span>{blogLink.date}</span>
                <span>{blogLink.comments}</span>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className='w-full sm:w-1/2 lg:w-1/3 py-4 lg:py-5 relative'>
        <h3 className="uppercase font-bold text-[15px] mb-5 pl-3 mx-auto relative before:bg-primary-500 before:-ml-3 before:absolute before:content-[''] before before:h-full before:w-[3px]">
          Notify Me
        </h3>
        <p className='text-[13px] md:text-[14px] opacity-90 mb-4'>
          Sign up now to receive hot special offers and information about the
          best tour packages, updates and discounts !!.
        </p>
        <form
          className=' w-full relative'
          onSubmit={(e) => {
            e.preventDefault();
            navigate('coming-soon');
          }}
        >
          <input
            type='email'
            name='newsletter-email'
            required
            className='w-full text-black p-3 outline-none mb-3 border border-transparent duration-300 transition-[border] focus:border-primary'
            placeholder='Your Email..'
          />
          <input
            type='submit'
            value='SUBSCRIBE NOW'
            className='tsat__btn w-full py-4 cursor-pointer outline-none'
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
