"use client"
import { useState } from "react";

const terminologies = [
  { 
    term: "Displacement", 
    definition: "The total weight of water displaced by a vessel's hull when floating, equal to the ship's total weight including cargo, fuel, and stores.", 
    link: "https://en.wikipedia.org/wiki/Displacement_(ship)" 
  },
  { 
    term: "Draft", 
    definition: "The vertical distance between the waterline and the lowest point of the hull, determining the minimum depth of water a ship can safely navigate.", 
    link: "https://en.wikipedia.org/wiki/Draft_(hull)" 
  },
  { 
    term: "Beam", 
    definition: "The maximum width of a ship measured at its widest point, typically at the midship section, affecting stability and capacity.", 
    link: "https://en.wikipedia.org/wiki/Beam_(nautical)" 
  },
  { 
    term: "Length", 
    definition: "The overall measurement of a ship from the foremost point of the bow to the aftermost point of the stern, excluding any attachments.", 
    link: "https://en.wikipedia.org/wiki/Length_overall" 
  },
  { 
    term: "Depth", 
    definition: "The vertical distance measured from the top of the keel to the underside of the uppermost continuous deck at the ship's side.", 
    link: "https://www.britannica.com/topic/depth" 
  },
  { 
    term: "Freeboard", 
    definition: "The distance from the waterline to the upper deck level, determining reserve buoyancy and affecting a ship's stability and load carrying capacity.", 
    link: "https://en.wikipedia.org/wiki/Freeboard_(nautical)" 
  },
  { 
    term: "Deadweight", 
    definition: "The total weight a ship can carry including cargo, fuel, fresh water, ballast, stores, passengers, and crew, excluding the ship's own weight.", 
    link: "https://en.wikipedia.org/wiki/Deadweight_tonnage" 
  },
  { 
    term: "Tonnage", 
    definition: "A measurement of the cargo-carrying capacity of a merchant vessel, calculated based on volume rather than weight, used for registration and fees.", 
    link: "https://en.wikipedia.org/wiki/Tonnage" 
  },
  { 
    term: "Keel", 
    definition: "The principal structural member running longitudinally along the bottom centerline of a vessel, forming the backbone that supports the entire hull structure.", 
    link: "https://en.wikipedia.org/wiki/Keel" 
  },
  { 
    term: "Buoyancy", 
    definition: "The upward force exerted by water on a submerged or floating object, equal to the weight of the water displaced by the object.", 
    link: "https://en.wikipedia.org/wiki/Buoyancy" 
  },
  { 
    term: "Hull", 
    definition: "The watertight outer shell of a ship that provides both buoyancy and structural integrity, designed to withstand hydrostatic and hydrodynamic forces.", 
    link: "https://en.wikipedia.org/wiki/Hull_(watercraft)" 
  },
  { 
    term: "Stability", 
    definition: "A vessel's ability to return to an upright position after being heeled by external forces like wind or waves, crucial for safety.", 
    link: "https://en.wikipedia.org/wiki/Ship_stability" 
  },
  { 
    term: "Bow", 
    definition: "The forward-most part of a ship's hull, designed to reduce water resistance and often shaped to cut through waves efficiently.", 
    link: "https://en.wikipedia.org/wiki/Bow_(ship)" 
  },
  { 
    term: "Stern", 
    definition: "The rear section of a ship's hull, typically housing propulsion systems and rudder, with shapes varying based on vessel type and function.", 
    link: "https://en.wikipedia.org/wiki/Stern" 
  },
  { 
    term: "Block Coefficient", 
    definition: "A dimensionless number representing the ratio of a ship's underwater volume to the volume of a rectangular block enclosing the submerged hull.", 
    link: "https://www.slideshare.net/slideshow/ship-form-coefficients/44027721" 
  },
  { 
    term: "Midship Coefficient", 
    definition: "The ratio of the underwater cross-sectional area of the midship section to the area of a rectangle of the same width and depth.", 
    link: "https://www.slideshare.net/slideshow/ship-form-coefficients/44027721" 
  },
  { 
    term: "Prismatic Coefficient", 
    definition: "A measure of hull fineness calculated as the ratio of immersed volume to the volume of a prism with length equal to LWL.", 
    link: "https://www.slideshare.net/slideshow/ship-form-coefficients/44027721" 
  },
  { 
    term: "Waterplane Area Coefficient", 
    definition: "The ratio of the actual waterplane area to the area of a rectangle of the same length and maximum beam at the waterline.", 
    link: "https://www.slideshare.net/slideshow/ship-form-coefficients/44027721" 
  },
  { 
    term: "Admiralty Coefficient", 
    definition: "A dimensionless value relating a ship's displacement, speed, and shaft power, used to compare the efficiency of different hull forms.", 
    link: "https://enghandbook.com/naval-architecture/admiralty-coefficient/" 
  },
  { 
    term: "Metacenter", 
    definition: "The theoretical intersection point of successive lines of buoyancy as a ship heels through small angles, crucial for stability calculations.", 
    link: "https://www.britannica.com/science/metacentre" 
  },
  { 
    term: "Centre of Gravity", 
    definition: "The point at which the entire weight of the ship and its contents may be considered to act vertically downward.", 
    link: "https://www.marinesite.info/2014/10/what-is-center-of-gravity-center-of.html" 
  },
  { 
    term: "Centre of Buoyancy", 
    definition: "The geometric center of the underwater volume of a floating body, through which the buoyant force acts vertically upward.", 
    link: "https://www.marinesite.info/2014/10/what-is-center-of-gravity-center-of.html" 
  },
  { 
    term: "Metacentric Radius", 
    definition: "The vertical distance between the center of buoyancy and the metacenter when a ship is in its upright position.", 
    link: "https://www.sciencedirect.com/topics/engineering/metacentric-radius" 
  },
  { 
    term: "Metacentric Height", 
    definition: "The distance between a ship's center of gravity and its metacenter, directly affecting the vessel's initial stability characteristics.", 
    link: "https://en.wikipedia.org/wiki/Metacentric_height" 
  }
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
            className="bg-[#f4f4f4] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#48bf91]"
          >
            <h3
              className="text-2xl font-semibold text-[#48bf91] mb-3 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              {item.term}
            </h3>
            {expanded === index && (
              <div className="space-y-3">
                <p className="text-gray-500 text-justify">{item.definition}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-700 hover:underline mt-2 font-medium"
                >
                  Learn more →
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