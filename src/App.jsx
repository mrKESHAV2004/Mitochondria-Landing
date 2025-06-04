import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon.jsx';
import Educators from './Pages/Educators.jsx';

// Lazy load components for better performance
const Home = lazy(() => import('./Pages/Home.jsx'));
const WaitlistPage = lazy(() => import('./Pages/WaitlistPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('./Pages/PrivacyPolicyPage.jsx'));
const LearnPage = lazy(() => import('./Pages/LearnPage.jsx'));
const GamesPage = lazy(() => import('./Pages/GamesPage.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const App = () => {
  return (
    <div className='flex max-w-screen h-screen overflow-x-hidden'>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/educators' element={<Educators/>}/>
          <Route path='/waitlist' element={<WaitlistPage />} />
          <Route path='/privacy-policy' element={<ComingSoon />} />
          <Route path='/learn' element={<LearnPage />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='/about' element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
