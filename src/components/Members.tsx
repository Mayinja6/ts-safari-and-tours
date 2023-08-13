import { Link } from 'react-router-dom';

import Divider_ from './Divider';

import useWebInfo, { TeamMember } from '../hooks/useWebStore';

function Member({ image, role, name }: Omit<TeamMember, 'id'>) {
  return (
    <div className='mb-5 md:mb-10 relative w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)]'>
      <figure className=' flex justify-center'>
        <img
          loading='lazy'
          src={image}
          className='max-w-[315px] w-full h-[300px] object-cover'
          alt='tour_guide'
        />
      </figure>
      <div
        className='-mt-10 md:-mt-12 mx-auto w-3/4 relative'
        style={{ boxShadow: ' 0px 0px 35px 0px rgba(0, 0, 0, 0.05)' }}
      >
        <div className='p-4 bg-white text-center'>
          <h3 className='text-[17px] font-bold mb-[5px] line-clamp-1'>
            {name}
          </h3>
          <aside className='font-["Roboto_slab"] text-primary font-bold text-[12px] mb-[10px]'>
            {role}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function Members({
  otherStyles,
  isMembersPage,
}: {
  otherStyles?: string;
  isMembersPage?: boolean;
}) {
  const { teamMembers_ } = useWebInfo();
  return (
    <section className={`tour-guides ${otherStyles} tsat__space my-5 py-5`}>
      <div className='flex items-center justify-center flex-col text-center mx-auto mb-10 relative text-white'>
        <aside className='tsat__subtitle'>TEAM MEMBERS</aside>
        <h2 className='tsat__title text-neutral'>OUR TOUR GUIDES</h2>
        <Divider_ />
      </div>
      <div className='relative mt-10 flex flex-wrap items-start gap-5'>
        {isMembersPage
          ? [...teamMembers_].map((member) => (
              <Member key={`team_${member.name}`} {...member} />
            ))
          : [...teamMembers_]
              .slice(0, 4)
              .map((member) => (
                <Member key={`team_${member.id}`} {...member} />
              ))}
      </div>
      {!isMembersPage && (
        <div className='mb-20 mt-5 flex justify-center'>
          <Link to='/team'>
            <button className='tsat__btn py-4'>MORE MEMBERS</button>
          </Link>
        </div>
      )}
    </section>
  );
}
