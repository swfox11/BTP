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

// import React from "react";

// const images = [
//   "/fleet/average_age.png",
//   "/fleet/average_age2.png",
//   "/fleet/container_shipping_cycle.png",
//   "/fleet/deliveries.png",
//   "/fleet/Development_table.png",
//   "/fleet/global_ship_capacity.png",
//   "/fleet/shares.png",
//   "/fleet/ship_tonnage.png",
//   "/fleet/trends_in_sailing.png",
//   "/fleet/trends_in_yearly.png",
// ];

// const GlobalFleet2024 = () => {
//   return (
//     <div className="min-h-screen bg-gray-200 py-16 px-8">
//       <h1 className="text-5xl font-bold text-blue-800 text-center mb-12 transition-transform hover:scale-105">
//         Global Fleet 2024
//       </h1>
//       <p className="text-center text-lg text-gray-700 font-semibold max-w-4xl mx-auto mb-12">
//         Discover a visual collection of the global fleet of 2024, showcasing the diverse range of vessels navigating the world&apos;s oceans. From merchant ships to naval vessels, these images highlight the scale and complexity of maritime operations today.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-12">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden bg-slate-300 rounded-lg shadow-2xl px-48 py-8"
//           >
//             <img
//               src={image}
//               alt={`Fleet image ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GlobalFleet2024;


'use client';

import { useState, useEffect } from 'react';
// import Link from 'next/link';

interface PdfDocument {
  id: string;
  title: string;
  description: string;
  filePath: string;
  lastUpdated: string;
  fileSize: string;
  pages: string;
}

const FleetDocumentsPage = () => {
  const [pdfDocuments, setPdfDocuments] = useState<PdfDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this data from an API or config file
    // For now, we'll use a hardcoded list that you can update as you add PDFs
    const documents: PdfDocument[] = [
      {
        id: 'World shipping fleet and services 2024',
        title: 'World shipping fleet and services 2024',
        description: 'Comprehensive review of 2024 maritime transport with data, charts and diagrams',
        filePath: '/documents/World_shipping_fleet_and_services.pdf',
        lastUpdated: '2023-06-15',
        fileSize: '1.1 MB',
        pages: '31',
      },
      {
        id: 'Top 10 Ship Owning Nation',
        title: 'Top 10 Ship Owning Nation',
        description: 'Top 10 Shipowning Nations by Total Asset Value for 2025 - VesselsValue Blog',
        filePath: '/documents/Top 10 Shipowning Nations.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '1.9 MB',
        pages: '8',
      },
      
      {
        id: 'Shipping Market Outlook Q2 2025 Forecast',
        title: 'Shipping Market Outlook Q2 2025 Forecast',
        description: 'Comprehensive outlook of global shipping market with forecast of Q2 2025',
        filePath: '/documents/Shipping Market Outlook_ Q2 2025 Forecast.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '2.5 MB',
        pages: '9',
      },
      {
        id: 'Global Trade Update (March 2025)',
        title: 'Global Trade Update (March 2025)',
        description: 'Comprehensive overview of global trade and the role of tariffs in international trade',
        filePath: '/documents/Global Trade Update (March 2025).pdf',
        lastUpdated: '2023-07-01',
        fileSize: '4.2 MB',
        pages: '24',
      },
      {
        id: 'Ocean Economy',
        title: 'Ocean Economy',
        description: 'Ocean economy, trade policy and the climate and development nexus. Background Note by UN Trade and Development and Food and Agriculture Organization of the United Nations to the 5th United Nations Ocean Forum',
        filePath: '/documents/Ocean Economy.pdf',
        lastUpdated: '2023-07-01',
        fileSize: '17.6 MB',
        pages: '46',
      },
    ];

    setPdfDocuments(documents);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Fleet Documents</h1>
        <div className="flex justify-center items-center h-64">
          <p>Loading documents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-12 bg-[#f4f4f4]">
      <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-6">Global Fleet and Maritime Trade</h1>
      
      <div className="space-y-16 m-2 md:m-16">
        {pdfDocuments.length > 0 ? (
          pdfDocuments.map((doc) => (
            <div key={doc.id} className="bg-[#eaf7f2] shadow-lg hover:shadow-2xl hover:bg-white transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl text-center font-semibold text-gray-800">{doc.title}</h2>
                <p className="mt-2 text-gray-600 text-center">{doc.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 items-center text-sm text-gray-500">
                  {/* <span>Last updated: {doc.lastUpdated}</span> */}
                  {/* <span>•</span> */}
                  
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 border-r">
                  <div className="h-96 bg-gray-100 rounded">
                    <iframe 
                      src={`${doc.filePath}#view=fitH`}
                      className="w-full h-full"
                      frameBorder="0"
                    >
                      <p className="p-4 text-red-500">
                        Your browser does not support PDF embedding. 
                        Please <a href={doc.filePath} className="text-blue-600 hover:underline">download the PDF</a> to view it.
                      </p>
                    </iframe>
                  </div>
                </div>

                <div className="md:w-64 p-4 flex flex-col gap-4">
                  <a
                    href={doc.filePath}
                    download
                    className="w-full px-4 py-3 bg-[#48bf91] text-white rounded hover:bg-[#3ca97d] transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <a
                    href={doc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors text-center"
                  >
                    Open in New Tab
                  </a>
                  <div className="mt-auto pt-4 border-t">
                    <h3 className="font-medium text-gray-700 mb-2">Document Info</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Format: PDF</li>
                      <li>Pages: {doc.pages}</li>
                      <li>Security: Unrestricted</li>
                      <li><span>File size: {doc.fileSize}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700">No documents available</h2>
            <p className="mt-2 text-gray-500">PDF documents will appear here when added to the system.</p>
          </div>
        )}
      </div>

      {/* Admin Panel (for development)
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">Developer Notes</h2>
          <p className="text-sm text-yellow-700">
            To add a new PDF: 
            1. Place the file in <code className="bg-yellow-100 px-1 rounded">public/documents</code>
            2. Add its metadata to the <code className="bg-yellow-100 px-1 rounded">documents</code> array in this component
          </p>
        </div>
      )} */}
    </div>
  );
};

export default FleetDocumentsPage;