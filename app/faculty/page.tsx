import React, { FC } from "react";
import { Link as LinkIcon } from 'lucide-react';

interface Faculty {
    name: string;
    designation: string;
    email: string;
    researchAreas: string[];
    courses: string[];
    socialMedia: { [key: string]: string }[];
    profilePicture: string;
    officialInstituteWebsite: string;
}

const facultyData: Faculty[] = [
    {
        "name": "Anirban Bhattacharyya",
        "designation": "Associate Professor",
        "email": "ab@naval.iitkgp.ac.in",
        "researchAreas": [
            "Marine Propulsion",
            "Ship Hydrodynamics"
        ],
        "courses": [
            "NA39004 - CAD-CAM Lab",
            "NA60064 - Advanced Marine Propulsion",
            "NA69202 - Marine Dynamics Lab",
            "NA30201 - Propulsion",
            "NA39011 - Hydrodynamics Lab",
            "NA20204 - Ship Construction and Production"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/anirban-bhattacharyya-549bb051/"
            },
            {
                "GoogleScholar": "https://scholar.google.com.sg/citations?user=c0tTHWAAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Anirban-Bhattacharyya-10"
            }
        ],
        "profilePicture": "https://media.licdn.com/dms/image/v2/C4D03AQEEcZ4QwYjhpw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657910699941?e=2147483647&v=beta&t=clSejVERPtu9DLhZAamCby-YUMr5Gqvt77CCuTPdSRM",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-ab"
    },

    {
        "name": "Arunjyoti Sarkar",
        "designation": "Assistant Professor Grade-I",
        "email": "arun@naval.iitkgp.ac.in",
        "researchAreas": [
            "Marine operation for subsea installation",
            "Offshore wind turbine",
            "Low RPM current turbine",
            "Subsea pipelines and risers"
        ],
        "courses": [
            "NA21004 - Ship Strength",
            "NA31001 - Elements of Ocean Engineering",
            "NA20204 - Ship Construction and Production",
            "NA40010 - Offshore Technology",
            "NA60047 - Design of Subsea Pipelines"
        ],
        "socialMedia": [
            {
                "ResearchGate": "https://www.researchgate.net/profile/Arunjyoti-Sarkar"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviEwnjpvZ9cKogg_Xud56sTs-nOodK0c24g&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-arun"
    },

    {
        "name": "Debabrata Sen",
        "designation": "Emeritus Professor",
        "email": "deb@naval.iitkgp.ac.in",
        "researchAreas": [
            "Fluid Structure Interaction",
            "Marine Hydrodynamics",
            "Computational Fluid Dynamics",
            "Wave and Tidal Energy",
            "Wind-Wave Modeling"
        ],
        "courses": [
            "NA60052 - Dynamics of Ocean Vehicles",
            "NA61202 - Advanced Methods in Marine Hydrodynamics",
            "NA60031 - Mechanics of Floating Bodies",
            "NA30202 - Manoeuvering and Control",
            "NA31006 - Seakeeping"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/debabrata-sen-16806b2/"
            },
            {
                "GoogleScholar": "https://scholar.google.com/citations?user=4cxZfJQAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Debabrata-Sen-4"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m4LJ5CcBmHbBpkC4DqAunPz7vrlBJbtcOg&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-deb"
    },

    {
        "name": "Hari V Warrior",
        "designation": "Professor",
        "email": "warrior@naval.iitkgp.ac.in",
        "researchAreas": [
            "Physical and Dynamical Oceanography",
            "Fluid Structure Interaction",
            "Marine Hydrodynamics",
            "Turbulence Modeling in Oceanography",
            "Computational Fluid Dynamics"
        ],
        "courses": [
            "NA20203 - Hydrostatics and Stability",
            "NA69003 - Hydrodynamics Lab",
            "NA60022 - Ocean Circulation and Wave Modelling",
            "NA60056 - Computational Methods in Marine Hydrodynamics"
        ],
        "socialMedia": [
            {
                "GoogleScholar": "https://scholar.google.co.in/citations?user=0jKAB2sAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Hari-Warrior"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDole8rvvg530vzrbfB_0hiqgiE7a-MjbXSw&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-warrior"
    },

    {
        "name": "Kiran Vijayan",
        "designation": "Associate Professor",
        "email": "kiran.vijayan@naval.iitkgp.ac.in",
        "researchAreas": [
            "Vibration of marine structures",
            "Uncertainty quantification",
            "Fluid Structure Interaction",
            "Nonlinear Dynamics",
            "Noise and Vibration Control"
        ],
        "courses": [
            "NA31007 - Vibration of Floating Structures",
            "NA49005 - Marine Structural Lab",
            "NA61205 - Marine Structural Dynamics",
            "NA39011 - Hydrodynamics Lab",
            "NA60010 - Analysis of Ocean Structures II",
            "NA20201 - Mechanics of Deformable Bodies"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/kiran-vijayan-888b696/"
            },
            {
                "GoogleScholar": "https://scholar.google.com/citations?user=lgJ4GDwAAAAJ"
            }
        ],
        "profilePicture": "https://media.licdn.com/dms/image/v2/C4D22AQHi_JeTKVpxvA/feedshare-shrink_800/feedshare-shrink_800/0/1656911498793?e=2147483647&v=beta&t=F2KC44VWLQZN8gIfGjEZC6rpT4gFRlxqxZY62th0RXM",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-kiran.vijayan"
    },

    {
        "name": "Kondeti Lakshmi Vasudev",
        "designation": "Assistant Professor Grade-I",
        "email": "lakshmivasudev@naval.iitkgp.ac.in",
        "researchAreas": [
            "Hydrodynamics Stability",
            "Wave and Tidal Energy",
            "Marine Hydrodynamics",
            "Seakeeping and Maneuvering"
        ],
        "courses": [
            "NA29202 - Hydrostatics Lab",
            "NA29204 - Linesplan Lab",
            "NA30202 - Manoeuvering and Control",
            "NA30203 - Resistance"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/kondeti-vasudev-8b001b51/"
            },
            {
                "GoogleScholar": "https://scholar.google.com/citations?user=XYskUigAAAAJ"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Kondeti-Vasudev"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfWs076Voo7KjFLPgAR5d4lZlYy1iByHikQ&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-lakshmivasudev"
    },

    {
        "name": "Mainak Chakraborty",
        "designation": "Assistant Professor Grade-II",
        "email": "mchakraborty@naval.iitkgp.ac.in",
        "researchAreas": [
            "Coastal Engineering",
            "Mechanics of Sediment Transport",
            "Tide and Tidal Bore Analysis",
            "Ship Hydrodynamics",
            "Wave Hydrodynamics"
        ],
        "courses": [
            "NA40005 - Inland Water Transportation",
            "NA40202 - Advanced Marine Hydrodynamics",
            "NA61001 - Coastal Engineering"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/mainak-chakraborty-97590161/"
            },
            {
                "GoogleScholar": "https://scholar.google.com/citations?user=lFBmFyUAAAAJ"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Mainak-Chakraborty-9"
            }
        ],
        "profilePicture": "https://i1.rgstatic.net/ii/profile.image/11431281186355200-1693897843986_Q512/Mainak-Chakraborty-9.jpg",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-mchakraborty"
    },

    {
        "name": "Om Prakash Sha",
        "designation": "Emeritus Professor",
        "email": "ops@naval.iitkgp.ac.in",
        "researchAreas": [
            "Marine Design and Production",
            "Marine Hydrodynamics",
            "Hydrodynamics Stability"
        ],
        "courses": [
            "NA39004 - CAD-CAM Lab",
            "NA39006 - Marine Design Lab-I",
            "NA60054 - CAD-CAM Marine Design and Production",
            "NA59007 - Design Lab",
            "NA60203 - Resistance and Flow",
            "NA49007 - Marine Design Lab-II"
        ],
        "socialMedia": [
            {
                "ResearchGate": "https://www.researchgate.net/profile/Om-Sha"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQTeRa5N8E1N6YNfJKQD2SdVwhIeCsHh_Vg&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-ops"
    },

    {
        "name": "Prasad Kumar Bhaskaran",
        "designation": "Professor",
        "email": "pkbhaskaran@naval.iitkgp.ac.in",
        "researchAreas": [
            "Marine Acoustics",
            "Ocean Modeling and Analysis",
            "Ocean Wave Climate Studies",
            "Physical and Dynamical Oceanography",
            "Port & Harbour Engineering"
        ],
        "courses": [
            "NA60021 - Physical and Dynamical Oceanography",
            "NA60048 - Port and Harbour Engineering",
            "NA31001 - Elements of Ocean Engineering"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/prasad-k-bhaskaran-47339036/"
            },
            {
                "GoogleScholar": "https://scholar.google.com.tw/citations?user=eCmmpbAAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Prasad-Bhaskaran"
            }
        ],
        "profilePicture": "https://media.licdn.com/dms/image/C5603AQHdiKBYBdVR1g/profile-displayphoto-shrink_200_200/0/1516625987282?e=2147483647&v=beta&t=lEfNy7L6YUfl0KVT-VWS17tqxoAFLcJw5VlBwMDSRsQ",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-pkbhaskaran"
    },

    {
        "name": "Ranadev Datta",
        "designation": "Associate Professor",
        "email": "ranadev@naval.iitkgp.ac.in",
        "researchAreas": [
            "Fluid Structure Interaction",
            "Numerical Ship Hydrodynamics",
            "Seakeeping of Offshore Structure & Ship",
            "Hydroelasticity of Floating Structures & Ships",
            "Green Water Loading, Slamming"
        ],
        "courses": [
            "NA20202 - Marine Hydrodynamics",
            "NA30204 - Seakeeping",
            "NA40202 - Advanced Marine Hydrodynamics",
            "NA49204 - Marine Computation Lab",
            "NA49206 - Structural Lab",
            "NA31004 - CAD-CAM Marine Design and Production",
            "NA60045 - Numerical Ship and Offshore Hydrodynamics"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/ranadev-datta-b0760549/"
            },
            {
                "GoogleScholar": "https://scholar.google.com/citations?user=uVEJDpAAAAAJ"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Ranadev-Datta"
            }
        ],
        "profilePicture": "https://wiki.metakgp.org/images/6/61/Ranadev_Datta.jpg",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-ranadev"
    },

    {
        "name": "Ritwik Ghoshal",
        "designation": "Assistant Professor Grade-I",
        "email": "ritwik@naval.iitkgp.ac.in",
        "researchAreas": [
            "Fluid Structure Interaction",
            "Vibration of marine structures",
            "Computational Fluid Dynamics",
            "Marine Structural Engineering",
            "Mechanics of Composites"
        ],
        "courses": [
            "NA31002 - Marine Design",
            "NA40020 - Computational Marine Hydrodynamics",
            "NA69005 - Design Problems in Ocean Engineering",
            "NA20201 - Mechanics of Deformable Bodies",
            "NA61005 - Analysis of Ocean Structures",
            "NA69202 - Marine Dynamics Lab",
            "NA60045 - Numerical Ship and Offshore Hydrodynamics"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/ritwik-ghoshal-58b2b815/"
            },
            {
                "GoogleSites": "https://sites.google.com/site/ritwikghoshal/home"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Ritwik-Ghoshal"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyTvL09nz2kxIk3PMGb9GmtHJnyShjd0fKA&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-ritwik"
    },

    {
        "name": "Swapnadip De Chowdhury",
        "designation": "Assistant Professor Grade-I",
        "email": "sdip@naval.iitkgp.ac.in",
        "researchAreas": [
            "Linear and Nonlinear Wave propagation",
            "Wave energy",
            "Wave forces on marine structures",
            "Linear water waves",
            "Waveguide Array"
        ],
        "courses": [
            "NA49204 - Marine Computation Lab",
            "NA61202 - Advanced Methods in Marine Hydrodynamics",
            "NA39201 - Ocean Engineering Lab",
            "NA60043 - Ocean Energy",
            "NA49007 - Marine Design Lab-II",
            "NA59007 - Design Lab"
        ],
        "socialMedia": [
            {
                "GoogleScholar": "https://scholar.google.com.my/citations?user=1l34rMIAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/S-Chowdhury-4"
            }
        ],
        "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELXuDI2o2x8C_qlgMUduF9yCADnB1pnepQg&s",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-sdip"
    },

    {
        "name": "Trilochan Sahoo",
        "designation": "Professor",
        "email": "tsahoo@naval.iitkgp.ac.in",
        "researchAreas": [
            "Hydroelasticity",
            "Coastal Engineering",
            "Linear and Nonlinear Wave propagation",
            "Engineering Mathematics and Computation",
            "Wave blocking and triad resonance",
            "Coastal Hydrodynamics"
        ],
        "courses": [
            "NA20202 - Marine Hydrodynamics",
            "NA60014 - Hydroelasticity",
            "NA60003 - Ocean Hydrodynamics",
            "NA69005 - Design Problems in Ocean Engineering"
        ],
        "socialMedia": [
            {
                "Linkedin": "https://www.linkedin.com/in/trilochan-sahoo-a38b2755/"
            },
            {
                "GoogleScholar": "https://scholar.google.co.il/citations?user=OkwQ5M4AAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Trilochan-Sahoo-3"
            }
        ],
        "profilePicture": "https://i1.rgstatic.net/ii/profile.image/11431281175465108-1689752189018_Q512/Trilochan-Sahoo-3.jpg",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-tsahoo"
    },

    {
        "name": "Vishwanath Nagarajan",
        "designation": "Professor, Head of the Department",
        "email": "vishwanath_n@naval.iitkgp.ac.in",
        "researchAreas": [
            "Marine Design and Production",
            "Seakeeping and Maneuvering",
            "Marine Hydrodynamics",
            "Fluid Structure Interaction",
            "Ship Motion"
        ],
        "courses": [
            "NA31002 - Marine Design",
            "NA39006 - Marine Design Lab-I",
            "NA30203 - Resistance",
            "NA39011 - Hydrodynamics Lab",
            "NA60203 - Resistance and Flow"
        ],
        "socialMedia": [
            {
                "GoogleScholar": "https://scholar.google.co.in/citations?user=_QuGFBkAAAAJ&hl=en"
            },
            {
                "ResearchGate": "https://www.researchgate.net/profile/Nagarajan-Vishwanath"
            }
        ],
        "profilePicture": "https://wiki.metakgp.org/images/e/ef/Vishwanath_Nagarajan.jpg",
        "officialInstituteWebsite": "https://www.iitkgp.ac.in/department/NA/faculty/na-vishwanath_n"
    }
];


const FacultyCard: FC<{ faculty: Faculty }> = ({ faculty }) => (
    <div className="max-w-md w-full mx-auto my-6 p-10 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2 hover:scale-105">
        <div className="overflow-x-auto">
            <div className="min-w-[100%]">
                <img
                    src={faculty.profilePicture || "/placeholder.png"}
                    alt={`${faculty.name}'s profile`}
                    className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-600 shadow-lg hover:opacity-90 transition-opacity duration-300"
                />
                <h2 className="text-xl font-bold text-gray-800 text-center hover:text-blue-700 transition-colors duration-300">
                    {faculty.name}
                </h2>
                <h3 className="text-gray-600 italic text-center">{faculty.designation}</h3>
                <p className="text-sm text-gray-500 text-center mt-2">
                    <a
                        href={`mailto:${faculty.email}`}
                        className="underline hover:text-blue-500 transition-colors duration-300"
                    >
                        {faculty.email}
                    </a>
                </p>

                <h4 className="text-lg font-semibold mt-4 text-gray-700">Research Areas:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {faculty.researchAreas.map((area, idx) => (
                        <li key={idx}>{area}</li>
                    ))}
                </ul>

                <h4 className="text-lg font-semibold mt-4 text-gray-700">Courses:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {faculty.courses.map((course, idx) => (
                        <li
                            key={idx}
                            className="truncate"
                            title={course} 
                        >
                            {course}
                        </li>
                    ))}
                </ul>

                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-700">Social Links:</h4>
                    <div className="flex space-x-4 mt-2">
                        {faculty.socialMedia.map((social, idx) => {
                            const [platform, link] = Object.entries(social)[0];
                            return (
                                <a
                                    key={idx}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300"
                                >
                                    <LinkIcon size={18} />
                                    <span>{platform}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-4">
                    <a
                        href={faculty.officialInstituteWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-300"
                    >
                        Official Website
                    </a>
                </div>
            </div>
        </div>
    </div>
);


const FacultyPage: FC = () => (
    //<div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-blue-200 py-12">
    <div className="min-h-screen bg-[#f4f4f4] py-12">
        <h1 className="text-4xl font-extrabold text-center text-[#2a526c] mb-10 drop-shadow-lg">
            Meet Our Faculty
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {facultyData.map((faculty, idx) => (
                <FacultyCard key={idx} faculty={faculty} />
            ))}
        </div>
    </div>
);

export default FacultyPage;