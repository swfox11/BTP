// import React from "react";

// const CalculationPage = () => {
  
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//          numerical section

//       </div>
    
//   );
// };
// export default CalculationPage;


// import Link from 'next/link';

// const numericals = [
//   { title: 'Block Coeffecient(Cb)', path: '/numericals/cb' },
//   { title: 'Midship Coeffecient(Cm)', path: '/numericals/cm'},
//   { title: 'Prismatic Coeffecient(Cp)', path: '/numericals/cp' },
//   { title: 'Admiralty Coefficient', path: '/numericals/admirality' },
//   { title: 'WaterplaneArea Coefficient', path: '/numericals/wp' },
//   { title: 'Vertical Prismatic Coefficient', path: '/numericals/vp' },
//   { title: 'Transverse Metacentric Radius (BM) for Rectangular Barge', path: '/numericals/transverse_meta' },
//   { title: 'Longitudinal Metacentric Radius (BML) for Rectangular Barge', path: '/numericals/longitudinal_meta' },
//   { title: 'Initial Stability Calculation for Rectangular Barge', path: '/numericals/stability' }
// ];

// const NumericalsPage = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {numericals.map((numerical, index) => (
//         <Link href={numerical.path} key={index}>
//           <div className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-6 rounded shadow-lg transition transform hover:scale-105">
//             <h3 className="text-lg font-bold">{numerical.title}</h3>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default NumericalsPage;


import Link from 'next/link';

const numericals = [
  { title: 'Block Coefficient (Cb)', path: '/numericals/cb' },
  { title: 'Midship Coefficient (Cm)', path: '/numericals/cm' },
  { title: 'Prismatic Coefficient (Cp)', path: '/numericals/cp' },
  { title: 'Admiralty Coefficient', path: '/numericals/admiralty' },
  { title: 'Waterplane Area Coefficient', path: '/numericals/wp' },
  { title: 'Vertical Prismatic Coefficient', path: '/numericals/vp' },
  { title: 'Transverse Metacentric Radius (BM) for Rectangular Barge', path: '/numericals/transverse_meta' },
  { title: 'Longitudinal Metacentric Radius (BML) for Rectangular Barge', path: '/numericals/longitudinal_meta' },
  { title: 'Initial Stability Calculation (GM) for Rectangular Barge', path: '/numericals/stability' },
  { title: 'Encounter Frequency (ωₑ) in Sea Keeping', path: '/numericals/encounterfrequency' },
  { title: 'Reynolds Number for ships (Rn) ', path: '/numericals/reynolds' },
  { title: 'Froude Number for ships (Fn) ', path: '/numericals/froude' }
];

const NumericalsPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-12">
        Numerical Calculation Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {numericals.map((numerical, index) => (
          <Link href={numerical.path} key={index}>
            <div className="cursor-pointer bg-[#48bf91] hover:bg-[#3ca97d] text-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-lg font-semibold text-center">{numerical.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NumericalsPage;