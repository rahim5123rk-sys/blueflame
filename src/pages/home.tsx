import { useState, useEffect } from 'react';

// Define props for the Home component
interface HomeProps {
  setCurrentPage: (page: string) => void;
  setPreselectedService: (service: string) => void;
}

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
    { name: 'Abid P.', comment: 'The boys from Blue Flame saved the day when my boiler wasn\'t turning on, and straight away, they found the issue and resolved it. They have done numerous jobs for me, from boiler service to fitting new heaters around the house. They\'re very good at what they do.' },
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleServiceClick = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentPage('Services');
  };
  
  const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
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

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Reliable Gas Engineering</span>
              <span className="block text-[#005C9E]">You Can Trust.</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Your local experts covering Worcestershire & the West Midlands for boiler servicing, safety certificates, and installations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage('Services')}
                className="inline-block w-full sm:w-auto bg-[#D9232D] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Request a Service
              </button>
              <a
                href="https://wa.me/447864954123"
                target="_blank"
                rel="noopener noreferrer"
                // NEW: Darker green for better contrast
                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                <WhatsAppIcon />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-2 text-lg text-gray-600">Professional solutions for all your heating needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a key={service.name} href="#services" onClick={() => handleServiceClick(service.name)} className="block bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/cccccc/ffffff?text=Image'; e.currentTarget.onerror = null; }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Landlords Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-gray-700">
              <h2 className="text-3xl font-bold text-gray-900">Attention Landlords</h2>
              <p>
                Stay compliant and keep your tenants safe with our comprehensive gas services. We understand your legal obligations and offer reliable, efficient solutions to meet them.
              </p>
              <ul>
                <li>Annual Gas Safety Certificates (CP12)</li>
                <li>Boiler Servicing & Maintenance</li>
                <li>Emergency Breakdown Cover</li>
                <li>Special Landlord-Only Deals</li>
              </ul>
              <button
                onClick={() => handleServiceClick('Landlord Deal: Gas Cert + Boiler Service')}
                className="mt-4 inline-block bg-[#D9232D] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 no-underline"
              >
                View Landlord Deal
              </button>
            </div>
            <div>
              <img 
                src="/images/landlord-deal.jpg" 
                alt="Specialist gas services for landlords"
                className="rounded-xl shadow-lg w-full h-auto"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Landlord+Services'; e.currentTarget.onerror = null; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <a href="https://share.google/ugaj3yv88Z6JjYB77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-gray-600 hover:text-[#005C9E]">
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
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <p className="text-lg text-gray-600 italic">"{testimonial.comment}"</p>
                  <p className="mt-4 font-bold text-gray-800">- {testimonial.name}</p>
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
                className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#005C9E]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Service Area</h2>
            <p className="mt-2 text-lg text-gray-600">Covering Worcestershire and the West Midlands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold text-center text-[#005C9E] mb-4">Worcestershire</h3>
              <ul className="space-y-2 text-center text-gray-700">
                {serviceAreas.worcestershire.map(area => <li key={area}>{area}</li>)}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold text-center text-[#005C9E] mb-4">West Midlands</h3>
              <ul className="space-y-2 text-center text-gray-700">
                {serviceAreas.westMidlands.map(area => <li key={area}>{area}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-lg text-[#005C9E]">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}