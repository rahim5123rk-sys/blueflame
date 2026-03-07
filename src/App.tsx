import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.tsx';

const Home = lazy(() => import('./pages/home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Reviews = lazy(() => import('./pages/Reviews.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));
const GasSafetyGuide = lazy(() => import('./pages/GasSafetyGuide.tsx'));

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Blue Flame | Gas Safe Engineers in Worcester | Boiler Servicing & Repairs',
    description: "Worcester's trusted Gas Safe registered engineers. Expert boiler installations, servicing, emergency repairs & landlord certificates (CP12) across Worcestershire. Call 07480 561 846.",
  },
  '/services': {
    title: 'Services & Prices | Blue Flame Gas Services Worcester',
    description: 'Boiler servicing from £60, landlord gas certificates (CP12) from £60, emergency call-outs & new boiler installations. Book online or call 07480 561 846.',
  },
  '/about': {
    title: 'About Us | Blue Flame Gas Services Worcester',
    description: 'Gas Safe registered engineers serving Worcester and Worcestershire. Safety-first approach, transparent pricing, and quality workmanship on every job.',
  },
  '/reviews': {
    title: 'Customer Reviews | Blue Flame Gas Services Worcester',
    description: '5-star rated Gas Safe engineers in Worcester. Read genuine customer reviews for boiler servicing, installations and emergency repairs.',
  },
  '/contact': {
    title: 'Contact Us | Blue Flame Gas Services Worcester',
    description: 'Contact Blue Flame Gas Services. Call 07480 561 846 for emergency repairs, boiler quotes or to book a service in Worcester.',
  },
  '/gas-safety-guide': {
    title: 'Worcester Landlord Gas Safety Guide | Blue Flame',
    description: 'Complete guide to landlord gas safety obligations in Worcestershire. CP12 certificates, boiler servicing requirements, and Gas Safe regulations explained.',
  },
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? PAGE_META['/'];

    document.title = meta.title;

    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descEl) descEl.content = meta.description;

    const ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.content = meta.title;

    const ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.content = meta.description;

    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.content = `https://www.blueflameworcester.com${location.pathname}`;

    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = `https://www.blueflameworcester.com${location.pathname}`;

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname,
        page_title: meta.title,
        page_location: window.location.href,
      });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gas-safety-guide" element={<GasSafetyGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
