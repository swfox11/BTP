// "use client";
// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const images: string[] = [
//   "/visualgallery/hydrodynamicslab/hyd1.jpg",
//   "/visualgallery/hydrodynamicslab/hyd2.jpg",
//   "/visualgallery/hydrodynamicslab/hyd3.jpg",
//   "/visualgallery/hydrodynamicslab/hyd4.jpg",
//   "/visualgallery/hydrodynamicslab/hyd5.jpg",
//   "/visualgallery/hydrodynamicslab/hyd6.jpg",
//   "/visualgallery/hydrodynamicslab/hyd7.jpg",
//   "/visualgallery/hydrodynamicslab/hyd8.jpg",
//   "/visualgallery/hydrodynamicslab/hyd9.jpg",
//   "/visualgallery/hydrodynamicslab/hyd10.jpg",
//   "/visualgallery/hydrodynamicslab/hyd11.jpg",
//   "/visualgallery/hydrodynamicslab/hyd12.jpg",
//   "/visualgallery/hydrodynamicslab/hyd13.jpg",
//   "/visualgallery/hydrodynamicslab/hyd14.jpg",
//   "/visualgallery/hydrodynamicslab/hyd15.jpg",
//   "/visualgallery/hydrodynamicslab/hyd16.jpg",
//   "/visualgallery/hydrodynamicslab/hyd17.jpg",
//   "/visualgallery/hydrodynamicslab/hyd18.jpg",
// ];

// const HydrodynamicsLab: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-8">
//       <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Hydrodynamics Laboratories</h1>

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

// export default HydrodynamicsLab;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images: string[] = [
    "/visualgallery/hydrodynamicslab/hyd1.jpg",
  "/visualgallery/hydrodynamicslab/hyd2.jpg",
  "/visualgallery/hydrodynamicslab/hyd3.jpg",
  "/visualgallery/hydrodynamicslab/hyd4.jpg",
  "/visualgallery/hydrodynamicslab/hyd5.jpg",
  "/visualgallery/hydrodynamicslab/hyd6.jpg",
  "/visualgallery/hydrodynamicslab/hyd7.jpg",
  "/visualgallery/hydrodynamicslab/hyd8.jpg",
  "/visualgallery/hydrodynamicslab/hyd9.jpg",
  "/visualgallery/hydrodynamicslab/hyd10.jpg",
  "/visualgallery/hydrodynamicslab/hyd11.jpg",
  "/visualgallery/hydrodynamicslab/hyd12.jpg",
  "/visualgallery/hydrodynamicslab/hyd13.jpg",
  "/visualgallery/hydrodynamicslab/hyd14.jpg",
  "/visualgallery/hydrodynamicslab/hyd15.jpg",
  "/visualgallery/hydrodynamicslab/hyd16.jpg",
  "/visualgallery/hydrodynamicslab/hyd17.jpg",
  "/visualgallery/hydrodynamicslab/hyd18.jpg",
];

const HydrodynamicsLab: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-16 px-8">
      <h1 className="text-4xl font-extrabold text-[#2a526c] text-center drop-shadow-lg mb-12">Hydrodynamics Laboratories</h1>

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
            className="px-6 py-3 bg-[#48bf91] text-white rounded-lg shadow-md hover:bg-[#3ca97d] transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Back to Gallery
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HydrodynamicsLab;