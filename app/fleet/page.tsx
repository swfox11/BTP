"use client";

// import Image from 'next/image';
// import { useState } from 'react';

// const FleetPage = () => {
//   // Placeholder for interactivity
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">2024 World Fleet Overview</h1>

//       {/* Section: Overview */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Global Fleet in 2024</h2>
//         <p className="text-lg p-4 ">
//           In 2023 and the first half of 2024, the global fleet grew at an annual rate of 3.4%, 
//           reaching a total capacity of approximately 2.4 billion dead weight tons. This reflects 
//           ongoing challenges, including geopolitical instability and climate-related disruptions.
//         </p>
//         <Image
//           src="/images/Panama_Canal.png"
//           alt="Global Fleet Overview"
//           width={800}
//           height={400}
//           className="my-4 mx-auto"
//         />
//       </section>

//       {/* Section: Fleet Growth Trends */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Fleet Growth Trends</h2>
//         <p className="text-lg">
//           While the global fleet expanded by 3.4% in 2023, this growth was uneven across vessel 
//           types. For example, container ship capacity grew by nearly 8%, while tanker growth remained 
//           under 2%. This trend highlights changes in maritime trade and fleet composition.
//         </p>
//         <Image
//           src="/images/Development_table.png"
//           alt="Fleet Growth Trends"
//           width={800}
//           height={400}
//           className="my-4 mx-auto"
//         />
//       </section>

//       {/* Section: Fleet Composition */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Fleet Composition by Vessel Type</h2>
//         <p className="text-lg">
//           The world's fleet consists of a mix of bulk carriers, tankers, container ships, and 
//           specialized vessels. Bulk carriers make up 42.7% of the total capacity, followed by 
//           oil tankers at 28.3% and container ships at 14.0%.
//         </p>
//         <Image
//           src="/images/trends_in_yearly.png"
//           alt="Fleet Composition"
//           width={800}
//           height={400}
//           className="my-4 mx-auto"
//         />
//       </section>

//       {/* Section: Shipping Routes and Disruptions */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Major Shipping Routes and Disruptions</h2>
//         <p className="text-lg">
//           Geopolitical tensions and climate change have disrupted key routes like the Suez 
//           and Panama Canals. In 2023, ships were rerouted around the Cape of Good Hope, 
//           increasing transit distances and costs significantly.
//         </p>
//         <Image
//           src="/images/shipping-routes.jpg"
//           alt="Major Shipping Routes"
//           width={800}
//           height={400}
//           className="my-4 mx-auto"
//         />
//       </section>

//       {/* Section: Environmental Impact */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Environmental Impact and Decarbonization</h2>
//         <p className="text-lg">
//           The maritime industry faces increasing pressure to adopt greener technologies. 
//           Around 50% of new vessels on order in 2024 are designed to use alternative fuels, 
//           marking a shift towards sustainable shipping practices.
//         </p>
//         <Image
//           src="/images/environmental-impact.jpg"
//           alt="Environmental Impact and Decarbonization"
//           width={800}
//           height={400}
//           className="my-4 mx-auto"
//         />
//       </section>

//       {/* Interactivity: View More Details */}
//       <button
//         onClick={() => setShowDetails(!showDetails)}
//         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         {showDetails ? 'Hide Details' : 'View More Details'}
//       </button>

//       {showDetails && (
//         <div className="mt-4 p-4 bg-gray-100 rounded">
//           <p className="text-lg">
//             Fleet renewal, the adoption of alternative fuels, and the aging global fleet are key 
//             topics shaping the industry's future. Continued research and investment will determine 
//             the sustainability of the global fleet.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FleetPage;

import React from "react";

const images = [
  "/fleet/average_age.png",
  "/fleet/average_age2.png",
  "/fleet/container_shipping_cycle.png",
  "/fleet/deliveries.png",
  "/fleet/Development_table.png",
  "/fleet/global_ship_capacity.png",
  "/fleet/shares.png",
  "/fleet/ship_tonnage.png",
  "/fleet/trends_in_sailing.png",
  "/fleet/trends_in_yearly.png",
];

const GlobalFleet2024 = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-16 px-8">
      <h1 className="text-5xl font-bold text-blue-800 text-center mb-12 transition-transform hover:scale-105">
        Global Fleet 2024
      </h1>
      <p className="text-center text-lg text-gray-700 font-semibold max-w-4xl mx-auto mb-12">
        Discover a visual collection of the global fleet of 2024, showcasing the diverse range of vessels navigating the world&apos;s oceans. From merchant ships to naval vessels, these images highlight the scale and complexity of maritime operations today.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-slate-300 rounded-lg shadow-2xl px-48 py-8"
          >
            <img
              src={image}
              alt={`Fleet image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalFleet2024;