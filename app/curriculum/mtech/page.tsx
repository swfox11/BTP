"use client"

import React from "react";

const semesters = [
  {
    title: "Semester 1/2",
    courses: [
      { id: "Depth/Breadth Elective I", name: "Depth/Breadth Elective I", ltp: "3-0-0", credits: 3, type: "Depth/Breadth" },
      { id: "NA61005", name: "Analysis of Ocean Structures", ltp: "3-1-0", credits: 4, type: "Depth CORE I" },
      { id: "NA69003", name: "Hydrodynamics Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE II" },
      { id: "NA69045", name: "Seminar", ltp: "0-0-3", credits: 2, type: "Depth CORE III" },
      { id: "Depth Elective I", name: "Depth Elective I", ltp: "3-0-0", credits: 3, type: "Depth" },
      { id: "Depth Elective II", name: "Depth Elective II", ltp: "3-0-0", credits: 3, type: "Depth" },
      { id: "Depth Elective III", name: "Depth Elective III", ltp: "3-0-0", credits: 3, type: "Depth" },
    ],
  },
  {
    title: "Semester 2",
    courses: [
      { id: "Breadth Elective I", name: "Breadth Elective I", ltp: "3-0-0", credits: 3, type: "Breadth" },
      { id: "NA61202", name: "Advanced Methods in Marine Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth CORE IV" },
      { id: "NA69005", name: "Design Problems in Ocean Engineering", ltp: "0-0-3", credits: 2, type: "Depth CORE V" },
      { id: "NA69202", name: "Marine Dynamics Laboratory", ltp: "0-0-3", credits: 2, type: "Depth CORE VI" },
      { id: "Depth Elective IV", name: "Depth Elective IV", ltp: "3-0-0", credits: 3, type: "Depth" },
      { id: "Depth Elective V", name: "Depth Elective V", ltp: "3-0-0", credits: 3, type: "Depth" },
      { id: "Depth Elective VI", name: "Depth Elective VI", ltp: "3-0-0", credits: 3, type: "Depth" },
      { id: "NA67022", name: "Project - 1", ltp: "0-0-3", credits: 2, type: "Project I" },
    ],
  },
  {
    title: "Semester 3",
    courses: [
      { id: "NA68021", name: "Summer Internship", ltp: "0-0-6", credits: 4, type: "Project II" },
      { id: "NA67023", name: "Project - 2", ltp: "0-0-0", credits: 16, type: "Project III" },
    ],
  },
  {
    title: "Semester 4",
    courses: [
      { id: "NA67024", name: "Project - 3", ltp: "0-0-0", credits: 20, type: "Project IV" },
    ],
  },
];

const electives = {
  depthBreadthElectiveI: [
    { id: "AG60103", name: "Principles of Fishing Technology", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective I" },
    { id: "NA60003", name: "Ocean Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective I" },
    { id: "NA60021", name: "Physical and Dynamical Oceanography", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA60031", name: "Mechanics of Floating Bodies", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective I" },
    { id: "NA60043", name: "Ocean Energy", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA60045", name: "Numerical Ship and Offshore Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA60047", name: "Design of Subsea Pipelines", ltp: "4-0-0", credits: 4, type: "Depth/Breadth Elective I" },
    { id: "NA60054", name: "CAD-CAM in Marine Design & Production", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective I" },
    { id: "NA60201", name: "Marine Propulsion", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA60203", name: "Resistance and Flow", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA61001", name: "Coastal Engineering", ltp: "3-0-0", credits: 3, type: "Depth/Breadth Elective I" },
    { id: "NA61205", name: "Marine Structural Dynamics", ltp: "3-1-0", credits: 4, type: "Depth/Breadth Elective I" },
  ],
  depthElectivesItoIII: [
    { id: "AG60103", name: "Principles of Fishing Technology", ltp: "3-1-0", credits: 4, type: "Depth Elective I-III" },
    { id: "NA60003", name: "Ocean Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective I-III" },
    { id: "NA60021", name: "Physical and Dynamical Oceanography", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA60031", name: "Mechanics of Floating Bodies", ltp: "3-1-0", credits: 4, type: "Depth Elective I-III" },
    { id: "NA60043", name: "Ocean Energy", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA60045", name: "Numerical Ship and Offshore Hydrodynamics", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA60047", name: "Design of Subsea Pipelines", ltp: "4-0-0", credits: 4, type: "Depth Elective I-III" },
    { id: "NA60054", name: "CAD-CAM in Marine Design & Production", ltp: "3-1-0", credits: 4, type: "Depth Elective I-III" },
    { id: "NA60201", name: "Marine Propulsion", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA60203", name: "Resistance and Flow", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA61001", name: "Coastal Engineering", ltp: "3-0-0", credits: 3, type: "Depth Elective I-III" },
    { id: "NA61205", name: "Marine Structural Dynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective I-III" },
  ],
  depthElectivesIVtoVI: [
    { id: "CR61202", name: "LNG Engineering and Technology", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA60014", name: "Hydroelasticity", ltp: "3-0-0", credits: 3, type: "Depth Elective IV-VI" },
    { id: "NA60021", name: "Physical and Dynamical Oceanography", ltp: "3-0-0", credits: 3, type: "Depth Elective IV-VI" },
    { id: "NA60022", name: "Ocean Circulation and Wave Modelling", ltp: "3-0-0", credits: 3, type: "Depth Elective IV-VI" },
    { id: "NA60048", name: "Port and Harbour Engineering", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA60054", name: "CAD-CAM in Marine Design & Production", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA60056", name: "Computational Methods in Marine Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA60060", name: "Advanced Ocean Structural Analysis", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA60064", name: "Advanced Marine Propulsion", ltp: "3-0-0", credits: 3, type: "Depth Elective IV-VI" },
    { id: "NA61005", name: "Analysis of Ocean Structures", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
    { id: "NA61202", name: "Advanced Methods in Marine Hydrodynamics", ltp: "3-1-0", credits: 4, type: "Depth Elective IV-VI" },
  ],
};

const MTechCurriculum = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-10 px-6">
      <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">M.Tech Curriculum</h1>
      
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
      
      {/* Individual tables for Semesters 2-4 */}
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
                      {course.id.startsWith("Depth") || course.id.startsWith("Breadth") || 
                       course.id.startsWith("NA670") || course.id.startsWith("NA680") ? (
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
          <h3 className="text-xl font-semibold mb-3 text-[#48bf91]">Depth/Breadth Elective I Options</h3>
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
                {electives.depthBreadthElectiveI.map((course, index) => (
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
          <h3 className="text-xl font-semibold mb-3 text-[#48bf91]">Depth Electives I-III Options</h3>
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
                {electives.depthElectivesItoIII.map((course, index) => (
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
          <h3 className="text-xl font-semibold mb-3 text-[#48bf91]">Depth Electives IV-VI Options</h3>
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
                {electives.depthElectivesIVtoVI.map((course, index) => (
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

export default MTechCurriculum;