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

  // Using the actual logo image from the /public folder
  const Logo = () => (
    <img 
      src="/logo.png" 
      alt="Blue Flame Gas Services Logo" 
      // NEW: Set logo height to h-13 (3.25rem)
      className="h-[3.25rem] drop-shadow-sm" 
      onError={(e) => { e.currentTarget.src = 'https://placehold.co/160x40/005C9E/FFFFFF?text=Blue+Flame'; e.currentTarget.onerror = null; }}
    />
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header and Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fully responsive header */}
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <a href="#" onClick={() => setCurrentPage('Home')} className="flex items-center">
                <Logo />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex w-full items-center justify-between">
              {/* Left-side links for centered layout on large screens */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.slice(0, 2).map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setCurrentPage(link)} className="text-gray-600 hover:text-[#005C9E] transition-colors duration-300 font-medium">
                    {link}
                  </a>
                ))}
              </div>
              {/* All links together for standard layout on medium screens */}
              <div className="hidden md:flex lg:hidden space-x-8">
                {navLinks.map((link) => (
                   <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setCurrentPage(link)} className="text-gray-600 hover:text-[#005C9E] transition-colors duration-300 font-medium">
                    {link}
                  </a>
                ))}
              </div>
              {/* Right-side links for centered layout on large screens */}
              <div className="hidden lg:flex space-x-8">
                 {navLinks.slice(2).map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setCurrentPage(link)} className="text-gray-600 hover:text-[#005C9E] transition-colors duration-300 font-medium">
                    {link}
                  </a>
                ))}
              </div>
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
                  className="text-gray-600 hover:text-[#005C9E] hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium text-center"
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

      {/* Floating Action Button for Click-to-Call */}
      <a 
        href="tel:07480561846" 
        className="fixed bottom-6 right-6 bg-[#D9232D] text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 z-50"
        aria-label="Call now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Blue Flame Gas Services. All rights reserved.</p>
            
            <div className="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Worcester
            </div>

            <div className="text-sm text-gray-500 font-medium text-center md:text-right">
              <a href="tel:07480561846" className="text-[#005C9E] hover:underline block">07480 561 846</a>
              <a href="tel:07864954123" className="text-[#005C9E] hover:underline block">07864 954 123</a>
              <a href="mailto:sal.786@hotmail.com" className="text-[#005C9E] hover:underline block">sal.786@hotmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

