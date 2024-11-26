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
  { title: 'Calculate Block Coeffecient(Cb)', path: '/numericals/add' },
  { title: 'Subtraction', path: '/numericals/subtract'},
  { title: 'Multiplication', path: '/numericals/multiply' },
  { title: 'Division', path: '/numericals/divide' },
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
