"use client";
import { useRouter } from "next/navigation";

export default function Curriculum() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center text-[#2a526c] mb-8">
        Courses Offered by the Department
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Options */}
        {[
          { name: "B.Tech. (4 years)", path: "/curriculum/btech" },
          { name: "Dual Degree (5 year B.Tech. + M.Tech)", path: "/curriculum/dualdegree" },
          { name: "M.Tech. (2 years)", path: "/curriculum/mtech" },
          { name: "PhD", path: "/curriculum/phd" }
        ].map((course, index) => (
          <button
            key={index}
            
            onClick={() => router.push(course.path)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-md shadow-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full"
          >
            {course.name}
          </button>
        ))}
      </div>
    </div>
  );
}
