import React, { useState, useEffect } from 'react';

// Updated props to receive the pre-selected service
interface ServicesProps {
  preselectedService: string;
  setPreselectedService: (service: string) => void;
}

export default function Services({ preselectedService, setPreselectedService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    preference: 'Email',
  });
  const [status, setStatus] = useState('idle');

  const services = [
    { name: 'Landlord Deal: Gas Cert + Boiler Service', price: '£100 (Save £20)', description: 'Our best value package for landlords. Covers your annual legal requirements and boiler maintenance in one simple visit.' },
    { name: 'Annual Boiler Service', price: '£60', description: 'A comprehensive annual check-up to ensure your boiler is safe, efficient, and reliable.' },
    { name: 'Landlord Gas Safety Certificate (CP12)', price: '£60', description: 'A full inspection and certification of all gas appliances, legally required for rental properties.' },
    { name: 'Boiler Breakdown & Repair', price: 'Callout Fee', description: 'Fast and effective diagnosis and repair for when your heating or hot water fails.' },
    { name: 'New Boiler Installation', price: 'Free Quote', description: 'Expert installation of modern, high-efficiency boilers tailored to your home\'s needs.' },
    { name: 'Radiator System Clean', price: 'From £200', description: 'A deep clean of your central heating system to remove sludge, improve efficiency, and reduce bills.' },
  ];

  // Effect to handle the pre-selected service from the homepage
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      // Use a short timeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the pre-selection so it doesn't persist on re-visits
      setPreselectedService('');
    }
  }, [preselectedService, setPreselectedService]);

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    setStatus('sending');
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_name: selectedService,
          customer_name: customerDetails.name,
          customer_email: customerDetails.email,
          customer_phone: customerDetails.phone,
          contact_preference: customerDetails.preference,
        }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setStatus('success');
    } catch (error) {
      console.error('Failed to send booking:', error);
      setStatus('error');
    }
  };

  const renderFormContent = () => {
    switch (status) {
      case 'success':
        return (
          <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
            <h3 className="text-xl font-bold">Thank You, {customerDetails.name}!</h3>
            <p>Your request has been sent. We will contact you via {customerDetails.preference.toLowerCase()} shortly to arrange a booking.</p>
            <button onClick={() => { setStatus('idle'); setSelectedService(''); setCustomerDetails({name: '', email: '', phone: '', preference: 'Email'}) }} className="mt-4 bg-[#005C9E] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800">
              Make Another Request
            </button>
          </div>
        );
      case 'error':
        return (
           <div className="text-center p-4 bg-red-100 text-red-800 rounded-lg">
            <h3 className="text-xl font-bold">Something Went Wrong</h3>
            <p>We couldn't send your request. Please try again or call us directly.</p>
            <button onClick={() => setStatus('idle')} className="mt-4 bg-[#005C9E] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800">
              Try Again
            </button>
          </div>
        );
      default:
        return (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Selected Service</label>
              <input type="text" value={selectedService || 'Please select a service above'} readOnly className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input type="text" id="name" name="name" value={customerDetails.name} onChange={handleDetailChange} required className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedService} />
            </div>
             <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input type="email" id="email" name="email" value={customerDetails.email} onChange={handleDetailChange} required className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedService} />
            </div>
             <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={customerDetails.phone} onChange={handleDetailChange} required className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedService} />
            </div>
            <div>
              <label htmlFor="preference" className="block text-gray-700 font-medium mb-1">How should we contact you?</label>
              <select id="preference" name="preference" value={customerDetails.preference} onChange={handleDetailChange} required className="w-full p-3 border border-gray-300 rounded-lg bg-white" disabled={!selectedService}>
                <option>Email</option>
                <option>Phone Call</option>
                <option>Text Message</option>
              </select>
            </div>
            <button type="submit" disabled={!selectedService || status === 'sending'} className="w-full bg-[#D9232D] text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Sending...' : 'Request a Callback'}
            </button>
            {!selectedService && <p className="text-center text-red-500 mt-2">Please select a service from the list above first.</p>}
          </form>
        );
    }
  };

  return (
    <div className="bg-gray-50 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">Professional solutions for your home's heating and gas systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
              <p className="text-3xl font-bold text-[#005C9E] my-4">{service.price}</p>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <button onClick={() => { setSelectedService(service.name); setStatus('idle'); document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full mt-auto bg-[#005C9E] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
                Request This Service
              </button>
            </div>
          ))}
        </div>
        <div id="booking-form" className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Request a Callback</h2>
          {renderFormContent()}
        </div>
      </div>
    </div>
  );
}