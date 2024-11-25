import React from "react";

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 transition-transform transform hover:scale-105">
        Visit Us
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl">
        The Department of Ocean Engineering and Naval Architecture at IIT Kharagpur is located in the serene and historic campus of IIT Kharagpur. Below is our exact location on Google Maps for your convenience.
      </p>
      <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8701594921977!2d87.31237567474996!3d22.320749742155012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d441a4ce1b593%3A0x9601cb745798a81e!2sDept%20of%20Ocean%20Engg%20%26%20Naval%20Architecture%2C%20IIT%20Kharagpur!5e0!3m2!1sen!2sin!4v1732566946509!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          className="border-4 border-blue-800"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8701594921977!2d87.31237567474996!3d22.320749742155012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d441a4ce1b593%3A0x9601cb745798a81e!2sDept%20of%20Ocean%20Engg%20%26%20Naval%20Architecture%2C%20IIT%20Kharagpur!5e0!3m2!1sen!2sin!4v1732566946509!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}