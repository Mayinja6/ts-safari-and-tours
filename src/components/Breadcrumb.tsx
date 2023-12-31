import bannerImg from '../assets/images/hero.webp';
import BannerPattern from '../assets/images/bg_pattern.webp';

export default function Breadcrumb({ title }: { title: string }) {
  return (
    <div className='sm:pb-[50px]'>
      <div
        className='bg-no-repeat bg-cover bg-center  pt-[200px] pb-[170px] relative day_overlay_before'
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className='relative text-white text-center my__space'>
          <h1 className='font-black leading-[1.1] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[65px]'>
            {title}
          </h1>
        </div>
      </div>
      <div
        className={`h-[105px] lg:h-[150px] -mt-[100px] w-full bg-center bg-no-repeat content-[''] relative`}
        style={{ backgroundImage: `url(${BannerPattern})` }}
      ></div>
    </div>
  );
}
