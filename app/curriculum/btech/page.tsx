"use client"
import React from "react";

const semesters = [
  {
    title: "Semester 1/2",
    courses: [
      { id: "BS10003", name: "Science of Living Systems", ltp: "2-0-0", credits: 2, type: "FC" },
      { id: "CE13003", name: "Engineering Drawing and Computer Graphics", ltp: "1-0-3", credits: 3, type: "FC" },
      { id: "CS10003", name: "Programming and Data Structures", ltp: "3-0-0", credits: 3, type: "FC" },
      { id: "CS19003", name: "Programming and Data Structures Laboratory", ltp: "0-0-3", credits: 2, type: "FC" },
      { id: "CY11003", name: "Chemistry", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "CY19003", name: "Chemistry Laboratory", ltp: "0-0-3", credits: 2, type: "FC" },
      { id: "DY17003", name: "DIY Project", ltp: "0-0-3", credits: 2, type: "FC" },
      { id: "EA10007", name: "Extra Academic Activity-I", ltp: "0-0-3", credits: 1, type: "FC" },
      { id: "EA10008", name: "Extra Academic Activity-II", ltp: "0-0-3", credits: 1, type: "FC" },
      { id: "EE11003", name: "Electrical Technology", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "EN19003", name: "Engineering Laboratory", ltp: "0-0-3", credits: 2, type: "FC" },
      { id: "EV10003", name: "Environmental Science", ltp: "2-0-0", credits: 2, type: "FC" },
      { id: "HS13003", name: "English for Communication", ltp: "2-0-2", credits: 3, type: "FC" },
      { id: "MA11003", name: "Advanced Calculus", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "MA11004", name: "Linear Algebra, Numerical and Complex Analysis", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "ME11003", name: "Basic Engineering Mechanics", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "PH11003", name: "Physics of Waves", ltp: "3-1-0", credits: 4, type: "FC" },
      { id: "PH19003", name: "Physics Laboratory", ltp: "0-0-3", credits: 2, type: "FC" },
    ],
  },
  {
    title: "Semester 3",
    courses: [
      { id: "EA10009", name: "Extra Academic Activity-III", ltp: "0-0-3", credits: 1, type: "Depth CORE XIX" },
      { id: "EC21201", name: "Basic Electronics", ltp: "3-1-0", credits: 4, type: "Depth CORE XX" },
      { id: "EC29201", name: "Basic Electronics Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE XXI" },
      { id: "MA20205", name: "Probability and Statistics", ltp: "3-0-0", credits: 3, type: "Depth CORE XXII" },
      { id: "ME21201", name: "Fluid Mechanics", ltp: "3-1-0", credits: 4, type: "Depth CORE XXIII" },
      { id: "NA20201", name: "Mechanics of Deformable Bodies", ltp: "3-0-0", credits: 3, type: "Depth CORE XXIV" },
      { id: "NA20203", name: "Hydrostatics and Stability", ltp: "3-0-0", credits: 3, type: "Depth CORE XXV" },
      { id: "HSS-Breadth I", name: "HSS Breadth I", ltp: "3-0-0", credits: 3, type: "Breadth" },
    ],
  },
  {
    title: "Semester 4",
    courses: [
      { id: "NA20202", name: "Marine Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth CORE XXIX" },
      { id: "EA10010", name: "Extra Academic Activity-IV", ltp: "0-0-3", credits: 1, type: "Depth CORE XXVI" },
      { id: "MA20204", name: "Applied Computational Methods", ltp: "3-0-0", credits: 3, type: "Depth CORE XXVII" },
      { id: "ME21202", name: "Basic Thermodynamics", ltp: "3-1-0", credits: 4, type: "Depth CORE XXVIII" },
      { id: "NA20204", name: "Ship Construction and Production", ltp: "3-0-0", credits: 3, type: "Depth CORE XXX" },
      { id: "NA29202", name: "Hydrostatics Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE XXXI" },
      { id: "NA29204", name: "Linesplan Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE XXXII" },
      { id: "Breadth Elective I", name: "Breadth Elective I", ltp: "3-0-0", credits: 3, type: "Breadth" },
    ],
  },
  {
    title: "Semester 5",
    courses: [
      { id: "NA39201", name: "Ocean Engineering Lab", ltp: "0-0-3", credits: 2, type: "Depth CORE XL" },
      { id: "NA31001", name: "Elements of Ocean Engineering", ltp: "3-1-0", credits: 4, type: "Depth CORE XXXIII" },
      { id: "NA30203", name: "Resistance", ltp: "3-0-0", credits: 3, type: "Depth CORE XXXIV" },
      { id: "NA39011", name: "Hydrodynamics Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE XXXIX" },
      { id: "NA30201", name: "Propulsion", ltp: "3-0-0", credits: 3, type: "Depth CORE XXXV" },
      { id: "NA31004", name: "CAD-CAM Marine Design & Production", ltp: "3-0-0", credits: 3, type: "Depth CORE XXXVI" },
      { id: "NA21004", name: "Ship Strength", ltp: "3-1-0", credits: 4, type: "Depth CORE XXXVII" },
      { id: "NA49005", name: "Marine Structural Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE XXXVIII" },
    ],
  },
  {
    title: "Semester 6",
    courses: [
      { id: "NA31007", name: "Vibration of Floating Structures", ltp: "3-1-0", credits: 4, type: "Depth CORE XLI" },
      { id: "NA31002", name: "Marine Design", ltp: "3-1-0", credits: 4, type: "Depth CORE XLII" },
      { id: "NA30204", name: "Seakeeping", ltp: "3-0-0", credits: 3, type: "Depth CORE XLIII" },
      { id: "NA30202", name: "Maneuvering and Control", ltp: "3-0-0", credits: 3, type: "Depth CORE XLIV" },
      { id: "NA39004", name: "CAD-CAM Lab", ltp: "0-0-3", credits: 2, type: "Depth CORE XLV" },
      { id: "NA39006", name: "Marine Design Laboratory - I", ltp: "0-0-3", credits: 2, type: "Depth CORE XLVI" },
      { id: "Breadth Elective II", name: "Breadth Elective II", ltp: "3-0-0", credits: 3, type: "Breadth" },
      { id: "Depth Elective I", name: "Depth Elective I", ltp: "3-0-0", credits: 3, type: "Depth" },
    ],
  },
  {
    title: "Semester 7",
    courses: [
      { id: "NA48001", name: "Industrial Training", ltp: "0-0-0", credits: 2, type: "Depth CORE XLVII" },
      { id: "Depth/Breadth Elective I", name: "Depth/Breadth Elective I", ltp: "3-0-0", credits: 3, type: "Depth/Breadth" },
      { id: "Depth/Breadth Elective II", name: "Depth/Breadth Elective II", ltp: "3-0-0", credits: 3, type: "Depth/Breadth" },
      { id: "Depth/Breadth Elective III", name: "Depth/Breadth Elective III", ltp: "3-0-0", credits: 3, type: "Depth/Breadth" },
      { id: "NA47003", name: "Project-I", ltp: "0-0-6", credits: 4, type: "Project I" },
    ],
  },
  {
    title: "Semester 8",
    courses: [
      { id: "NA49206", name: "Structural Lab", ltp: "0-0-3", credits: 2, type: "Depth CORE L" },
      { id: "NA40010", name: "Offshore Technology", ltp: "3-0-0", credits: 3, type: "Depth CORE LI" },
      { id: "NA49204", name: "Marine Computation Lab", ltp: "0-0-3", credits: 2, type: "Depth CORE XLIX" },
      { id: "NA60021", name: "Physical and Dynamical Oceanography", ltp: "3-0-0", credits: 3, type: "Depth CORE XLVIII" },
      { id: "Breadth Elective III", name: "Breadth Elective III", ltp: "3-0-0", credits: 3, type: "Breadth" },
      { id: "Breadth Elective IV", name: "Breadth Elective IV", ltp: "3-0-0", credits: 3, type: "Breadth" },
      { id: "NA47004", name: "Project-II", ltp: "0-0-9", credits: 6, type: "Project II" },
    ],
  },
];

const electives = {
  depthElectiveI: [
    { id: "AG60103", name: "Principles of Fishing Technology", ltp: "3-1-0", credits: 4, type: "Depth Elective I" },
    { id: "NA40005", name: "Inland Water Transportation", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA40020", name: "Computational Marine Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA40202", name: "Advanced Marine Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA60014", name: "Hydroelasticity", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA60022", name: "Ocean Circulation and Wave Modelling", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA60043", name: "Ocean Energy", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA60048", name: "Port and Harbour Engineering", ltp: "3-1-0", credits: 4, type: "Depth Elective I" },
    { id: "NA60056", name: "Computational Methods in Marine Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective I" },
    { id: "NA60060", name: "Advanced Ocean Structural Analysis", ltp: "3-1-0", credits: 4, type: "Depth Elective I" },
    { id: "NA60064", name: "Advanced Marine Propulsion", ltp: "3-0-0", credits: 3, type: "Depth Elective I" },
    { id: "NA61202", name: "Advanced Methods in Marine Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective I" },
  ],
  depthBreadthElectives: [
    { id: "NA60003", name: "Ocean Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective" },
    { id: "NA60021", name: "Physical and Dynamical Oceanography", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective" },
    { id: "NA60045", name: "Numerical Ship and Offshore Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective" },
    { id: "NA60047", name: "Design of Subsea Pipelines", ltp: "4-0-0", credits: 4, type: "Depth/Breadth Elective" },
    { id: "NA61001", name: "Coastal Engineering", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective" },
    { id: "NA61005", name: "Analysis of Ocean Structures", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective" },
    { id: "NA61205", name: "Marine Structural Dynamics", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective" },
  ],
};

const BTechCurriculum = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center drop-shadow-lg mb-8">B.Tech Curriculum</h1>
      
      {/* Combined Semester 1 and 2 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Semester 1/2</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-900">
                <th className="border border-gray-600 px-4 py-2 w-1/12">Subject No</th>
                <th className="border border-gray-600 px-4 py-2 w-5/12">Subject Name</th>
                <th className="border border-gray-600 px-4 py-2 w-2/12">L-T-P</th>
                <th className="border border-gray-600 px-4 py-2 w-1/12">Credits</th>
                <th className="border border-gray-600 px-4 py-2 w-3/12">Sub Type</th>
              </tr>
            </thead>
            <tbody>
              {semesters[0].courses.map((course, index) => (
                <tr key={index} className="text-center bg-gray-700 even:bg-gray-600">
                  <td className="border border-gray-600 px-4 py-2">{course.id}</td>
                  <td className="border border-gray-600 px-4 py-2">
                    <a href="#" className="text-blue-300 hover:underline" onClick={(e) => e.preventDefault()}>
                      {course.name}
                    </a>
                  </td>
                  <td className="border border-gray-600 px-4 py-2">{course.ltp}</td>
                  <td className="border border-gray-600 px-4 py-2">{course.credits}</td>
                  <td className="border border-gray-600 px-4 py-2">{course.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Individual tables for Semesters 3-8 */}
      {semesters.slice(1).map((semester, index) => (
        <div key={index + 1} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">{semester.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Subject No</th>
                  <th className="border border-gray-600 px-4 py-2 w-5/12">Subject Name</th>
                  <th className="border border-gray-600 px-4 py-2 w-2/12">L-T-P</th>
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Credits</th>
                  <th className="border border-gray-600 px-4 py-2 w-3/12">Sub Type</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, courseIndex) => (
                  <tr key={courseIndex} className="text-center bg-gray-700 even:bg-gray-600">
                    <td className="border border-gray-600 px-4 py-2">{course.id}</td>
                    <td className="border border-gray-600 px-4 py-2">
                      {course.id.startsWith("Depth") || course.id.startsWith("Breadth") ? (
                        course.name
                      ) : (
                        <a href="#" className="text-blue-300 hover:underline" onClick={(e) => e.preventDefault()}>
                          {course.name}
                        </a>
                      )}
                    </td>
                    <td className="border border-gray-600 px-4 py-2">{course.ltp}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.credits}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Electives Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Electives</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-[#48bf91]">Depth Elective I Options</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Subject No</th>
                  <th className="border border-gray-600 px-4 py-2 w-5/12">Subject Name</th>
                  <th className="border border-gray-600 px-4 py-2 w-2/12">L-T-P</th>
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Credits</th>
                  <th className="border border-gray-600 px-4 py-2 w-3/12">Sub Type</th>
                </tr>
              </thead>
              <tbody>
                {electives.depthElectiveI.map((course, index) => (
                  <tr key={index} className="text-center bg-gray-700 even:bg-gray-600">
                    <td className="border border-gray-600 px-4 py-2">{course.id}</td>
                    <td className="border border-gray-600 px-4 py-2">
                      <a href="#" className="text-blue-300 hover:underline" onClick={(e) => e.preventDefault()}>
                        {course.name}
                      </a>
                    </td>
                    <td className="border border-gray-600 px-4 py-2">{course.ltp}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.credits}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-[#48bf91]">Depth/Breadth Electives Options</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-900">
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Subject No</th>
                  <th className="border border-gray-600 px-4 py-2 w-5/12">Subject Name</th>
                  <th className="border border-gray-600 px-4 py-2 w-2/12">L-T-P</th>
                  <th className="border border-gray-600 px-4 py-2 w-1/12">Credits</th>
                  <th className="border border-gray-600 px-4 py-2 w-3/12">Sub Type</th>
                </tr>
              </thead>
              <tbody>
                {electives.depthBreadthElectives.map((course, index) => (
                  <tr key={index} className="text-center bg-gray-700 even:bg-gray-600">
                    <td className="border border-gray-600 px-4 py-2">{course.id}</td>
                    <td className="border border-gray-600 px-4 py-2">
                      <a href="#" className="text-blue-300 hover:underline" onClick={(e) => e.preventDefault()}>
                        {course.name}
                      </a>
                    </td>
                    <td className="border border-gray-600 px-4 py-2">{course.ltp}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.credits}</td>
                    <td className="border border-gray-600 px-4 py-2">{course.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTechCurriculum;