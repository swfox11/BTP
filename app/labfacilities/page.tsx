import React from 'react';

const LabFacilities = () => {
  // Array of YouTube video IDs (the part after 'v=' in the URL)
  const videos = [
    { id: 'aKR-YY3uSMw', title: 'Friction Stir Welding (FSW)' },
    { id: '5pjetUMAMIU', title: 'Sub-merged Arc Welding (SAW)' },
    { id: 'sA2vUWTvyfM', title: 'Wave Maker at Hydrodynamics Laboratory' },
    // { id: 'JGwWNGJdvx8', title: 'Student Experiments' },
    // { id: 'kJQP7kiw5Fk', title: 'Lab Safety Protocols' },
    // { id: 'RgKAFK5djSk', title: 'Innovation Center' },
    // { id: 'OPf0YbXqDm0', title: 'Breakthrough Research' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-center text-[#2a526c] mb-10 drop-shadow-lg">
            Lab Facilities 
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-gray-700">
            Discover our state-of-the-art research laboratories, advanced equipment, and innovative facilities at the department
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl">
                <iframe
                  className="w-full h-56 p-3 rounded-xl"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-700">{video.title}</h3>
                <div className="mt-4 flex justify-end">
                  <a
                    href={`https://youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#48bf91] hover:bg-[#3ca97d]"
            >
              Schedule a Lab Tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabFacilities;