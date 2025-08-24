import React, { useState } from 'react';

// Define the props for the Layout component
interface LayoutProps {
  children: React.ReactNode;
  setCurrentPage: (page: string) => void;
}

// Layout component serves as the main template for all pages
export default function Layout({ children, setCurrentPage }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = ['Home', 'Services', 'About', 'Reviews', 'Contact'];

  // NEW: Using the actual logo image from the /public folder
  const Logo = () => (
    <img 
      src="/logo.jpg" 
      alt="Blue Flame Gas Services Logo" 
      className="h-16" // Adjust height as needed
      onError={(e) => { e.currentTarget.src = 'https://placehold.co/160x40/005C9E/FFFFFF?text=Blue+Flame'; e.currentTarget.onerror = null; }}
    />
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header and Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Company Name */}
            <div className="flex-shrink-0">
              <a href="#" onClick={() => setCurrentPage('Home')} className="flex items-center">
                <Logo />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setCurrentPage(link)}
                  className="text-gray-600 hover:text-[#005C9E] transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setCurrentPage(link);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-[#005C9E] hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Blue Flame Gas Services. All rights reserved.</p>
            <p className="text-sm text-gray-500 font-medium">
              Contact us: <a href="tel:07480561846" className="text-[#005C9E] hover:underline">07480 561 846</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}