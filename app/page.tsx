"use client";
import React, { useState, useEffect } from "react";
import {
  Calculator,
  BookOpen,
  Ship,
  FileText,
  FlaskConical,
  CalendarDays,
  Image as ImageIcon,
  GraduationCap,
  MapPin
} from "lucide-react";

import Link from 'next/link';

export default function Home() {
  const [gifLoaded, setGifLoaded] = useState(false); // ✅ Track GIF load status

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img: HTMLImageElement = new window.Image();
      img.src = "/homepagegif.gif";
      img.onload = () => setGifLoaded(true);
    }
  }, []);

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
    <div className="w-full text-white bg-black ">
      {/* Hero Section */}

      {/* <section className="gif flex flex-col items-center justify-center text-center pt-24 pb-72 px-4"> GIF */}
      <section
        className={`flex flex-col items-center justify-center text-center pt-24 pb-72 px-4 transition-opacity duration-500 opacity-100`}
        style={{
          backgroundImage: gifLoaded ? 'url("/homepagegif.gif")' : "none",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >

        <h1 className="text-3xl md:text-5xl font-bold tracking-wider mb-6 animate-fade-in">
          <span className="text-[#C19A6B]">Welcome to </span>
          <span className="font-bold font-serif">
            <span>Oceanic</span>
            <span className="text-[#48bf91]">Edge</span>
          </span>
        </h1>
        <p className="text-0.5xl md:text-xl max-w-2xl leading-relaxed mb-10">
          A comprehensive platform built by students of the Department of Ocean
          Engineering & Naval Architecture at IIT Kharagpur to assist with
          academic tools, global insights, and much more.
        </p>

        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row md:gap-5">
          <button
            onClick={() => handleScroll("features")}
            className="w-40 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-md shadow-md font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Features
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="w-40 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-md shadow-md font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Discover More
          </button>
        </div>

        {/* ✅ Placeholder while GIF loads */}

        {!gifLoaded && (
          <div className="flex items-center justify-center animate-pulse  ">

            <div className="loader mt-4"> </div>
          </div>
        )}

      </section>

      <div className="w-full h-2 bg-[#2a526c]"></div>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#4a809b] text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          This website is dedicated to providing valuable resources and insights
          to students and enthusiasts of Ocean Engineering and Naval
          Architecture, helping them navigate through this exciting and complex
          discipline. Whether you are exploring hydrostatics calculations,
          understanding ship geometry, or seeking the latest in industry trends
          and publications, OceanicEdge offers a wealth of knowledge at your
          fingertips.
          <br />
          <br />
          Ocean Engineering and Naval Architecture is a dynamic field, integral
          to the design, construction, and maintenance of ships, submarines,
          offshore platforms, and other marine structures. It combines elements
          of civil, mechanical, and electrical engineering, ensuring the safe
          and efficient movement of vessels and the sustainable exploration of
          marine resources. With the growing significance of maritime activities
          in global trade, energy production, and environmental sustainability,
          the importance of this discipline continues to rise.
          <br />
          <br />
          Join us as we delve into a sea of knowledge and explore the
          captivating realm of maritime sciences and technology!
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
            <Link href="/numericals">
              <div className="p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <Calculator size={28} /> Basic Calculations
                </h3>
                <p className="leading-relaxed">
                  Access tools for Hydrostatics, Ship Geometry, and other fundamental calculations needed for your academic progress.
                </p>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/terminologies">
              <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <BookOpen size={28} /> Terminologies
                </h3>
                <p className="leading-relaxed">
                  Get familiar with essential naval architecture terminologies which will help you excel in your coursework and beyond.
                </p>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/fleet">
              <div className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <Ship size={28} /> Global Fleet
                </h3>
                <p className="leading-relaxed">
                  Explore the most up-to-date information on global fleets, trades and ship types sailing across the world&apos;s oceans.
                </p>
              </div>
            </Link>

            {/* Feature 4 */}
            <Link href="/publications">
              <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <FileText size={28} /> Publications
                </h3>
                <p className="leading-relaxed">
                  Access research papers, journals, books, patents, and publications related to Ocean Engineering & Naval Architecture.
                </p>
              </div>
            </Link>

            {/* Feature 5 */}
            <Link href="/labfacilities">
              <div className="p-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <FlaskConical size={28} /> Lab Facilities
                </h3>
                <p className="leading-relaxed">
                  Explore our cutting-edge labs equipped with advanced state of the art technology to support academic and research pursuits.
                </p>
              </div>
            </Link>

            {/* Feature 6 */}
            <Link href="/events">
              <div className="p-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <CalendarDays size={28} /> Events
                </h3>
                <p className="leading-relaxed">
                  Discover the department&apos;s flagship events, including ICSOT-India and Samudramanthan, fostering learning and collaboration.
                </p>
              </div>
            </Link>

            {/* Feature 7 */}
            <Link href="/visualgallery">
              <div className="p-6 bg-gradient-to-r from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <ImageIcon size={28} /> Visual Gallery
                </h3>
                <p className="leading-relaxed">
                  Get immersed in a comprehensive visual tour of our department building, state of the art laboratories and classrooms.
                </p>
              </div>
            </Link>

            {/* Feature 8 */}
            <Link href="/curriculum">
              <div className="p-6 bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <GraduationCap size={28} /> Curriculum
                </h3>
                <p className="leading-relaxed">
                  Get the detailed insight about the different courses offered at the Department of Ocean Engineering and Naval Architecture at IIT Kharagpur.
                </p>
              </div>
            </Link>

            {/* Feature 9 */}
            <Link href="/location">
              <div className="p-6 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2 text-center">
                  <MapPin size={28} /> Location
                </h3>
                <p className="leading-relaxed">
                  The Department of Ocean Engineering and Naval Architecture at IIT Kharagpur is located in the serene and historic campus of IIT Kharagpur.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-12 px-4 bg-[#2a526c] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Dive In?</h2>
        <p className="text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Discover the depths of maritime innovation and stay ahead with our
          specially curated resources and cutting-edge tools.
        </p>
        <button
          onClick={() => handleScroll("top")}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-md shadow-md font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}