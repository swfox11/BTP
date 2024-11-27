"use client"
import React from "react";

export default function Home() {
  const handleScroll = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="container text-white">
      {/* Hero Section */}
      <section className="gif flex flex-col items-center justify-center text-center pt-24 pb-72 px-4">
        <h1 className="text-5xl font-bold tracking-wider mb-6 animate-fade-in">
          <span className="text-[#C19A6B]">Welcome to </span>
          <span className="font-bold font-serif">
            <span>Oceanic</span>
            <span className="text-[#48bf91]">Edge</span>
          </span>
        </h1>
        <p className="text-xl max-w-2xl leading-relaxed mb-10">
          A comprehensive platform built by students of the Department of Ocean Engineering & Naval Architecture at IIT Kharagpur to assist with academic tools, global insights, and much more.
        </p>
        <button
          onClick={() => handleScroll("features")}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-md shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Explore Features
        </button>
      </section>

      <div className="w-full h-2 bg-[#2a526c]"></div>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#4a809b] text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          This website is dedicated to providing valuable resources and insights to students and enthusiasts of Ocean Engineering and Naval Architecture, helping them navigate through this exciting and complex discipline. Whether you're exploring hydrostatics calculations, understanding ship geometry, or seeking the latest in industry trends and publications, OceanicEdge offers a wealth of knowledge at your fingertips.<br /><br />
          Ocean Engineering and Naval Architecture is a dynamic field, integral to the design, construction, and maintenance of ships, submarines, offshore platforms, and other marine structures. It combines elements of civil, mechanical, and electrical engineering, ensuring the safe and efficient movement of vessels and the sustainable exploration of marine resources. With the growing significance of maritime activities in global trade, energy production, and environmental sustainability, the importance of this discipline continues to rise.<br /><br />
          Join us as we delve into a sea of knowledge and explore the captivating realm of maritime sciences and technology!
        </p>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-gradient-to-r from-[#4a809b] via-[#3a6a84] to-[#2a526c] text-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Features for Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-24">
            {/* Feature 1 */}
            <div className="p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Basic Calculations</h3>
              <p className="leading-relaxed">
                Access tools for Hydrostatics, Ship Geometry, and other fundamental calculations needed for your academic progress.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Terminologies</h3>
              <p className="leading-relaxed">
                Get familiar with essential naval architecture terminologies to help you excel in your coursework and beyond.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Global Fleet 2024</h3>
              <p className="leading-relaxed">
                Explore the most up-to-date information on global fleets and ship types sailing across the world's oceans.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Publications</h3>
              <p className="leading-relaxed">
                Access research papers, patents, and publications related to Ocean Engineering & Naval Architecture.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Lab Facilities</h3>
              <p className="leading-relaxed">
                Explore cutting-edge labs equipped with advanced technology to support academic and research pursuits.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Events</h3>
              <p className="leading-relaxed">
                Discover the department's flagship events, including ICSOT-India and Samudramanthan, fostering learning and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 bg-[#2a526c] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Dive In?</h2>
        <p className="text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Discover the depths of maritime innovation and stay ahead with our specially curated resources and cutting-edge tools.
        </p>
        <button
          onClick={() => handleScroll("top")}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-md shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}