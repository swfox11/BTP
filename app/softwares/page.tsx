"use client";
import Link from "next/link";

const softwares = [
  {
    name: "Ansys",
    description: "ANSYS is a general-purpose finite element analysis (FEA) software package used in engineering simulation. It provides simulation capabilities for structural, thermal, fluid, and electromagnetic analyses.",
    downloadLink: "https://www.ansys.com/academic/students",
    documentationLink: "https://www.ansys.com/resource-center",
    logo: "/softwares/ansys.png" // Replace with your actual logo path
  },
  {
    name: "AutoCAD",
    description: "AutoCAD is a commercial computer-aided design (CAD) and drafting software application. It's widely used by naval architects for 2D and 3D design and drafting.",
    downloadLink: "https://www.autodesk.com/education/edu-software/overview",
    documentationLink: "https://www.autodesk.com/support",
    logo: "/softwares/autocad.png" // Replace with your actual logo path
  },
  {
    name: "Maxsurf",
    description: "Maxsurf is an integrated suite of naval architecture software for vessel design and analysis. It includes tools for hull modeling, stability analysis, and structural design.",
    downloadLink: "https://www.bentley.com/software/maxsurf/",
    documentationLink: "https://docs.bentley.com/",
    logo: "/softwares/maxsurf.jpg" // Replace with your actual logo path
  },
  {
    name: "MATLAB",
    description: "MATLAB is a programming platform for numerical computing and algorithm development, widely used in marine engineering for data analysis, modeling, and simulation.",
    downloadLink: "https://www.mathworks.com/academia/student.html",
    documentationLink: "https://www.mathworks.com/help/matlab/",
    logo: "/softwares/matlab.png" // Replace with your actual logo path
  }
];

export default function SoftwareResources() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center drop-shadow-lg text-[#2a526c] mb-12">
          Software Resources
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Access essential engineering software for your coursework and research. Below you will find download links and resources for each application.
        </p>

        {/* Software Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwares.map((software, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#48bf91]"
            >
              <div className="flex items-start mb-4">
                {software.logo && (
                  <img 
                    src={software.logo} 
                    alt={`${software.name} logo`}
                    className="w-16 h-16 object-contain mr-4"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-semibold text-[#2a526c] mb-2">
                    {software.name}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {software.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link
                  href={software.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#48bf91] hover:bg-[#3ca97d] text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Download
                </Link>
                <Link
                  href={software.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Documentation
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}