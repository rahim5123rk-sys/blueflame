import { useState } from 'react';
import type { ReactNode } from 'react';
import { Phone, Menu, X, Facebook, Instagram, Flame } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  setCurrentPage: (page: string) => void;
}

export default function Layout({ children, setCurrentPage }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Services', page: 'Services' },
    { name: 'About', page: 'About' },
    { name: 'Reviews', page: 'Reviews' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* HEADER / NAVBAR */}
      <header className="relative w-full z-50 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* LOGO - REVERTED TO IMAGE FILE */}
            <button 
              onClick={() => setCurrentPage('Home')} 
              className="flex items-center gap-2"
            >
              <img 
                src="/images/logo.webp" 
                alt="Blue Flame Gas Services" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  // Fallback in case image is missing
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = 'Blue Flame';
                }}
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setCurrentPage(link.page)}
                  className="text-sm font-bold text-gray-600 hover:text-[#005C9E] uppercase tracking-wider transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#D9232D] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </button>
              ))}
              <a 
                href="tel:07480561846" 
                className="bg-[#D9232D] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-all flex items-center gap-2 text-sm transform hover:-translate-y-0.5"
              >
                <Phone size={18} /> 07480 561 846
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-800 hover:text-[#005C9E] transition-colors"
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
                <button
                  key={link.name}
                  onClick={() => {
                    setCurrentPage(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-4 text-base font-bold text-gray-800 hover:bg-blue-50 border-b border-gray-50 last:border-0 hover:text-[#005C9E] transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="tel:07480561846" 
                className="block w-full text-center bg-[#D9232D] text-white px-3 py-4 rounded-lg font-bold mt-4 shadow-md uppercase tracking-wide"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT PADDING */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            {/* Footer Logo (Code based for crispness on dark background) */}
            <div className="flex items-center gap-3 mb-6">
              <Flame className="text-[#D9232D] fill-current w-8 h-8" />
              <div>
                <span className="block font-bold text-xl tracking-tight leading-none text-white">BLUE FLAME</span>
                <span className="block text-[9px] text-[#D9232D] font-bold tracking-[0.2em] uppercase mt-1">Gas Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local experts for boiler installations, servicing, and repairs in Worcestershire & West Midlands.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D9232D] rounded-full"></span> Services
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li><button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Boiler Installation</button></li>
              <li><button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Annual Servicing</button></li>
              <li><button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Landlord Certificates</button></li>
              <li><button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Emergency Repairs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D9232D] rounded-full"></span> Contact
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#D9232D]"/> 07480 561 846</li>
              <li className="flex items-center gap-3">blueflameworc@gmail.com</li>
              <li className="flex items-center gap-3">Worcester, UK</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D9232D] rounded-full"></span> Socials
            </h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#005C9E] transition-colors group"><Facebook size={20} className="group-hover:text-white" /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-[#C13584] transition-colors group"><Instagram size={20} className="group-hover:text-white" /></a>
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
        className="md:hidden fixed bottom-6 right-6 bg-[#D9232D] text-white p-4 rounded-full shadow-2xl hover:bg-red-700 z-50 animate-bounce"
        aria-label="Call Now"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}