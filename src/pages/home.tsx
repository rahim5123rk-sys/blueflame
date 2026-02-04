import { useState, useEffect } from 'react';
import BoilerTool from '../components/BoilerTool'; 

import { CheckCircle, Flame, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setPreselectedService: (service: string) => void;
}

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <path d="M17.64 9.20455C17.64 8.56682 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 12.0873 12.9973 13.1455 12.045 13.8245V15.7582H14.4955C15.96 14.3318 16.965 12.3818 17.295 10.05H17.64V9.20455Z" fill="#4285F4"/>
    <path d="M9 18C11.43 18 13.4673 17.2036 14.9618 15.7582L12.5114 13.8245C11.715 14.3318 10.4727 14.7273 9 14.7273C6.48955 14.7273 4.38545 12.9973 3.63818 10.9091H1.09091V12.915C2.56182 15.84 5.48727 18 9 18Z" fill="#34A853"/>
    <path d="M3.63818 10.9091C3.465 10.4018 3.36818 9.84545 3.36818 9.27273C3.36818 8.69999 3.465 8.14364 3.63818 7.63636V5.63001H1.09091C0.381818 7.02545 0 8.23636 0 9.27273C0 10.3091 0.381818 11.52 1.09091 12.915L3.63818 10.9091Z" fill="#FBBC05"/>
    <path d="M9 3.27273C10.275 3.27273 11.49 3.71999 12.4782 4.63636L15.0264 2.08818C13.4673 0.791818 11.43 0 9 0C5.48727 0 2.56182 2.15999 1.09091 5.63001L3.63818 7.63636C4.38545 5.54818 6.48955 3.27273 9 3.27273Z" fill="#EA4335"/>
  </svg>
);

export default function Home({ setCurrentPage, setPreselectedService }: HomeProps) {
  const services = [
    { name: 'Annual Boiler Service', image: '/images/boiler-service.jpg' },
    { name: 'Landlord Gas Safety Certificate (CP12)', image: '/images/gas-certificate.jpg' },
    { name: 'New Boiler Installation', image: '/images/boiler-install.jpg' }, 
    { name: 'Boiler Breakdown & Repair', image: '/images/emergency-repair.jpg' },
  ];

  const serviceAreas = {
    worcestershire: ['Worcester', 'Droitwich Spa', 'Malvern', 'Redditch', 'Bromsgrove', 'Evesham', 'Pershore'],
    westMidlands: ['Birmingham', 'Dudley', 'Wolverhampton', 'Walsall', 'Solihull', 'Stourbridge', 'Halesowen'],
  };

  const testimonials = [
    { name: 'Sarah L.', comment: 'The boys from Blue Flame saved the day when my boiler wasn\'t turning on, and straight away, they found the issue and resolved it. They have done numerous jobs for me, from boiler service to fitting new heaters around the house. They\'re very good at what they do.' },
    { name: 'Tom H.', comment: 'Needed a landlord gas safety certificate at short notice. They were able to fit me in quickly and the whole process was seamless. Excellent service.' },
    { name: 'Emily R.', comment: 'Our boiler broke down in the middle of winter. Blue Flame responded to our emergency call immediately and had it fixed the same day. Lifesavers!' },
  ];

  const faqs = [
    { q: 'Are you Gas Safe registered?', a: 'Yes, absolutely. All our engineers are fully qualified and on the Gas Safe Register. Your safety is our number one priority.' },
    { q: 'What is your call-out charge for breakdowns?', a: 'We have a standard call-out and diagnosis fee of £60. This covers the first hour of work. We will always provide you with a full quote for any required repairs before carrying out further work.' },
    { q: 'How often should I get my boiler serviced?', a: 'We recommend an annual boiler service to ensure it is running safely and efficiently. This can prevent costly breakdowns and prolong the life of your boiler.' },
    { q: 'What payment methods do you accept?', a: 'We accept bank transfers, cash, and all major credit and debit cards.' },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleServiceClick = (serviceName: string) => {
    if (serviceName === 'New Boiler Installation') {
      const toolElement = document.getElementById('boiler-quote-tool');
      if (toolElement) {
        toolElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setPreselectedService(serviceName);
      setCurrentPage('Services');
    }
  };

  return (
    <div className="animate-fadeIn font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        
        {/* Background Image with Readability Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=60&w=1200&auto=format&fit=crop" 
            alt="Modern Home Interior" 
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* THE FIX: Slate to Brand Blue gradient overlay for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#005C9E]/90 to-[#005C9E]/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: MAIN TEXT */}
            <div className="text-white text-center lg:text-left">
              
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl">
                Gas Safe Registered <br className="hidden lg:block"/>
               <span className="text-[#60a5fa]">Engineers in Worcester.</span>
              </h1>
              
              <p className="text-xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md">
                From emergency repairs to brand new boiler installations. We provide honest pricing, quality workmanship, and 24/7 support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#D9232D] text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:bg-red-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Get Instant Estimate <ArrowRight size={20} />
                </button>
                <a
                  href="https://wa.me/447480561846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-[#005C9E] transition-all border border-white/30 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon /> WhatsApp Us
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" /> Gas Safe
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" /> Fully Insured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" /> 5★ Reviews
                </div>
              </div>
            </div>

            {/* RIGHT: SPECIAL OFFER CARD (Redesigned) */}
            <div className="relative max-w-sm mx-auto lg:mr-0 w-full mt-8 lg:mt-0">
              
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group hover:scale-[1.02] transition-transform duration-300">
                
                {/* Special Offer Badge */}
                <div className="absolute top-0 right-0 bg-[#D9232D] text-white text-xs font-bold px-4 py-2 rounded-bl-2xl z-20 shadow-md flex items-center gap-1">
                  <Flame size={12} fill="currentColor" /> SPECIAL OFFER
                </div>

                {/* IMAGE SECTION - MAIN FOCUS */}
                <div className="bg-gradient-to-b from-blue-50 to-white pt-10 pb-4 px-6 relative flex justify-center items-center h-64">
                  {/* Subtle Glow Behind Boiler */}
                  <div className="absolute w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                  
                  {/* BOILER IMAGE - LARGE & CENTERED */}
                  <img 
                    src="/images/boilers/w1000.png" 
                    alt="Worcester 1000" 
                    className="relative w-56 h-auto object-contain drop-shadow-2xl z-10 transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* DETAILS SECTION */}
                <div className="p-6 pt-2">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Worcester Bosch 1000</h3>
                    <div className="inline-block bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider">
                      30kW Upgrade Included
                    </div>
                  </div>

                  {/* Modern Feature Grid */}
                  <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#005C9E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-700">ESI Programmable Thermostat</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-[#005C9E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-600">Adey Filter & Chemicals</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#005C9E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-600">Full Installation & Fittings</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex justify-between items-end mb-6 border-t border-gray-100 pt-4">
                    <div className="text-left">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">Supplied & Fitted</p>
                      <p className="text-3xl font-extrabold text-[#005C9E]">£1,650</p>
                    </div>
                    <div className="text-right pb-1">
                      <span className="text-sm text-gray-400 line-through font-medium">£1,850</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-[#005C9E] text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-blue-800 transition-colors flex justify-center items-center gap-2"
                  >
                    Claim Deal <ArrowRight size={18} />
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-3">*Standard horizontal flue swap.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW: TRUST BADGE STRIP */}
      <div className="bg-gray-100 border-y border-gray-200 py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Fully Accredited & Installing Top Brands
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            
            {/* Gas Safe - Make this one slightly larger as it is most important */}
            <img 
              src="/images/gas-safe.png" 
              alt="Gas Safe Register" 
              className="h-14 w-auto object-contain" 
            />
            
            {/* Divider Line (Optional visual separator) */}
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>

            {/* Worcester Bosch */}
            <img 
              src="/images/worcester.png" 
              alt="Worcester Bosch Accredited" 
              className="h-10 w-auto object-contain" 
            />

            {/* Ideal */}
            <img 
              src="/images/ideal.png" 
              alt="Ideal Boilers" 
              className="h-12 w-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* 2. SERVICES OVERVIEW */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-2 text-lg text-gray-600">Professional solutions for all your heating needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a 
                key={service.name} 
                href={service.name === 'New Boiler Installation' ? '#boiler-quote-tool' : '#services'}
                onClick={(e) => { e.preventDefault(); handleServiceClick(service.name); }} 
                className="block bg-gray-50 rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/cccccc/ffffff?text=Image'; e.currentTarget.onerror = null; }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#005C9E] transition-colors">{service.name}</h3>
                  {service.name === 'New Boiler Installation' && (
                    <span className="inline-block mt-3 px-3 py-1 bg-[#005C9E]/10 text-[#005C9E] rounded-full font-bold text-xs uppercase tracking-wide">
                      Get Free Estimate →
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED BOILER TOOL SECTION */}
      <section id="boiler-quote-tool" className="bg-blue-50 py-20 relative">
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#005C9E 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#005C9E]">Looking for a New Boiler?</h2>
            <p className="text-gray-600 mt-2 text-lg">Use our smart tool below to get an instant estimate in seconds.</p>
          </div>
          <BoilerTool />
        </div>
      </section>

      {/* 4. LANDLORDS SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-gray-700">
              <h2 className="text-3xl font-bold text-gray-900">Attention Landlords</h2>
              <p>
                Stay compliant and keep your tenants safe with our comprehensive gas services. We understand your legal obligations and offer reliable, efficient solutions to meet them.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Annual Gas Safety Certificates (CP12)</li>
                <li>Boiler Servicing & Maintenance</li>
                <li>Emergency Breakdown Cover</li>
                <li>Special Landlord-Only Deals</li>
              </ul>
              <button
                onClick={() => handleServiceClick('Landlord Deal: Gas Cert + Boiler Service')}
                className="mt-6 inline-block bg-[#D9232D] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 no-underline"
              >
                View Landlord Deal
              </button>
            </div>
            <div>
              <img 
                src="/images/landlord-deal.jpg" 
                alt="Specialist gas services for landlords"
                className="rounded-xl shadow-lg w-full h-auto transform hover:scale-[1.02] transition-transform"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Landlord+Services'; e.currentTarget.onerror = null; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW: GALLERY SECTION */}
     

      {/* 6. TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <a href="https://share.google/ugaj3yv88Z6JjYB77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-gray-600 hover:text-[#005C9E] font-medium transition-colors">
              <GoogleIcon />
              Verified on Google
            </a>
          </div>
          <div className="relative max-w-3xl mx-auto h-48 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100 mx-4">
                  <p className="text-lg text-gray-600 italic">"{testimonial.comment}"</p>
                  <p className="mt-4 font-bold text-gray-800 text-lg">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-[#005C9E] w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Service Area</h2>
            <p className="mt-2 text-lg text-gray-600">Covering Worcestershire and the West Midlands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h3 className="text-2xl font-bold text-center text-[#005C9E] mb-6">Worcestershire</h3>
              <ul className="space-y-3 text-center text-gray-700">
                {serviceAreas.worcestershire.map(area => <li key={area} className="font-medium">{area}</li>)}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h3 className="text-2xl font-bold text-center text-[#005C9E] mb-6">West Midlands</h3>
              <ul className="space-y-3 text-center text-gray-700">
                {serviceAreas.westMidlands.map(area => <li key={area} className="font-medium">{area}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5 focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-gray-800">{faq.q}</h3>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-5 h-5 text-[#005C9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}