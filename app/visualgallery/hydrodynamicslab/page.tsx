"use client";
import React from "react";
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
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Hydrodynamics Laboratories</h1>

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

export default HydrodynamicsLab;
