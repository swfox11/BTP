"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images: string[] = [
  "/visualgallery/marineconstructionlab/mc1.jpg",
  "/visualgallery/marineconstructionlab/mc2.jpg",
  "/visualgallery/marineconstructionlab/mc3.jpg",
  "/visualgallery/marineconstructionlab/mc4.jpg",
  "/visualgallery/marineconstructionlab/mc5.jpg",
  "/visualgallery/marineconstructionlab/mc6.jpg",
  "/visualgallery/marineconstructionlab/mc7.jpg",
  "/visualgallery/marineconstructionlab/mc8.jpg",
  "/visualgallery/marineconstructionlab/mc9.jpg",
  "/visualgallery/marineconstructionlab/mc10.jpg",
  "/visualgallery/marineconstructionlab/mc11.jpg",
  "/visualgallery/marineconstructionlab/mc12.jpg",
  "/visualgallery/marineconstructionlab/mc13.jpg",
];

const MarineConstructionLab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Marine Construction Laboratory</h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((image, index) => (
          <motion.div key={index} className="rounded-lg overflow-hidden shadow-lg" whileHover={{ scale: 1.05 }}>
            <img src={image} alt={`Interior ${index + 1}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <Link href="/visualgallery">
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 transition duration-300">
            Back to Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MarineConstructionLab;
