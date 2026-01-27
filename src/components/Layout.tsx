import { useState, type ReactNode } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  setCurrentPage?: (page: string) => void;
}

export default function Layout({ children, setCurrentPage }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'About', 'Reviews', 'Contact'];

  const handleNavClick = (page: string) => {
    if (setCurrentPage) setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Logo = () => (
    <img 
      src="/logo.png" 
      alt="Blue Flame" 
      className="h-14 w-auto object-contain drop-shadow-sm" 
      onError={(e) => { 
        e.currentTarget.src = 'https://placehold.co/160x50/005C9E/FFFFFF?text=Blue+Flame'; 
        e.currentTarget.onerror = null; 
      }}
    />
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* SINGLE HEADER - Sleek, Sticky, Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('Home')}>
              <Logo />
            </div>

            {/* Desktop Navigation - Centered & Clean */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                    link === 'Contact' 
                      ? 'bg-[#D9232D] text-white px-6 py-2.5 rounded-full hover:bg-red-700 shadow-md transform hover:scale-105'
                      : 'text-gray-600 hover:text-[#005C9E]'
                  }`}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-gray-600 hover:text-[#005C9E] transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-3 text-base font-bold text-gray-700 hover:text-[#005C9E] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Action Button (Cleaned up) */}
      <a 
        href="tel:07480561846" 
        className="fixed bottom-6 right-6 bg-[#D9232D] text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all transform hover:scale-110 hover:rotate-3 z-50 flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone size={24} fill="currentColor" />
      </a>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Blue Flame Gas Services.</p>
            
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-[#005C9E]">
                <MapPin size={16} /> Worcester
              </span>
              <a href="tel:07480561846" className="flex items-center gap-2 hover:text-[#005C9E] font-medium transition-colors">
                <Phone size={16} /> 07480 561 846
              </a>
              <a href="mailto:info@blueflameworcester.com" className="flex items-center gap-2 hover:text-[#005C9E] font-medium transition-colors">
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}