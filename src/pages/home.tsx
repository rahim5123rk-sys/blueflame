

// Define props for the Home component, including a function to change the page
interface HomeProps {
  setCurrentPage: (page: string) => void;
}

// Home component for the landing page
export default function Home({ setCurrentPage }: HomeProps) {
  // Array of services offered
  const services = [
    { name: 'Boiler Servicing', icon: '🔧' },
    { name: 'Gas Certificates', icon: '📜' },
    { name: 'Boiler Installations', icon: '🔥' },
    { name: 'Emergency Repairs', icon: '⚠️' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Reliable Gas Engineering</span>
              <span className="block text-blue-600">You Can Trust.</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Your local experts in boiler servicing, safety certificates, and installations. Keeping your home warm and safe.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setCurrentPage('Services')}
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Book a Service
              </button>
              <button
                onClick={() => setCurrentPage('Contact')}
                className="inline-block bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105"
              >
                Get a Quote
              </button>
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gas Safe Registered</h3>
              <p className="text-gray-600">Our engineers are fully qualified and registered, ensuring all work is done to the highest safety standards.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focused</h3>
              <p className="text-gray-600">We pride ourselves on excellent customer service, clear communication, and transparent pricing.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
              <p className="text-gray-600">With years of experience, we deliver reliable, high-quality workmanship on every job, big or small.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}