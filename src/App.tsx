import { useState, useEffect } from 'react';
// Explicit path resolution with .tsx extensions
import Layout from './components/Layout.tsx';
import Home from './pages/home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Reviews from './pages/Reviews.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  // State to hold the service selected from the homepage
  const [preselectedService, setPreselectedService] = useState('');

  // Google Analytics Page View Tracking
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
    switch (currentPage) {
      case 'Home':
        // Pass the setter function to the Home component
        return <Home setCurrentPage={handleSetPage} setPreselectedService={setPreselectedService} />;
      case 'About':
        return <About />;
      case 'Services':
        // Pass the selected service and the setter to the Services component
        return <Services preselectedService={preselectedService} setPreselectedService={setPreselectedService} />;
      case 'Reviews':
        return <Reviews />;
      case 'Contact':
        return <Contact />;
      default:
        return <NotFound setCurrentPage={handleSetPage} />;
    }
  };

  return (
    <Layout setCurrentPage={handleSetPage}>
      {renderPage()}
    </Layout>
  );
}