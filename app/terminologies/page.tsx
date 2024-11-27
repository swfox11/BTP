"use client"
import { useState } from "react";

const terminologies = [
  { term: "Displacement", link: "https://en.wikipedia.org/wiki/Displacement_(fluid_mechanics)" },
  { term: "Draft", link: "https://en.wikipedia.org/wiki/Draft_(hull)" },
  { term: "Beam", link: "https://en.wikipedia.org/wiki/Beam_(nautical)" },
  { term: "Length", link: "https://en.wikipedia.org/wiki/Length_overall" },
  { term: "Depth", link: "https://en.wikipedia.org/wiki/Ship_measurements" },
  { term: "Freeboard", link: "https://en.wikipedia.org/wiki/Freeboard_(nautical)" },
  { term: "Deadweight", link: "https://en.wikipedia.org/wiki/Deadweight_tonnage" },
  { term: "Tonnage", link: "https://en.wikipedia.org/wiki/Tonnage" },
  { term: "Keel", link: "https://en.wikipedia.org/wiki/Keel" },
  { term: "Buoyancy", link: "https://en.wikipedia.org/wiki/Buoyancy" },
  { term: "Hydrostatics", link: "https://en.wikipedia.org/wiki/Marine_hydrostatics" },
  { term: "Stability", link: "https://en.wikipedia.org/wiki/Ship_stability" },
  { term: "Bow", link: "https://en.wikipedia.org/wiki/Bow_(ship)" },
  { term: "Stern", link: "https://en.wikipedia.org/wiki/Stern" },
  { term: "Different Types of Plans", link: "https://en.wikipedia.org/wiki/Ship_design_and_construction" },
  { term: "Block Coefficient", link: "https://en.wikipedia.org/wiki/Block_coefficient" },
  { term: "Midship Coefficient", link: "https://en.wikipedia.org/wiki/Ship_measurements" },
  { term: "Prismatic Coefficient", link: "https://en.wikipedia.org/wiki/Ship_measurements" },
  { term: "Waterplane Area Coefficient", link: "https://en.wikipedia.org/wiki/Ship_measurements" },
  { term: "Admiralty Coefficient", link: "https://en.wikipedia.org/wiki/Admiralty_coefficients" },
  { term: "Metacenter", link: "https://en.wikipedia.org/wiki/Metacentric_height" },
  { term: "Centre of Gravity", link: "https://en.wikipedia.org/wiki/Center_of_gravity" },
  { term: "Centre of Buoyancy", link: "https://en.wikipedia.org/wiki/Buoyancy#Center_of_buoyancy" },
  { term: "Metacentric Radius", link: "https://en.wikipedia.org/wiki/Metacentric_height" },
  { term: "Metacentric Height", link: "https://en.wikipedia.org/wiki/Metacentric_height" }
];

const TerminologiesPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Key Terminologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {terminologies.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#48bf91]"
          >
            <h3
              className="text-2xl font-semibold text-[#48bf91] mb-3 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              {item.term}
            </h3>
            {expanded === index && (
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminologiesPage;
