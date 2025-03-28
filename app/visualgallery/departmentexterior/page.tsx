// "use client";
// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const images = [
//   "/visualgallery/departmentexterior/exterior1.jpg",
//   "/visualgallery/departmentexterior/exterior2.jpg",
//   "/visualgallery/departmentexterior/exterior3.jpg",
//   "/visualgallery/departmentexterior/exterior4.jpg",
//   "/visualgallery/departmentexterior/exterior5.jpg",
//   "/visualgallery/departmentexterior/exterior6.jpg",
//   "/visualgallery/departmentexterior/exterior7.jpg",
//   "/visualgallery/departmentexterior/exterior8.jpg",
//   "/visualgallery/departmentexterior/exterior9.jpg",
//   "/visualgallery/departmentexterior/exterior10.jpg",
//   "/visualgallery/departmentexterior/exterior11.jpg",
//   "/visualgallery/departmentexterior/exterior12.jpg",
// ];

// const DepartmentExterior = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-8">
//       <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Department Building (Exterior)</h1>

//       <motion.div 
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {images.map((image, index) => (
//           <motion.div key={index} className="rounded-lg overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
//             <img src={image} alt={`Interior ${index + 1}`} className="w-full h-64 object-cover" />
//           </motion.div>
//         ))}
//       </motion.div>

//       <div className="text-center mt-10">
//         <Link href="/visualgallery">
//           <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition duration-300">
//             Back to Gallery
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DepartmentExterior;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images: string[] = [
    "/visualgallery/departmentexterior/exterior1.jpg",
  "/visualgallery/departmentexterior/exterior2.jpg",
  "/visualgallery/departmentexterior/exterior3.jpg",
  "/visualgallery/departmentexterior/exterior4.jpg",
  "/visualgallery/departmentexterior/exterior5.jpg",
  "/visualgallery/departmentexterior/exterior6.jpg",
  "/visualgallery/departmentexterior/exterior7.jpg",
  "/visualgallery/departmentexterior/exterior8.jpg",
  "/visualgallery/departmentexterior/exterior9.jpg",
  "/visualgallery/departmentexterior/exterior10.jpg",
  "/visualgallery/departmentexterior/exterior11.jpg",
  "/visualgallery/departmentexterior/exterior12.jpg",
];

const Classrooms: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Department Building (Exterior)</h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer" 
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Classroom interior view ${index + 1}`} 
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Zoomed Image Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            src={selectedImage} 
            alt="Zoomed Classroom"
            className="max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
          <button 
            className="absolute top-5 right-5 bg-gray-300 text-black p-2 rounded-full hover:bg-gray-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </motion.div>
      )}

      <div className="text-center mt-10">
        <Link href="/visualgallery" className="inline-block">
          <motion.button 
            className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Back to Gallery
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Classrooms;

