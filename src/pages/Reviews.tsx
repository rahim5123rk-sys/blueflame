
// Reviews component to display customer testimonials
export default function Reviews() {
  // Array of fake reviews
  const reviews = [
    { name: 'Sarah L.', rating: 5, comment: 'Incredibly professional and efficient. The engineer arrived on time, did a thorough boiler service, and left everything spotless. Highly recommend Blue Flame!' },
    { name: 'Tom H.', rating: 5, comment: 'Needed a landlord gas safety certificate at short notice. They were able to fit me in quickly and the whole process was seamless. Excellent service.' },
    { name: 'Emily R.', rating: 5, comment: 'Our boiler broke down in the middle of winter. Blue Flame responded to our emergency call immediately and had it fixed the same day. Lifesavers!' },
    { name: 'David P.', rating: 4, comment: 'Great job on our new boiler installation. The team was friendly, knowledgeable, and the new system works perfectly. A very fair price too.' },
    { name: 'Jessica M.', rating: 5, comment: 'Fantastic customer service from start to finish. They explained everything clearly and were very respectful of my home. I will definitely use them again.' },
    { name: 'Michael B.', rating: 5, comment: 'I have used Blue Flame for my annual boiler service for the past three years. Consistently reliable, professional, and trustworthy. Top quality work.' },
  ];

  // Helper function to render star ratings
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Customer Reviews</h1>
          <p className="mt-4 text-xl text-gray-600">See what our satisfied customers have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex-grow">
                <StarRating rating={review.rating} />
                <p className="text-gray-600 my-4">"{review.comment}"</p>
              </div>
              <p className="font-bold text-gray-800 mt-auto">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}