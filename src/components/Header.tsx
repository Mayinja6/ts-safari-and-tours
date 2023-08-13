import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Link, useLocation } from 'react-router-dom';

import useWebInfo from '../hooks/useWebStore';
import { useScrollSpy } from '../hooks/scrollSpy';
import tsatLogo from '../assets/logo2.webp';
import tsatLogoDark from '../assets/logo.webp';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const { address_, contact_, email_, socialMedia_ } = useWebInfo();
  const { pathname } = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const scrollSpy = useScrollSpy();

  return (
    <header
      className={`top-0 z-[5] w-full transition-all fixed ${
        scrollSpy < 45 ? 'bg-transparent text-base-100' : 'bg-base-100'
      }`}
    >
      <div
        className={`${
          scrollSpy > 45
            ? 'hidden'
            : 'tsat__space w-full py-1 relative flex items-center justify-between text-[12px] border-b-2 border-primary-500'
        }`}
      >
        <div className='hidden lg:block'>
          <a className='mr-6 link__hover' href={`tel:${contact_}`}>
            <i className='icon-phone font-black mr-1'></i> {contact_}
          </a>
          <a className='mr-6 link__hover' href={`mailto:${email_}`}>
            <i className='icon-envelope font-black mr-1'></i> {email_}
          </a>
          <span>
            <i className='icon-map font-black mr-1'></i>{' '}
            {`${address_.zipCode} ${address_.address},
            ${address_.state}`}
          </span>
        </div>
        <div className='flex items-center justify-between lg:justify-end w-full lg:w-auto  text-[14px]'>
          <div className='py-1.5'>
            {socialMedia_.map((social) => (
              <a
                title={social.id}
                key={`header_${social.id}`}
                className='mr-3 cursor-pointer link__hover'
                target='_blank'
                href={social.link}
                rel='noopener noreferrer'
              >
                <i className={`font-black ${social.icon}`}></i>
              </a>
            ))}
          </div>
          <Link
            title='search'
            to={'/coming-soon'}
            className='border-x-2 border-primary-500 py-1.5 px-3 link__hover cursor-pointer'
          >
            <i className='icon-magnifier font-black'></i>
          </Link>
        </div>
      </div>

      <div className='tsat__space flex items-center justify-between'>
        <Link to='/' className='scale-[.98] hover:scale-100 transition-all'>
          <img
            className='w-[70px] aspect-[63/50]'
            src={scrollSpy > 45 ? tsatLogoDark : tsatLogo}
            alt='website_logo'
          />
        </Link>

        <ul className='hidden lg:flex items-center relative'>
          {[
            {
              name: 'Home',
              link: '/',
            },
            {
              name: 'About',
              link: '/about',
            },
            {
              name: 'Tours',
              link: '/tours',
              nestedLinks: [{ name: 'Tour Guides', link: '/team' }],
            },
            {
              name: 'Services',
              link: '/services',
            },
            {
              name: 'Contact',
              link: '/contact',
            },
          ].map((headerLink, i) => (
            <li
              key={i}
              className={`py-5 ${
                headerLink.nestedLinks
                  ? `after:pl-2 after:transition-all after:font-bold after:content-[">"] hover:after:content-["<"]`
                  : ''
              } header__link mr-4 hover:text-primary-500 ${
                pathname === headerLink.link ? 'text-accent' : ''
              } transition-all uppercase relative`}
            >
              <Link to={headerLink.link} className='font-bold'>
                {headerLink.name}
              </Link>
              {headerLink.nestedLinks && (
                <ul className='absolute top-[68px] bg-base-100 w-[200px] transition-[display] duration-300'>
                  {headerLink.nestedLinks.map((nestedLink, index) => (
                    <li
                      key={index}
                      className='border-b border-base-100 relative last:border-none  first:before:absolute first:before:w-full first:before:h-[3px] first:before:bg-primary'
                    >
                      <Link
                        to={nestedLink.link}
                        className={`block py-2.5 px-5 ${
                          pathname === nestedLink.link
                            ? 'bg-secondary text-base-100'
                            : ''
                        } hover:bg-secondary hover:pl-[30px] hover:text-base-100 transition-all capitalize text-[14px] font-semibold`}
                      >
                        {nestedLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link
          to='/coming-soon'
          className='hidden sm:inline-block tsat__btn py-3 uppercase'
        >
          Book now
        </Link>

        <span
          className='lg:hidden text-2xl hover:scale-110 px-2 transition-all cursor-pointer'
          onClick={() => setMobileDrawerOpen(true)}
        >
          <i className='icon-menu font-black'></i>
        </span>

        <Drawer
          className='block lg:hidden'
          open={mobileDrawerOpen}
          anchor='right'
          onClose={() => setMobileDrawerOpen(false)}
        >
          <MobileDrawer setMobileDrawerOpen={setMobileDrawerOpen} />
        </Drawer>
      </div>
    </header>
  );
}
