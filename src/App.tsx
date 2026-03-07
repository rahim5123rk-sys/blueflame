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

// Per-page SEO metadata used for document title, meta description, OG tags and GA
const PAGE_META: Record<string, { title: string; description: string; path: string }> = {
  Home: {
    title: 'Blue Flame | Gas Safe Engineers in Worcester | Boiler Servicing & Repairs',
    description: "Worcester's trusted Gas Safe registered engineers. Expert boiler installations, servicing, emergency repairs & landlord certificates across Worcestershire. Call 07480 561 846.",
    path: '/',
  },
  Services: {
    title: 'Services & Prices | Blue Flame Gas Services Worcester',
    description: 'Boiler servicing from £60, landlord gas certificates (CP12) from £60, emergency call-outs & new boiler installations. Book online or call 07480 561 846.',
    path: '/services',
  },
  About: {
    title: 'About Us | Blue Flame Gas Services Worcester',
    description: 'Gas Safe registered engineers serving Worcester and Worcestershire. Safety-first approach, transparent pricing, and quality workmanship on every job.',
    path: '/about',
  },
  Reviews: {
    title: 'Customer Reviews | Blue Flame Gas Services Worcester',
    description: '5-star rated Gas Safe engineers in Worcester. Read genuine customer reviews for boiler servicing, installations and emergency repairs.',
    path: '/reviews',
  },
  Contact: {
    title: 'Contact Us | Blue Flame Gas Services Worcester',
    description: 'Contact Blue Flame Gas Services. Call 07480 561 846 for emergency repairs, boiler quotes or to book a service in Worcester.',
    path: '/contact',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  // State to hold the service selected from the homepage
  const [preselectedService, setPreselectedService] = useState('');

  // Update page title, meta description, OG tags, and fire GA page view on every navigation
  useEffect(() => {
    const meta = PAGE_META[currentPage] ?? PAGE_META.Home;

    // Update document title
    document.title = meta.title;

    // Update meta description
    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descEl) descEl.content = meta.description;

    // Update Open Graph title & description so social shares reflect the current page
    const ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.content = meta.title;

    const ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.content = meta.description;

    // Update canonical URL to include the hash-based path
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = `https://www.blueflameworcester.com${currentPage === 'Home' ? '' : '#' + currentPage.toLowerCase()}`;

    // Fire GA4 page_view event with the human-readable path and page title
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: meta.path,
        page_title: meta.title,
        page_location: window.location.href,
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