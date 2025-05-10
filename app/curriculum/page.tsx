"use client";
import { useRouter } from "next/navigation";

export default function Curriculum() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f4f4] px-6 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center drop-shadow-lg text-[#2a526c] mb-12">
        Courses Offered
      </h1>

      {/* Course Buttons */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "B.Tech. (4 years)", path: "/curriculum/btech" },
          { name: "Dual Degree (5 years B.Tech. + M.Tech.)", path: "/curriculum/dualdegree" },
          { name: "M.Tech. (2 years)", path: "/curriculum/mtech" },
          { name: "PhD", path: "/curriculum/phd" },
        ].map((course, index) => (
          <button
            key={index}
            onClick={() => router.push(course.path)}
            className="bg-[#48bf91] hover:shadow-lg text-white px-6 py-6 rounded-lg shadow-md font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {course.name}
          </button>
        ))}
      </div>
    </div>
  );
}