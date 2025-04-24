"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const photosICSOT = [
  "/events/icsot/icsot1.jpg",
  "/events/icsot/icsot2.jpg",
  "/events/icsot/icsot3.jpg",
  "/events/icsot/icsot4.jpg",
  "/events/icsot/icsot5.jpg",
  "/events/icsot/icsot6.jpg",
  "/events/icsot/icsot7.jpg",
  "/events/icsot/icsot8.jpg",
  "/events/icsot/icsot9.jpg",
  "/events/icsot/icsot10.jpg",
  "/events/icsot/icsot11.jpg",
  "/events/icsot/icsot12.jpg",
];

const photosSamudramanthan = [
  "/events/sm/sm1.JPG",
  "/events/sm/sm2.jpeg",
  "/events/sm/sm3.jpeg",
  "/events/sm/sm4.JPG",
  "/events/sm/sm5.JPG",
  "/events/sm/sm6.JPG",
  "/events/sm/sm7.JPG",
  "/events/sm/sm8.JPG",
  "/events/sm/sm9.jpeg",
];

const EventsPage = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <h1 className="text-4xl font-extrabold text-[#2a526c] text-center drop-shadow-lg my-10">Department Events</h1>

      {/* ICSOT Section */}
      <section className="bg-white p-10 shadow-lg my-10 rounded-md">
        <h2 className="text-3xl font-bold text-center transition-transform transform hover:scale-105 text-[#48bf91] mb-6">ICSOT - India</h2>

        {/* Slider */}
        <div className="my-8">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {photosICSOT.slice(0, 3).map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`ICSOT Image ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-8 font-medium text-lg">
          The International Conference on Ship and Offshore Technology (ICSOT) is a premier event
          initiated by the Royal Institution of Naval Architects (RINA). It serves as a platform
          to advance research and explore practical applications in shipbuilding, offshore
          technology, and marine engineering.
        </p>
        <p className="text-gray-700 leading-8 font-medium text-lg mt-4">
          Hosted multiple times by IIT Kharagpur’s Department of Ocean Engineering and Naval
          Architecture, ICSOT fosters collaboration between academia and industry. The department
          hosted its first ICSOT in 2009, with the latest edition in 2023 showcasing cutting-edge
          innovations in the field.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://rina.org.uk/"
            target="_blank"
            className="bg-[#48bf91] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#3a9d76] transition duration-300"
          >
            RINA Official Website
          </a>
          <a
            href="http://www.icsot.iitkgp.ac.in/2023/"
            target="_blank"
            className="bg-[#48bf91] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#3a9d76] transition duration-300"
          >
            ICSOT 2023
          </a>
        </div>

        {/* Gallery */}
        <h3 className="text-2xl text-gray-900 font-semibold mt-10">Visual Gallery from the Latest Edition</h3>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {photosICSOT.slice(3).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`ICSOT Gallery Image ${index + 1}`}
              className="rounded-md shadow-md hover:scale-105 transition transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* Samudramanthan Section */}
      <section className="bg-gray-50 p-10 shadow-lg my-10 rounded-md">
        <h2 className="text-3xl font-bold text-center transition-transform transform hover:scale-105 text-[#48bf91] mb-6">Samudramanthan</h2>

        {/* Slider */}
        <div className="my-8">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {photosSamudramanthan.slice(0, 3).map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Samudramanthan Image ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-8 font-medium text-lg">
          Samudramanthan is an annual technical festival organized by the Department of Ocean
          Engineering and Naval Architecture at IIT Kharagpur. It offers a platform for students
          across India to showcase ideas and gain practical exposure in marine sciences and naval
          architecture.
        </p>
        <p className="text-gray-700 leading-8 font-medium text-lg mt-4">
          From technical competitions to industry interactions, the festival bridges the gap
          between academia and the industry. Workshops, seminars, and networking opportunities
          enhance skills while keeping participants updated with the latest trends in the field.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.facebook.com/samudramanthan.iitkgp/"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-800 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sm.iitkgp/"
            target="_blank"
            className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-700 transition duration-300"
          >
            Instagram
          </a>
        </div>

        {/* Gallery */}
        <h3 className="text-2xl text-gray-900 font-semibold mt-10">Visual Gallery from the Latest Edition</h3>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {photosSamudramanthan.slice(3).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Samudramanthan Gallery Image ${index + 1}`}
              className="rounded-md shadow-md hover:scale-105 transition transform duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;