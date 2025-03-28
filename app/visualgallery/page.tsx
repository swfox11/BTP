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
//     { title: "Department Building (Exterior)", path: "/visualgallery/departmentexterior", images: ["/visualgallery/departmentexterior/exterior1.jpg", "/visualgallery/departmentexterior/exterior2.jpg", "/visualgallery/departmentexterior/exterior3.jpg", "/visualgallery/departmentexterior/exterior4.jpg", "/visualgallery/departmentexterior/exterior5.jpg"] },
//     { title: "Department Building (Interior)", path: "/visualgallery/departmentinterior", images: ["/visualgallery/departmentinterior/interior1.jpg", "/visualgallery/departmentinterior/interior2.jpg", "/visualgallery/departmentinterior/interior3.jpg", "/visualgallery/departmentinterior/interior4.jpg", "/visualgallery/departmentinterior/interior5.jpg"] },
//     { title: "Hydrodynamics Laboratories", path: "/visualgallery/hydrodynamicslab", images: ["/visualgallery/hydrodynamicslab/hyd1.jpg", "/visualgallery/hydrodynamicslab/hyd2.jpg", "/visualgallery/hydrodynamicslab/hyd3.jpg", "/visualgallery/hydrodynamicslab/hyd4.jpg", "/visualgallery/hydrodynamicslab/hyd5.jpg"] },
//     { title: "Marine Construction Laboratory", path: "/visualgallery/marineconstructionlab", images: ["/visualgallery/marineconstructionlab/mc1.jpg", "/visualgallery/marineconstructionlab/mc2.jpg", "/visualgallery/marineconstructionlab/mc3.jpg", "/visualgallery/marineconstructionlab/mc4.jpg", "/visualgallery/marineconstructionlab/mc5.jpg"] },
//     { title: "Classrooms", path: "/visualgallery/classrooms", images: ["/visualgallery/classrooms/classroom1.jpg", "/visualgallery/classrooms/classroom2.jpg", "/visualgallery/classrooms/classroom3.jpg", "/visualgallery/classrooms/classroom4.jpg", "/visualgallery/classrooms/classroom5.jpg"] },
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
//                         spaceBetween={30}
//                         slidesPerView={1} // Only one image per view
//                         navigation
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000 }}
//                         className="w-full max-w-screen-xl mx-auto"
//                     >
//                         {section.images.map((image, imgIndex) => (
//                             <SwiperSlide key={imgIndex}>
//                                 <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
//                                     <Image
//                                         src={image}
//                                         alt={section.title}
//                                         layout="fill"
//                                         objectFit="cover" // Ensures proper scaling without cropping
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
//                             View More
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
        <div className="min-h-screen bg-gray-200 py-12 px-4">
            <motion.h1 className="text-5xl font-bold text-center text-blue-800 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                Visual Gallery
            </motion.h1>

            {gallerySections.map((section, index) => (
                <div key={index} className="mb-16 bg-white shadow-xl rounded-lg p-6 max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{section.title}</h2>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1} // Only one image per view
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        className="w-full"
                    >
                        {section.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                                <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-md">
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
                            className="bg-[#48bf91] text-white px-6 py-2 font-semibold rounded-lg transition-transform hover:scale-105 shadow-md"
                        >
                            View More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
