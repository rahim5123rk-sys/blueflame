import React, { useState, useEffect } from 'react';

// Define props for the Home component, including a function to change the page
interface HomeProps {
  setCurrentPage: (page: string) => void;
}

// Home component for the landing page
export default function Home({ setCurrentPage }: HomeProps) {
  const services = [
    { name: 'Boiler Servicing', image: '/images/boiler-service.jpg' },
    { name: 'Gas Certificates', image: '/images/gas-certificate.jpg' },
    { name: 'Boiler Installations', image: '/images/boiler-install.jpg' },
    { name: 'Emergency Repairs', image: '/images/emergency-repair.jpg' },
  ];

  const features = [
    { title: 'Local & Reliable', description: 'Proudly serving Worcestershire and the West Midlands with prompt, professional service you can count on.', icon: '📍' },
    { title: 'Gas Safe Registered', description: 'Your safety is our priority. All our engineers are fully qualified and registered for your peace of mind.', icon: '🛡️' },
    { title: 'Transparent Pricing', description: 'We offer clear, upfront quotes with no hidden fees, ensuring you get the best value for your money.', icon: '💬' },
  ];

  const serviceAreas = {
    worcestershire: ['Worcester', 'Droitwich Spa', 'Malvern', 'Redditch', 'Bromsgrove', 'Evesham', 'Pershore'],
    westMidlands: ['Birmingham', 'Dudley', 'Wolverhampton', 'Walsall', 'Solihull', 'Stourbridge', 'Halesowen'],
  };

  const testimonials = [
    { name: 'Sarah L.', comment: 'Incredibly professional and efficient. The engineer arrived on time, did a thorough boiler service, and left everything spotless. Highly recommend Blue Flame!' },
    { name: 'Tom H.', comment: 'Needed a landlord gas safety certificate at short notice. They were able to fit me in quickly and the whole process was seamless. Excellent service.' },
    { name: 'Emily R.', comment: 'Our boiler broke down in the middle of winter. Blue Flame responded to our emergency call immediately and had it fixed the same day. Lifesavers!' },
  ];

  // NEW: FAQs for the new section
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
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [testimonials.length]);


  // WhatsApp SVG Icon
  const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
                href="https://wa.me/447480561846"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
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
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/cccccc/ffffff?text=Image'; e.currentTarget.onerror = null; }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Blue Flame?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          <div className="relative max-w-3xl mx-auto h-48">
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

      {/* NEW: FAQ Section */}
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