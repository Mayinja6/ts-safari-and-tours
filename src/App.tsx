import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomeScreen = lazy(() => import('./screens/HomeScreen.tsx'));
const AboutScreen = lazy(() => import('./screens/AboutScreen.tsx'));
const ContactScreen = lazy(() => import('./screens/ContactScreen.tsx'));
const ServicesScreen = lazy(() => import('./screens/ServicesScreen.tsx'));
const MembersAndGuidesScreen = lazy(
  () => import('./screens/MembersAndGuidesScreen.tsx')
);
const ToursListScreen = lazy(() => import('./screens/ToursListScreen.tsx'));
const NotFoundScreen = lazy(() => import('./screens/NotFoundScreen.tsx'));
const ComingSoonScreen = lazy(() => import('./screens/ComingSoonScreen.tsx'));

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Loader from './components/Loader.tsx';

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' index element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/services' element={<ServicesScreen />} />
          <Route path='/team' element={<MembersAndGuidesScreen />} />
          <Route path='/tours' element={<ToursListScreen />} />
          <Route path='/coming-soon' element={<ComingSoonScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
