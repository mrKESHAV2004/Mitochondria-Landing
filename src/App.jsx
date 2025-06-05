import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon.jsx';
import Educators from './Pages/Educators.jsx';

// Lazy load components for better performance
const Home = lazy(() => import('./Pages/Home.jsx'));
const WaitlistPage = lazy(() => import('./Pages/WaitlistPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('./Pages/PrivacyPolicyPage.jsx'));
const LearnPage = lazy(() => import('./Pages/LearnPage.jsx'));
const GamesPage = lazy(() => import('./Pages/GamesPage.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));

// Page Loader Component
function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-[#FFDE5A] rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-2 border-4 border-black rounded-full animate-spin border-t-transparent" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  )
}

// Scroll Restoration Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/educators' element={<Educators/>}/>
          <Route path='/waitlist' element={<WaitlistPage />} />
          <Route path='/privacy-policy' element={<ComingSoon />} />
          <Route path='/learn' element={<LearnPage />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='/about' element={<ComingSoon />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='/community' element={<ComingSoon />} />
        </Routes>
      </Suspense>
      </>
  );
};

export default App;
