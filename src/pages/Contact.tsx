import { useState } from 'react';

// Contact component for user inquiries
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send an email)
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We're here to help. Contact us for quotes, questions, or emergencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>
              <p className="text-gray-600 mt-2">For immediate assistance or to speak with an engineer, please call us.</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">Phone:</p>
                {/* NEW: Updated Phone Number */}
                <a href="tel:07480561846" className="text-2xl font-bold text-[#005C9E] hover:underline">07480 561 846</a>
              </div>
            </div>
             <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              <div className="mt-4 text-gray-700">
                <p><strong>Mon - Sat:</strong> 8:00 AM - 6:00 PM</p>
                
                <p><strong>Sunday:</strong> Closed</p>
                <p className="mt-2 font-semibold">24/7 Emergency Call-Outs Available</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            {isSubmitted ? (
              <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange}></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D9232D] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}