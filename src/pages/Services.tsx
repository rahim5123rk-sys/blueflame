import React, { useState, useEffect } from 'react';

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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // YOUR EMAIL - Bookings come here
  const BUSINESS_EMAIL = "rahim.5123.rk@gmail.com";

  const services = [
    { name: 'Landlord Deal: Gas Cert + Boiler Service', price: '£100 (Save £20)', description: 'Our best value package for landlords. Covers your annual legal requirements and boiler maintenance in one simple visit.' },
    { name: 'Annual Boiler Service', price: '£60', description: 'A comprehensive annual check-up to ensure your boiler is safe, efficient, and reliable.' },
    { name: 'Landlord Gas Safety Certificate (CP12)', price: '£60', description: 'A full inspection and certification of all gas appliances, legally required for rental properties.' },
    { name: 'Boiler Breakdown & Repair', price: 'Callout Fee', description: 'Fast and effective diagnosis and repair for when your heating or hot water fails.' },
    { name: 'New Boiler Installation', price: 'Free Quote', description: 'Expert installation of modern, high-efficiency boilers tailored to your home\'s needs.' },
    { name: 'Radiator System Clean', price: 'From £200', description: 'A deep clean of your central heating system to remove sludge, improve efficiency, and reduce bills.' },
  ];

  // Handle pre-selection from Home page
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      setTimeout(() => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setPreselectedService('');
    }
  }, [preselectedService, setPreselectedService]);

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  // --- FORM SUBMIT LOGIC ---
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;
    setStatus('sending');
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Booking Request: ${selectedService}`,
          _replyto: customerDetails.email, // Allows you to hit "Reply" to email the customer
          _template: "table",
          _captcha: "false",
          
          // Data
          Service: selectedService,
          Customer_Name: customerDetails.name,
          Phone: customerDetails.phone,
          Email: customerDetails.email,
          Preferred_Contact: customerDetails.preference,
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
          <div className="text-center p-8 bg-green-50 text-green-800 rounded-xl border border-green-200">
            <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
            <p className="mb-6">Thank you, <strong>{customerDetails.name}</strong>. We have received your request for <strong>{selectedService}</strong>.</p>
            <p className="text-sm">We will contact you via <strong>{customerDetails.preference}</strong> shortly to confirm a time.</p>
            <button 
              onClick={() => { setStatus('idle'); setSelectedService(''); setCustomerDetails({name: '', email: '', phone: '', preference: 'Email'}) }} 
              className="mt-6 bg-[#005C9E] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Make Another Request
            </button>
          </div>
        );
      case 'error':
        return (
           <div className="text-center p-8 bg-red-50 text-red-800 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold mb-2">Something Went Wrong</h3>
            <p className="mb-6">We couldn't process your request automatically.</p>
            <a href="tel:07480561846" className="block w-full bg-[#D9232D] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 mb-4">
              Call 07480 561 846 Instead
            </a>
            <button onClick={() => setStatus('idle')} className="text-[#005C9E] font-bold underline">
              Try Again
            </button>
          </div>
        );
      default:
        return (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Selected Service</label>
              <input type="text" value={selectedService || 'Please select a service above'} readOnly className="w-full p-4 bg-gray-100 border-2 border-gray-200 rounded-xl font-medium text-gray-600 outline-none" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={customerDetails.name} onChange={handleDetailChange} required className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#005C9E] outline-none transition-colors" disabled={!selectedService} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={customerDetails.phone} onChange={handleDetailChange} required className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#005C9E] outline-none transition-colors" disabled={!selectedService} />
              </div>
            </div>

             <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={customerDetails.email} onChange={handleDetailChange} required className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#005C9E] outline-none transition-colors" disabled={!selectedService} />
            </div>
            
            <div>
              <label htmlFor="preference" className="block text-gray-700 font-bold mb-2">Preferred Contact Method</label>
              <select id="preference" name="preference" value={customerDetails.preference} onChange={handleDetailChange} required className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-[#005C9E] outline-none transition-colors" disabled={!selectedService}>
                <option>Email</option>
                <option>Phone Call</option>
                <option>Text Message</option>
              </select>
            </div>

            <button type="submit" disabled={!selectedService || status === 'sending'} className="w-full bg-[#D9232D] text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg mt-4 text-lg">
              {status === 'sending' ? 'Sending Request...' : 'Request Callback'}
            </button>
            
            {!selectedService && <p className="text-center text-red-500 font-medium mt-2">Please select a service from the list above first.</p>}
          </form>
        );
    }
  };

  return (
    <div className="bg-gray-50 animate-fadeIn min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#005C9E]">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Select a service below to request a booking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 min-h-[56px] flex items-center">{service.name}</h2>
              <p className="text-3xl font-extrabold text-[#005C9E] my-4">{service.price}</p>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
              <button 
                onClick={() => { 
                  setSelectedService(service.name); 
                  setStatus('idle'); 
                  // Use optional chaining for safety
                  const formEl = document.getElementById('booking-form');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full mt-auto bg-gray-100 text-[#005C9E] font-bold py-3 px-4 rounded-xl hover:bg-[#005C9E] hover:text-white transition-colors border-2 border-[#005C9E]"
              >
                Select This Service
              </button>
            </div>
          ))}
        </div>

        <div id="booking-form" className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Complete Your Request
          </h2>
          {renderFormContent()}
        </div>

      </div>
    </div>
  );
}