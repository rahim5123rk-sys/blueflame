

// About component to share company information
export default function About() {
  return (
    <div className="bg-white animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Blue Flame</h1>
            <p className="mt-4 text-xl text-gray-600">Your Trusted Partner in Gas Engineering</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Welcome to <strong>Blue Flame Gas Engineering</strong>. We are a dedicated team of Gas Safe registered engineers committed to providing top-tier heating and gas services. Founded on the principles of safety, reliability, and customer satisfaction, we have built a reputation for excellence across the region.
            </p>
            <p>
              Our mission is simple: to keep your home warm, safe, and efficient. We understand that a functioning boiler and safe gas appliances are essential for your comfort and peace of mind. That's why we approach every job with the utmost professionalism and attention to detail, whether it's a routine boiler service, a critical safety inspection, or a brand new boiler installation.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8">Our Commitment to You</h2>
            <ul>
              <li><strong>Safety First:</strong> As Gas Safe registered professionals, safety is at the core of everything we do. We adhere strictly to industry regulations to ensure your home and family are protected.</li>
              <li><strong>Honest Pricing:</strong> We believe in transparency. You'll receive clear, upfront pricing with no hidden fees, so you know exactly what to expect.</li>
              <li><strong>Reliable Service:</strong> We respect your time. Our engineers arrive promptly, work efficiently, and leave your home clean and tidy.</li>
              <li><strong>Expert Advice:</strong> We're not just here to fix problems. We offer expert advice on how to maintain your heating system and improve its efficiency, saving you money in the long run.</li>
            </ul>
            <p>
              Thank you for considering Blue Flame Gas Engineering. We look forward to serving you and becoming your trusted partner for all your heating needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

