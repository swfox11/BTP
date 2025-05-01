import Link from 'next/link';
import React from 'react';

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-4">Publications</h1>
          <p className="text-lg text-gray-700">
            Explore our department&apos;s research contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Books Button */}
          

          {/* Journals Button */}
          <Link
            href="/publications/journals"
            className="group block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 text-center"
          >
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Journals</h3>
            <p className="text-gray-700">
              View our research work published in journals
            </p>
          </Link>

          {/* Conferences Button */}
          <Link
            href="/publications/conferences"
            className="group block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conferences</h3>
            <p className="text-gray-700">
              See our conference papers and presentations
            </p>
          </Link>

          <Link
            href="/publications/books"
            className="group block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Books</h3>
            <p className="text-gray-700">
              Explore our department&apos;s published books
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;