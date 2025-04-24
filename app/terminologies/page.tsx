"use client"
import { useState } from "react";

const terminologies = [
  { term: "Displacement", link: "https://en.wikipedia.org/wiki/Displacement_(ship)" },
  { term: "Draft", link: "https://en.wikipedia.org/wiki/Draft_(hull)" },
  { term: "Beam", link: "https://en.wikipedia.org/wiki/Beam_(nautical)" },
  { term: "Length", link: "https://en.wikipedia.org/wiki/Length_overall" },
  { term: "Depth", link: "https://www.britannica.com/topic/depth" },
  { term: "Freeboard", link: "https://en.wikipedia.org/wiki/Freeboard_(nautical)" },
  { term: "Deadweight", link: "https://en.wikipedia.org/wiki/Deadweight_tonnage" },
  { term: "Tonnage", link: "https://en.wikipedia.org/wiki/Tonnage" },
  { term: "Keel", link: "https://en.wikipedia.org/wiki/Keel" },
  { term: "Buoyancy", link: "https://en.wikipedia.org/wiki/Buoyancy" },
  { term: "Hull", link: "https://en.wikipedia.org/wiki/Hull_(watercraft)" },
  { term: "Stability", link: "https://en.wikipedia.org/wiki/Ship_stability" },
  { term: "Bow", link: "https://en.wikipedia.org/wiki/Bow_(ship)" },
  { term: "Stern", link: "https://en.wikipedia.org/wiki/Stern" },
  { term: "Block Coefficient", link: "https://www.nautilusshipping.com/form-coefficient-of-ship" },
  { term: "Midship Coefficient", link: "https://www.nautilusshipping.com/form-coefficient-of-ship" },
  { term: "Prismatic Coefficient", link: "https://www.nautilusshipping.com/form-coefficient-of-ship" },
  { term: "Waterplane Area Coefficient", link: "https://www.nautilusshipping.com/form-coefficient-of-ship" },
  { term: "Admiralty Coefficient", link: "https://enghandbook.com/naval-architecture/admiralty-coefficient/" },
  { term: "Metacenter", link: "https://www.britannica.com/science/metacentre" },
  { term: "Centre of Gravity", link: "https://www.marinesite.info/2014/10/what-is-center-of-gravity-center-of.html" },
  { term: "Centre of Buoyancy", link: "https://www.marinesite.info/2014/10/what-is-center-of-gravity-center-of.html" },
  { term: "Metacentric Radius", link: "https://www.sciencedirect.com/topics/engineering/metacentric-radius" },
  { term: "Metacentric Height", link: "https://en.wikipedia.org/wiki/Metacentric_height" }
];

const TerminologiesPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-12">
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