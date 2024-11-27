// import React from "react";

// const CalculationPage = () => {
  
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//          numerical section

//       </div>
    
//   );
// };
// export default CalculationPage;
import Link from 'next/link';

const numericals = [
  { title: 'Block Coeffecient(Cb)', path: '/numericals/cb' },
  { title: 'Midship Coeffecient(Cm)', path: '/numericals/cm'},
  { title: 'Prismatic Coeffecient(Cp)', path: '/numericals/cp' },
  { title: 'Admiralty Coefficient', path: '/numericals/admirality' },
  { title: 'WaterplaneArea Coefficient', path: '/numericals/wp' },
  { title: 'Vertical Prismatic Coefficient', path: '/numericals/vp' },
  { title: 'Transverse Metacentric Radius (BM) for Rectangular Barge', path: '/numericals/transverse_meta' },
  { title: 'Longitudinal Metacentric Radius (BML) for Rectangular Barge', path: '/numericals/longitudinal_meta' },
  {title: 'Initial Stability Calculation for Rectangular Barge', path: '/numericals/stability' },
];

const NumericalsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {numericals.map((numerical, index) => (
        <Link href={numerical.path} key={index}>
          <div className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-6 rounded shadow-lg transition transform hover:scale-105">
            <h3 className="text-lg font-bold">{numerical.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NumericalsPage;
