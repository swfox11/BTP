"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images: string[] = [
  "/sm24/sm1.JPG",
  "/sm24/sm2.jpeg",
  "/sm24/sm3.JPG",
  "/sm24/sm4.JPG",
  "/sm24/sm5.jpeg",
  "/sm24/sm6.JPG",
  "/sm24/sm7.JPG",
  "/sm24/sm8.JPG",
  "/sm24/sm9.jpeg",
];

const SM24: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-16 px-8">
      <h1 className="text-4xl font-extrabold text-[#2a526c] text-center drop-shadow-lg mb-12">Samudramanthan 2024</h1>

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
              alt={`samudramanthan 2024 ${index + 1}`} 
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
            alt="Zoomed sm24"
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
        <Link href="/events" className="inline-block">
          <motion.button 
            className="px-6 py-3 bg-[#48bf91] text-white rounded-lg shadow-md hover:bg-[#3ca97d] transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Back to Events
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SM24;