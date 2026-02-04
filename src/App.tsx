import { useState, useEffect, Suspense, lazy } from 'react';
// Explicit path resolution with .tsx extensions
import Layout from './components/Layout.tsx';

// Lazy load page components to improve performance and reduce main-thread tasks
const Home = lazy(() => import('./pages/home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Reviews = lazy(() => import('./pages/Reviews.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  // State to hold the service selected from the homepage
  const [preselectedService, setPreselectedService] = useState('');

  // Google Analytics Page View Tracking for SPA navigation
  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-M97YPQ2QT2', {
        page_path: window.location.hash || '/',
      });
    }
  }, [currentPage]);

  useEffect(() => {
    const pages = ['Home', 'Services', 'About', 'Reviews', 'Contact'];
    // Handle hash navigation (e.g. #contact)
    const path = window.location.hash.replace('#', '');
    const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

    if (path && pages.includes(formattedPath)) {
      setCurrentPage(formattedPath);
    } else if (!path) {
      setCurrentPage('Home');
    } else {
      setCurrentPage('NotFound');
    }
  }, []);

  const handleSetPage = (page: string) => {
    setCurrentPage(page);
    if (page !== 'NotFound') {
      window.location.hash = page.toLowerCase();
    }
  };

  const renderPage = () => {
    return (
      // Suspense handles the loading state while lazy components are fetched
      <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
        {(() => {
          switch (currentPage) {
            case 'Home':
              return <Home setCurrentPage={handleSetPage} setPreselectedService={setPreselectedService} />;
            case 'About':
              return <About />;
            case 'Services':
              return <Services preselectedService={preselectedService} setPreselectedService={setPreselectedService} />;
            case 'Reviews':
              return <Reviews />;
            case 'Contact':
              return <Contact />;
            default:
              return <NotFound setCurrentPage={handleSetPage} />;
          }
        })()}
      </Suspense>
    );
  };

  return (
    <Layout setCurrentPage={handleSetPage}>
      {renderPage()}
    </Layout>
  );
}