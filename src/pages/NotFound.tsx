

interface NotFoundProps {
  setCurrentPage: (page: string) => void;
}

export default function NotFound({ setCurrentPage }: NotFoundProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white text-center px-4">
      <div>
        <h1 className="text-6xl font-extrabold text-[#005C9E]">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-600">Sorry, we couldn't find the page you were looking for.</p>
        <div className="mt-8">
          <button
            onClick={() => setCurrentPage('Home')}
            className="inline-block bg-[#D9232D] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}