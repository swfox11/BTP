// "use client";
// import React from "react";
// import Link from "next/link";
// import Slider from "react-slick";

// interface Section {
//   title: string;
//   images: string[];
//   path: string;
// }

// const sections: Section[] = [
//   {
//     title: "Department Building (Interior)",
//     images: ["/visualgallery/interior1.jpg", "/visualgallery/interior2.jpg", "/visualgallery/interior3.jpg", "/visualgallery/interior4.jpg", "/visualgallery/interior5.jpg"],
//     path: "/image-gallery/department-interior",
//   },
//   {
//     title: "Department Building (Exterior)",
//     images: ["/visualgallery/exterior1.jpg", "/visualgallery/exterior2.jpg", "/visualgallery/exterior3.jpg", "/visualgallery/exterior4.jpg", "/visualgallery/exterior5.jpg"],
//     path: "/image-gallery/department-exterior",
//   },
//   {
//     title: "Hydrodynamics Laboratories",
//     images: ["/visualgallery/hydro1.jpg", "/visualgallery/hydro2.jpg", "/visualgallery/hydro3.jpg", "/visualgallery/hydro4.jpg", "/visualgallery/hydro5.jpg"],
//     path: "/image-gallery/hydrodynamics-lab",
//   },
//   {
//     title: "Marine Construction Laboratory",
//     images: ["/visualgallery/marine1.jpg", "/visualgallery/marine2.jpg", "/visualgallery/marine3.jpg", "/visualgallery/marine4.jpg", "/visualgallery/marine5.jpg"],
//     path: "/image-gallery/marine-lab",
//   },
//   {
//     title: "Classrooms",
//     images: ["/visualgallery/classroom1.jpg", "/visualgallery/classroom2.jpg", "/visualgallery/classroom3.jpg", "/visualgallery/classroom4.jpg", "/visualgallery/classroom5.jpg"],
//     path: "/image-gallery/classrooms",
//   },
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const ImageGallery: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-8">
//       <h1 className="text-5xl font-bold text-blue-800 text-center mb-12">Image Gallery</h1>

//       {sections.map((section, index) => (
//         <div key={index} className="mb-16">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-4">{section.title}</h2>
//           <Slider {...sliderSettings}>
//             {section.images.map((image, idx) => (
//               <div key={idx} className="p-4">
//                 <img src={image} alt={`Slide ${idx + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
//               </div>
//             ))}
//           </Slider>
//           <div className="text-center mt-6">
//             <Link href={section.path}>
//               <button className="px-6 py-3 bg-[#48bf91] text-white rounded-lg shadow-md hover:bg-[#3aa77c] transition duration-300">
//                 View All Images
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;


// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const gallerySections = [
//     { title: "Department Building (Interior)", path: "/gallery/interior", images: ["/images/gallery/interior1.jpg", "/images/gallery/interior2.jpg", "/images/gallery/interior3.jpg", "/images/gallery/interior4.jpg", "/images/gallery/interior5.jpg"] },
//     { title: "Department Building (Exterior)", path: "/gallery/exterior", images: ["/images/gallery/exterior1.jpg", "/images/gallery/exterior2.jpg", "/images/gallery/exterior3.jpg", "/images/gallery/exterior4.jpg", "/images/gallery/exterior5.jpg"] },
//     { title: "Hydrodynamics Laboratories", path: "/gallery/hydrodynamics", images: ["/images/gallery/hydro1.jpg", "/images/gallery/hydro2.jpg", "/images/gallery/hydro3.jpg", "/images/gallery/hydro4.jpg", "/images/gallery/hydro5.jpg"] },
//     { title: "Marine Construction Laboratory", path: "/gallery/marine", images: ["/images/gallery/marine1.jpg", "/images/gallery/marine2.jpg", "/images/gallery/marine3.jpg", "/images/gallery/marine4.jpg", "/images/gallery/marine5.jpg"] },
//     { title: "Classrooms", path: "/gallery/classrooms", images: ["/visualgallery/classrooms/classroom1.jpg", "/visualgallery/classrooms/classroom2.jpg", "/visualgallery/classrooms/classroom3.jpg", "/visualgallery/classrooms/classroom4.jpg", "/visualgallery/classrooms/classroom5.jpg"] },
// ];

// const ImageGallery = () => {
//     const router = useRouter();

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-6">
//             <motion.h1 className="text-5xl font-bold text-center text-blue-800 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//                 Image Gallery
//             </motion.h1>

//             {gallerySections.map((section, index) => (
//                 <div key={index} className="mb-16">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{section.title}</h2>

//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         navigation
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000 }}
//                         className="w-full max-w-screen-lg mx-auto" // Increased width
//                     >
//                         {section.images.map((image, imgIndex) => (
//                             <SwiperSlide key={imgIndex}>
//                                 <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
//                                     <Image
//                                         src={image}
//                                         alt={section.title}
//                                         layout="fill"
//                                         objectFit="contain" // Ensures images don't get cropped
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>


//                     <div className="flex justify-center mt-6">
//                         <button
//                             onClick={() => router.push(section.path)}
//                             className="bg-[#48bf91] text-white px-6 py-2 font-semibold rounded-lg transition-transform hover:scale-105"
//                         >
//                             View All Images
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;


// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const gallerySections = [
//     { title: "Department Building (Interior)", path: "/gallery/interior", images: ["/images/gallery/interior1.jpg", "/images/gallery/interior2.jpg", "/images/gallery/interior3.jpg", "/images/gallery/interior4.jpg", "/images/gallery/interior5.jpg"] },
//     { title: "Department Building (Exterior)", path: "/gallery/exterior", images: ["/images/gallery/exterior1.jpg", "/images/gallery/exterior2.jpg", "/images/gallery/exterior3.jpg", "/images/gallery/exterior4.jpg", "/images/gallery/exterior5.jpg"] },
//     { title: "Hydrodynamics Laboratories", path: "/gallery/hydrodynamics", images: ["/images/gallery/hydro1.jpg", "/images/gallery/hydro2.jpg", "/images/gallery/hydro3.jpg", "/images/gallery/hydro4.jpg", "/images/gallery/hydro5.jpg"] },
//     { title: "Marine Construction Laboratory", path: "/gallery/marine", images: ["/images/gallery/marine1.jpg", "/images/gallery/marine2.jpg", "/images/gallery/marine3.jpg", "/images/gallery/marine4.jpg", "/images/gallery/marine5.jpg"] },
//     { title: "Classrooms", path: "/gallery/classrooms", images: ["/visualgallery/classrooms/classroom1.jpg", "/visualgallery/classrooms/classroom2.jpg", "/visualgallery/classrooms/classroom3.jpg", "/visualgallery/classrooms/classroom4.jpg", "/visualgallery/classrooms/classroom5.jpg"] },
// ];

// const ImageGallery = () => {
//     const router = useRouter();

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-4">
//             <motion.h1 className="text-5xl font-bold text-center text-blue-800 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//                 Image Gallery
//             </motion.h1>

//             {gallerySections.map((section, index) => (
//                 <div key={index} className="mb-16">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{section.title}</h2>

//                     <Swiper
//                         modules={[Navigation, Pagination, Autoplay]}
//                         spaceBetween={30} // Increased spacing
//                         slidesPerView={1}
//                         breakpoints={{
//                             768: { slidesPerView: 2 },
//                             1024: { slidesPerView: 3 },
//                         }}
//                         navigation
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000 }}
//                         className="w-full max-w-screen-xl mx-auto" // Wider Swiper
//                     >
//                         {section.images.map((image, imgIndex) => (
//                             <SwiperSlide key={imgIndex}>
//                                 <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
//                                     <Image
//                                         src={image}
//                                         alt={section.title}
//                                         layout="fill"
//                                         objectFit="cover" // Prevents cropping while filling space
//                                     />
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     <div className="flex justify-center mt-6">
//                         <button
//                             onClick={() => router.push(section.path)}
//                             className="bg-[#48bf91] text-white px-6 py-2 font-semibold rounded-lg transition-transform hover:scale-105"
//                         >
//                             View All Images
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const gallerySections = [
    { title: "Department Building (Exterior)", path: "/visualgallery/departmentexterior", images: ["/visualgallery/departmentexterior/exterior1.jpg", "/visualgallery/departmentexterior/exterior2.jpg", "/visualgallery/departmentexterior/exterior3.jpg", "/visualgallery/departmentexterior/exterior4.jpg", "/visualgallery/departmentexterior/exterior5.jpg"] },
    { title: "Department Building (Interior)", path: "/visualgallery/departmentinterior", images: ["/visualgallery/departmentinterior/interior1.jpg", "/visualgallery/departmentinterior/interior2.jpg", "/visualgallery/departmentinterior/interior3.jpg", "/visualgallery/departmentinterior/interior4.jpg", "/visualgallery/departmentinterior/interior5.jpg"] },
    { title: "Hydrodynamics Laboratories", path: "/visualgallery/hydrodynamicslab", images: ["/visualgallery/hydrodynamicslab/hyd1.jpg", "/visualgallery/hydrodynamicslab/hyd2.jpg", "/visualgallery/hydrodynamicslab/hyd3.jpg", "/visualgallery/hydrodynamicslab/hyd4.jpg", "/visualgallery/hydrodynamicslab/hyd5.jpg"] },
    { title: "Marine Construction Laboratory", path: "/visualgallery/marineconstructionlab", images: ["/visualgallery/marineconstructionlab/mc1.jpg", "/visualgallery/marineconstructionlab/mc2.jpg", "/visualgallery/marineconstructionlab/mc3.jpg", "/visualgallery/marineconstructionlab/mc4.jpg", "/visualgallery/marineconstructionlab/mc5.jpg"] },
    { title: "Classrooms", path: "/visualgallery/classrooms", images: ["/visualgallery/classrooms/classroom1.jpg", "/visualgallery/classrooms/classroom2.jpg", "/visualgallery/classrooms/classroom3.jpg", "/visualgallery/classrooms/classroom4.jpg", "/visualgallery/classrooms/classroom5.jpg"] },
];

const ImageGallery = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <motion.h1 className="text-5xl font-bold text-center text-blue-800 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                Image Gallery
            </motion.h1>

            {gallerySections.map((section, index) => (
                <div key={index} className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{section.title}</h2>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1} // Only one image per view
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="w-full max-w-screen-xl mx-auto"
                    >
                        {section.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                                <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={image}
                                        alt={section.title}
                                        layout="fill"
                                        objectFit="cover" // Ensures proper scaling without cropping
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => router.push(section.path)}
                            className="bg-[#48bf91] text-white px-6 py-2 font-semibold rounded-lg transition-transform hover:scale-105"
                        >
                            View All Images
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
