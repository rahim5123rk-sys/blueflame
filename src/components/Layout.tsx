import { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram, Flame } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'About', to: '/about' },
    { name: 'Reviews', to: '/reviews' },
    { name: 'Contact', to: '/contact' },
  ];

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-bold uppercase tracking-wider transition-colors relative group ${
      isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'
    }`;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">

      {/* HEADER / NAVBAR */}
      <header className="relative w-full z-50 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.webp"
                alt="Blue Flame Gas Services"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = 'Blue Flame';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  className={navClass}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </NavLink>
              ))}
              <a
                href="tel:07480561846"
                className="bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all flex items-center gap-2 text-sm transform hover:-translate-y-0.5"
              >
                <Phone size={18} /> 07480 561 846
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-800 hover:text-blue-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-4 text-base font-bold border-b border-gray-50 last:border-0 transition-colors ${
                      isActive ? 'text-blue-800 bg-blue-50' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="tel:07480561846"
                className="block w-full text-center bg-red-700 text-white px-3 py-4 rounded-lg font-bold mt-4 shadow-md uppercase tracking-wide"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Flame className="text-red-700 fill-current w-8 h-8" />
              <div>
                <span className="block font-bold text-xl tracking-tight leading-none text-white">BLUE FLAME</span>
                <span className="block text-[9px] text-red-700 font-bold tracking-[0.2em] uppercase mt-1">Gas Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local experts for boiler installations, servicing, and repairs in Worcestershire & West Midlands.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-red-700 rounded-full"></span> Services
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Boiler Installation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Annual Servicing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Landlord Certificates</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Emergency Repairs</Link></li>
              <li><Link to="/gas-safety-guide" className="hover:text-white transition-colors">Gas Safety Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-red-700 rounded-full"></span> Contact
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li className="flex items-center gap-3"><Phone size={16} className="text-red-700"/> 07480 561 846</li>
              <li className="flex items-center gap-3">blueflameworc@gmail.com</li>
              <li className="flex items-center gap-3">Worcester, UK</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-red-700 rounded-full"></span> Socials
            </h4>
            <div className="flex gap-4">
              {/* Update these hrefs with your real Facebook/Instagram URLs */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-800 transition-colors group"><Facebook size={20} className="group-hover:text-white" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-[#C13584] transition-colors group"><Instagram size={20} className="group-hover:text-white" /></a>
            </div>
          </div>
        </div>

        {/* SEO AREA FOOTER */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center md:text-left">
          <p className="text-[10px] text-gray-500 mb-3 font-bold uppercase tracking-widest">Proudly Serving</p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            Worcester (WR1-WR5) • Droitwich Spa • Malvern • Pershore • Evesham • Redditch • Bromsgrove • Kidderminster • Stourport • Upton-upon-Severn • Tewkesbury • And surrounding Worcestershire villages.
          </p>
        </div>

        <div className="text-center text-gray-600 text-xs mt-8 pt-4 border-t border-gray-800/50">
          © {new Date().getFullYear()} Blue Flame Gas Services. All rights reserved.
        </div>
      </footer>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href="tel:07480561846"
        className="md:hidden fixed bottom-6 right-6 bg-red-700 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 z-50 animate-bounce"
        aria-label="Call Now"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}
