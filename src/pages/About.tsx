export default function About() {
  // Key values for the company
  const values = [
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'As Gas Safe registered engineers, your safety is our highest priority. We adhere to the strictest industry standards on every job, ensuring your home and family are protected.'
    },
    {
      icon: '💬',
      title: 'Clear Communication',
      description: 'We believe in honesty and transparency. From clear, upfront pricing to explaining the work we carry out, we ensure you\'re informed every step of the way.'
    },
    {
      icon: '✅',
      title: 'Quality Workmanship',
      description: 'With years of hands-on experience, we pride ourselves on delivering reliable, high-quality work that stands the test of time, whether it\'s a small repair or a full installation.'
    }
  ];

  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* --- Top Section: Introduction --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="prose prose-lg text-gray-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Your Local Gas Experts in <span className="text-[#005C9E]">Worcestershire</span>
            </h1>
            <p>
              Welcome to <strong>Blue Flame Gas Services</strong>. We are a dedicated team of Gas Safe registered engineers committed to providing top-tier heating and gas solutions across Worcestershire and the West Midlands.
            </p>
            <p>
              Our mission is simple: to keep your home warm, safe, and efficient. We understand that a functioning boiler is essential for your comfort, and we approach every job with the professionalism and attention to detail you deserve.
            </p>
          </div>
          <div>
            <img 
              src="/images/about-us.webp" 
              alt="Team of professional engineers"
              className="rounded-xl shadow-lg w-full h-auto"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/ffffff?text=About+Us'; e.currentTarget.onerror = null; }}
            />
          </div>
        </div>

        {/* --- Middle Section: Our Values --- */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment to You</h2>
            <p className="mt-2 text-lg text-gray-600">The principles that guide our work every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
