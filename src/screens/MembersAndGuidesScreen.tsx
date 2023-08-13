import Breadcrumb from '../components/Breadcrumb';
import Members from '../components/Members';
import bgImage from '../assets/images/newsletter.webp';

export default function MembersAndGuidesScreen() {
  return (
    <>
      <Breadcrumb title={'Tour Guides'} />

      <Members isMembersPage />

      <div
        className='tsat__space bg-no-repeat bg-cover bg-center bg-fixed pt-[195px] pb-[100px] relative night_overlay_before'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className='w-full sm:w-[85%] md:w-3/4 lg:w-2/3 relative text-base-100'>
          <div>
            <aside className='tsat__subtitle text-base-100 before:bg-base-100'>
              INVOLVE NOW
            </aside>
            <h2 className='tsat__title font-black leading-[1.2]'>
              WANNA BE PART OF OUR TEAM. JOIN US NOW !!
            </h2>
            <p className='leading-[1.3] mb-[35px] font-semibold text-[15px]'>
              Our experienced travel agents will work with you to create a
              customized itinerary that meets all of your travel needs and
              preferences. And with our wide range of tour options, you're sure
              to find something that fits your budget and interests. <br />
              <br />
              So why wait? Start planning your dream vacation today! Simply
              browse through our website to see all of the amazing tours we
              offer, and don't hesitate to contact us with any questions. We
              can't wait to help you plan the trip of a lifetime.
            </p>
            <div>
              <button className='tsat__btn py-4'>JOINS US NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
