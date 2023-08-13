import { Link, useLocation } from 'react-router-dom';
import tsatLogo from '../assets/logo.webp';

const MobileDrawer = ({
  setMobileDrawerOpen,
}: {
  setMobileDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { pathname } = useLocation();
  return (
    <div className='max-w-full w-[325px] py-5'>
      <div className='w-full flex justify-between items-center mb-8 px-5'>
        <img loading='lazy' src={tsatLogo} className='w-20' alt='tsat_logo' />
        <span
          className='text-2xl cursor-pointer'
          onClick={() => setMobileDrawerOpen(false)}
        >
          <i className='icon-close font-black'></i>
        </span>
      </div>
      <ul className='list-none text-[18px]'>
        {[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'Tours',
            link: '/tours',
          },
          {
            name: 'About',
            link: '/about',
          },
          { name: 'Tour Guides', link: '/team' },
          {
            name: 'Contact',
            link: '/contact',
          },
        ].map((link) => (
          <li key={link.name}>
            <Link
              to={link.link}
              className={`block border-b border-secondary last:border-b-0 py-2 px-4 ${
                pathname === link.link
                  ? 'text-accent bg-secondary font-bold pl-4'
                  : ''
              } hover:bg-secondary hover:text-base-100 transition-all duration-200`}
              onClick={() => setMobileDrawerOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* <span className='block border-y border-t-2 py-2 px-4'>
          <Link
            to={'/'}
            className={`${
              pathname === `/`
                ? 'text-primary-500 bg-secondary font-bold pl-4'
                : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Home
          </Link>
        </span>
        <span className='block border-y px-4 py-2'>
          <Link
            to={'/destinations'}
            className={`${
              pathname === `/destinations` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Destinations
          </Link>
        </span>
        <span className='block border-y px-4 py-2'>
          <Link
            to={'/tour-guides'}
            className={`${
              pathname === `/tour-guides` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Tour Guides
          </Link>
        </span>
        <span className='block border-y px-4 py-2'>
          <Link
            to={'/about'}
            className={`${
              pathname === `/about` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            About
          </Link>
        </span>
        <span className='block border-y px-4 py-2'>
          <Link
            to={'/services'}
            className={`${
              pathname === `/services` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Services
          </Link>
        </span>
        <span className='block border-y px-4 py-2'>
          <Link
            to={'/contact'}
            className={`${
              pathname === `/contact` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            Contact
          </Link>
        </span>
        <span className='block border-y border-b-2 px-4 py-2'>
          <Link
            to={'/notfound'}
            className={`${
              pathname === `/notfound` ? 'text-primary font-bold pl-4' : ''
            }`}
            onClick={() => setMobileDrawerOpen(false)}
          >
            404 Not found
          </Link>
        </span> */}
      </ul>
    </div>
  );
};

export default MobileDrawer;
