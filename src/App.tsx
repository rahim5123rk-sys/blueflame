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
const Blog = lazy(() => import('./pages/Blog.tsx'));
const BoilerCost = lazy(() => import('./pages/blog/BoilerCost.tsx'));
const SignsBoilerNeedsReplacing = lazy(() => import('./pages/blog/SignsBoilerNeedsReplacing.tsx'));
const CarbonMonoxideSafety = lazy(() => import('./pages/blog/CarbonMonoxideSafety.tsx'));
const WorcesterVsIdeal = lazy(() => import('./pages/blog/WorcesterVsIdeal.tsx'));
const HowToBleedRadiator = lazy(() => import('./pages/blog/HowToBleedRadiator.tsx'));

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
  '/blog': {
    title: 'Heating & Gas Safety Blog | Blue Flame Gas Services Worcester',
    description: 'Expert heating advice from Gas Safe engineers in Worcester. Boiler guides, gas safety tips, and money-saving advice for homeowners and landlords.',
  },
  '/blog/boiler-cost-worcester': {
    title: 'How Much Does a New Boiler Cost in Worcester? (2026 Guide) | Blue Flame',
    description: "Complete breakdown of new boiler installation costs in Worcester 2026 — supply and fit prices, what's included, and how to get the best deal.",
  },
  '/blog/signs-boiler-needs-replacing': {
    title: '7 Warning Signs Your Boiler Needs Replacing | Blue Flame Worcester',
    description: "Is your boiler on its way out? These 7 warning signs tell you when repair isn't enough and it's time for a replacement.",
  },
  '/blog/carbon-monoxide-safety': {
    title: 'Carbon Monoxide Safety Guide for Homeowners | Blue Flame Worcester',
    description: 'Everything Worcester homeowners and landlords need to know about carbon monoxide — symptoms, prevention, and what to do in an emergency.',
  },
  '/blog/worcester-bosch-vs-ideal-boilers': {
    title: 'Worcester Bosch vs Ideal Boilers: Which Is Best? | Blue Flame',
    description: 'We compare Worcester Bosch and Ideal boilers head-to-head on reliability, efficiency, warranty, and price to help you choose the right boiler.',
  },
  '/blog/how-to-bleed-a-radiator': {
    title: 'How to Bleed a Radiator: Step-by-Step Guide | Blue Flame Worcester',
    description: 'Cold spots on your radiator? Our Gas Safe engineers walk you through exactly how to bleed a radiator and when to call a professional.',
  },
};

const BREADCRUMB_NAMES: Record<string, string> = {
  '/blog/boiler-cost-worcester': 'New Boiler Cost in Worcester',
  '/blog/signs-boiler-needs-replacing': '7 Signs Your Boiler Needs Replacing',
  '/blog/carbon-monoxide-safety': 'Carbon Monoxide Safety Guide',
  '/blog/worcester-bosch-vs-ideal-boilers': 'Worcester Bosch vs Ideal Boilers',
  '/blog/how-to-bleed-a-radiator': 'How to Bleed a Radiator',
};

const BASE = 'https://www.blueflameworcester.com';

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

    // BreadcrumbList schema — only on blog article pages
    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumb) existingBreadcrumb.remove();

    const articleName = BREADCRUMB_NAMES[location.pathname];
    if (articleName) {
      const script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
          { '@type': 'ListItem', position: 3, name: articleName, item: `${BASE}${location.pathname}` },
        ],
      });
      document.head.appendChild(script);
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/boiler-cost-worcester" element={<BoilerCost />} />
          <Route path="/blog/signs-boiler-needs-replacing" element={<SignsBoilerNeedsReplacing />} />
          <Route path="/blog/carbon-monoxide-safety" element={<CarbonMonoxideSafety />} />
          <Route path="/blog/worcester-bosch-vs-ideal-boilers" element={<WorcesterVsIdeal />} />
          <Route path="/blog/how-to-bleed-a-radiator" element={<HowToBleedRadiator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
