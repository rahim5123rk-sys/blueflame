import { useState } from 'react';
import Layout from './components/Layout.tsx';
import Home from './pages/home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Reviews from './pages/Reviews.tsx';
import Contact from './pages/contact.tsx';

// The main App component that orchestrates the page navigation
export default function App() {
  // State to keep track of the currently active page, defaulting to 'Home'
  const [currentPage, setCurrentPage] = useState('Home');

  // Function to render the correct page component based on the current state
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Reviews':
        return <Reviews />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    // The Layout component wraps every page, providing the header and footer
    <Layout setCurrentPage={setCurrentPage}>
      {/* The renderPage function is called here to display the active page */}
      {renderPage()}
    </Layout>
  );
}
  return (
    // The Layout component wraps every page, providing the header and footer
    <Layout setCurrentPage={setCurrentPage}>
      {/* The renderPage function is called here to display the active page */}
      {renderPage()}
    </Layout>
  );
}