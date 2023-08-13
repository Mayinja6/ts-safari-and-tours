import useWebInfo from '../hooks/useWebStore';

import Breadcrumb from '../components/Breadcrumb';
import Newsletter from '../components/Newsletter';
import SingleTour from '../components/SingleTour';

import bgImage from '../assets/images/banner2.webp';

export default function ToursListScreen() {
  const { tours_ } = useWebInfo();
  return (
    <main>
      <Breadcrumb title='Tours' />

      <section className='tsat__space flex justify-evenly md:justify-start lg:justify-evenly items-center flex-wrap gap-x-2 gap-y-4 mb-20'>
        {tours_.map((tour) => (
          <SingleTour key={tour.tour} {...tour} />
        ))}
      </section>

      <Newsletter bgImage={bgImage} pt={75} />
    </main>
  );
}
