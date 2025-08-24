import React, { useState } from 'react';

// Service component to display and allow booking of services
export default function Services() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  // State for customer details
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const services = [
    { name: 'Gas Certificate', price: 75, description: 'A full inspection and certification of your gas appliances, essential for landlords.' },
    { name: 'Boiler Service', price: 60, description: 'Comprehensive annual servicing to ensure your boiler runs safely and efficiently.' },
    { name: 'Boiler Installation', price: 'Varies', description: 'Expert installation of new, high-efficiency boilers. Contact us for a custom quote.' },
    { name: 'Emergency Breakdown', price: 'Varies', description: 'Fast and reliable repairs for when your heating or hot water fails. Call for immediate assistance.' },
  ];

  // Handle changes in the customer detail input fields
  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle booking submission by calling our new backend function
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate) return;

    setStatus('sending');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_name: selectedService,
          booking_date: new Date(selectedDate).toLocaleDateString('en-GB'),
          customer_name: customerDetails.name,
          customer_email: customerDetails.email,
          customer_phone: customerDetails.phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');

    } catch (error) {
      console.error('Failed to send booking:', error);
      setStatus('error');
    }
  };

  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const renderFormContent = () => {
    switch (status) {
      case 'success':
        return (
          <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
            <h3 className="text-xl font-bold">Thank You, {customerDetails.name}!</h3>
            <p>Your booking request has been sent. We will contact you shortly to confirm.</p>
            <button onClick={() => { setStatus('idle'); setSelectedService(''); setCustomerDetails({name: '', email: '', phone: ''}) }} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Make Another Booking
            </button>
          </div>
        );
      case 'error':
        return (
           <div className="text-center p-4 bg-red-100 text-red-800 rounded-lg">
            <h3 className="text-xl font-bold">Something Went Wrong</h3>
            <p>We couldn't send your booking request. Please try again or call us directly.</p>
            <button onClick={() => setStatus('idle')} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
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
            
            {/* Customer Detail Fields */}
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
              <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Choose a Date</label>
              <input type="date" id="date" min={getTodayString()} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedService} />
            </div>
            
            <button type="submit" disabled={!selectedService || !selectedDate || status === 'sending'} className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Sending...' : 'Request Booking'}
            </button>
            {!selectedService && <p className="text-center text-red-500 mt-2">Please select a service first.</p>}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
              <p className="text-3xl font-bold text-blue-600 my-4">{typeof service.price === 'number' ? `£${service.price}` : service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button onClick={() => { setSelectedService(service.name); setStatus('idle'); document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Select Service
              </button>
            </div>
          ))}
        </div>
        <div id="booking-form" className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
          {renderFormContent()}
        </div>
      </div>
    </div>
  );
}