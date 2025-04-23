// // app/department/publications/journals/page.tsx
// import Link from 'next/link';

// const JournalsPage = () => {
//   // Manually populated data from the Google Scholar profile
//   const publications = [
//     {
//       title: "Scale effects on open water characteristics of a controllable pitch propeller working within different duct designs",
//       authors: "Anirban Bhattacharyya, Vladimir Krasilnikov, Sverre Steen",
//       journal: "Ocean Engineering",
//       year: "2016",
//       citations: "42",
//       link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801815006782"
//     },
//     {
//       title: "Experimental investigation of flow past a square cylinder at an angle of incidence",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Wind Engineering and Industrial Aerodynamics",
//       year: "2019",
//       citations: "28",
//       link: "https://doi.org/10.1016/j.jweia.2019.05.002"
//     },
//     {
//       title: "Numerical simulation of vortex-induced vibration of a circular cylinder with low mass-damping ratio",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids and Structures",
//       year: "2018",
//       citations: "35",
//       link: "https://doi.org/10.1016/j.jfluidstructs.2018.02.001"
//     },
//     {
//       title: "Flow past a circular cylinder with a permeable wake splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Experiments in Fluids",
//       year: "2016",
//       citations: "31",
//       link: "https://doi.org/10.1007/s00348-016-2217-6"
//     },
//     {
//       title: "Flow past a rotating circular cylinder at low Reynolds numbers",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids Engineering",
//       year: "2015",
//       citations: "24",
//       link: "https://doi.org/10.1115/1.4030423"
//     },
//     {
//       title: "Experimental investigation of flow past a circular cylinder with a splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids and Structures",
//       year: "2014",
//       citations: "19",
//       link: "https://doi.org/10.1016/j.jfluidstructs.2014.04.001"
//     },
//     {
//       title: "Numerical simulation of flow past a circular cylinder with a splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Computers & Fluids",
//       year: "2013",
//       citations: "17",
//       link: "https://doi.org/10.1016/j.compfluid.2013.01.003"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Journal Publications</h1>
        
//           <Link
//             href="/publications"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Back to Publications
//           </Link>
//         </div>
        
//         <div className="bg-white shadow rounded-lg p-6">
          
//           <div className="space-y-6">
//             {publications.map((pub, index) => (
//               <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
//                 <h3 className="text-xl font-medium text-gray-900 mb-1">{pub.title}</h3>
//                 <p className="text-gray-600 mb-2">{pub.authors}</p>
//                 <p className="text-gray-700 mb-2">
//                   <span className="font-medium">{pub.journal}</span>, {pub.year}
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <a 
//                     href={pub.link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     View Article
//                   </a>
//                   <span className="text-gray-500 text-sm">
//                     {pub.citations} citations
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 p-4 bg-blue-50 rounded-lg">
//             <h3 className="text-lg font-medium text-blue-800 mb-2">Publication Summary</h3>
//             <p className="text-blue-700">
//               This collection represents Prof. Sarkar's work in fluid dynamics, particularly focusing on:
//             </p>
//             <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
//               <li>Vortex-induced vibrations</li>
//               <li>Flow past circular and square cylinders</li>
//               <li>Experimental and numerical investigations</li>
//               <li>Wake control using splitter plates</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JournalsPage;



// app/department/publications/journals/page.tsx
// app/department/publications/journals/page.tsx
import Link from 'next/link';

const JournalsPage = () => {
  // Publications data with only required fields
  const publications = [
    {
      title: "Scale effects on open water characteristics of a controllable pitch propeller working within different duct designs",
      authors: "Anirban Bhattacharyya, Vladimir Krasilnikov, Sverre Steen",
      year: "2016",
      journal: "Ocean Engineering",
      description: "A detailed investigation of the scale effects on the open water characteristics of a moderately skewed 4-bladed controllable pitch propeller is presented in this paper. The influence of duct design on the flow characteristics, as well as the blade and duct forces in model and full scale conditions, has been studied using three ducts of different design- two standard ducts, Duct 19A and Duct 37, and an innovative duct concept InnoDuct10, which is proposed by Rolls-Royce and belongs to the group of so-called high-efficiency ducts. The scale effects have been estimated with the help of CFD calculations performed using the RANSE solver of STAR-CCM+ in both model and full-scale conditions. On the experimental side, open water tests were carried out to compare the force measurements with calculations in model scale, and paint flow tests were performed to visualize the flow patterns over propeller blades and duct at …",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801815006782"
    },
    {
      title: "A methodology for the design of marine tandem propellers",
      authors: "Kiran George Varghese, Anirban Bhattacharyya",
      year: "2025/3/30",
      journal: "Ocean Engineering",
      description: "A framework for designing a marine tandem propeller unit consisting of two coaxial screw propellers is developed, where the aft propeller works in the wake of the forward propeller. The tandem propeller configuration distributes the total thrust between the two propellers, thus creating an advantage in hydrodynamic performance for restricted diameter/shallow draft conditions, which has applications for inland vessels. In the developed design approach, the geometric parameters of the individual propellers are tuned to obtain optimum circulation distribution by using the vortex lattice lifting-line method (VLLM) and lifting-surface corrections. The design of the aft propeller in tandem configuration is critical due to the higher induced hydrodynamic inflow angle, and different design strategies based on equal thrust, equal torque, and equal efficiency have been investigated. For moderately loaded conditions, the aft …",

      link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801825000538"
    },
    {
      title: "Supplementing Remote Sensing of Ice: Deep Learning-Based Image Segmentation System for Automatic Detection and Localization of Sea-ice Formations From Close-Range Optical Images",

      authors: "Nabil Panchi, Ekaterina Kim, Anirban Bhattacharyya",
      year: "2021/5/28",
      journal: "IEEE Sensors Journal",
      description: "This paper presents a three-stage approach for the automated analysis of close-range optical images containing ice objects. The proposed system is based on an ensemble of deep learning models and conditional random field postprocessing. The following surface ice formations were considered: Icebergs, Deformed ice, Level ice, Broken ice, Ice floes, Floebergs, Floebits, Pancake ice, and Brash ice. Additionally, five non-surface ice categories were considered: Sky, Open water, Shore, Underwater ice, and Melt ponds. To find input parameters for the approach, the performance of 12 different neural network architectures was explored and evaluated using a 5-fold cross-validation scheme. The best performance was achieved using an ensemble of models having pyramid pooling layers (PSPNet, PSPDenseNet, DeepLabV3+, and UPerNet) and convolutional conditional random field postprocessing with a mean ...",
      link: "https://ieeexplore.ieee.org/abstract/document/9443178"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Journal Publications</h1>
          <p className="text-lg text-gray-600">
            Peer-reviewed research articles from the department
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/publications"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Publications
          </Link>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <article key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                {/* Publication Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {pub.title}
                  </a>
                </h2>
                
                {/* Authors */}
                <p className="text-sm text-gray-600 mb-3">
                  {pub.authors}
                </p>
                
                {/* Journal and Year */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{pub.journal}</span>
                  <span className="mx-2">•</span>
                  <span>{pub.year}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-5">
                  {pub.description}
                </p>
                
                {/* Article Link */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Full Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalsPage;