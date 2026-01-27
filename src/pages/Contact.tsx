import { useState } from 'react';

export default function Contact() {
  // Added 'phone' to the state so you can capture their number
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Your actual email address
  const BUSINESS_EMAIL = "rahim.5123.rk@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // FIXED: Now uses FormSubmit instead of the broken /functions/send-email
      const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `General Inquiry from ${formState.name}`,
          _template: "table",
          
          // The data you will receive in the email
          Name: formState.name,
          Email: formState.email,
          Phone: formState.phone,
          Message: formState.message
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', message: '' }); // Clear form on success
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We're here to help. Contact us for quotes, questions, or emergencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>
              <p className="text-gray-600 mt-2">For immediate assistance or to speak with an engineer, please call us.</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">Phone:</p>
                <a href="tel:07480561846" className="text-2xl font-bold text-[#005C9E] hover:underline">07480 561 846</a>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-700">Email:</p>
                <a href="mailto:rahim.5123.rk@gmail.com" className="text-lg text-[#005C9E] hover:underline">rahim.5123.rk@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            {status === 'success' ? (
              <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-[#005C9E] font-bold underline hover:text-blue-800">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md border border-red-200">
                    Failed to send message. Please call us directly on 07480 561 846.
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#005C9E] focus:border-[#005C9E]" onChange={handleChange} value={formState.name} />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#005C9E] focus:border-[#005C9E]" onChange={handleChange} value={formState.email} />
                </div>

                {/* Added Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#005C9E] focus:border-[#005C9E]" onChange={handleChange} value={formState.phone} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#005C9E] focus:border-[#005C9E]" onChange={handleChange} value={formState.message}></textarea>
                </div>

                <div>
                  <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-[#D9232D] hover:bg-red-700 disabled:bg-gray-400 transition-colors">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
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