// // app/department/publications/journals/page.tsx
// import Link from 'next/link';

// const JournalsPage = () => {
//   // Manually populated data from the Google Scholar profile
//   const publications = [
//     {
//       title: "Scale effects on open water characteristics of a controllable pitch propeller working within different duct designs",
//       authors: "Anirban Bhattacharyya, Vladimir Krasilnikov, Sverre Steen",
//       journal: "Ocean Engineering",
//       year: "2016",
//       citations: "42",
//       link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801815006782"
//     },
//     {
//       title: "Experimental investigation of flow past a square cylinder at an angle of incidence",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Wind Engineering and Industrial Aerodynamics",
//       year: "2019",
//       citations: "28",
//       link: "https://doi.org/10.1016/j.jweia.2019.05.002"
//     },
//     {
//       title: "Numerical simulation of vortex-induced vibration of a circular cylinder with low mass-damping ratio",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids and Structures",
//       year: "2018",
//       citations: "35",
//       link: "https://doi.org/10.1016/j.jfluidstructs.2018.02.001"
//     },
//     {
//       title: "Flow past a circular cylinder with a permeable wake splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Experiments in Fluids",
//       year: "2016",
//       citations: "31",
//       link: "https://doi.org/10.1007/s00348-016-2217-6"
//     },
//     {
//       title: "Flow past a rotating circular cylinder at low Reynolds numbers",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids Engineering",
//       year: "2015",
//       citations: "24",
//       link: "https://doi.org/10.1115/1.4030423"
//     },
//     {
//       title: "Experimental investigation of flow past a circular cylinder with a splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Journal of Fluids and Structures",
//       year: "2014",
//       citations: "19",
//       link: "https://doi.org/10.1016/j.jfluidstructs.2014.04.001"
//     },
//     {
//       title: "Numerical simulation of flow past a circular cylinder with a splitter plate",
//       authors: "Sarkar, PP, Muralidhar, K, Biswas, G",
//       journal: "Computers & Fluids",
//       year: "2013",
//       citations: "17",
//       link: "https://doi.org/10.1016/j.compfluid.2013.01.003"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Journal Publications</h1>
        
//           <Link
//             href="/publications"
//             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Back to Publications
//           </Link>
//         </div>
        
//         <div className="bg-white shadow rounded-lg p-6">
          
//           <div className="space-y-6">
//             {publications.map((pub, index) => (
//               <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
//                 <h3 className="text-xl font-medium text-gray-900 mb-1">{pub.title}</h3>
//                 <p className="text-gray-600 mb-2">{pub.authors}</p>
//                 <p className="text-gray-700 mb-2">
//                   <span className="font-medium">{pub.journal}</span>, {pub.year}
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   <a 
//                     href={pub.link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     View Article
//                   </a>
//                   <span className="text-gray-500 text-sm">
//                     {pub.citations} citations
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 p-4 bg-blue-50 rounded-lg">
//             <h3 className="text-lg font-medium text-blue-800 mb-2">Publication Summary</h3>
//             <p className="text-blue-700">
//               This collection represents Prof. Sarkar's work in fluid dynamics, particularly focusing on:
//             </p>
//             <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
//               <li>Vortex-induced vibrations</li>
//               <li>Flow past circular and square cylinders</li>
//               <li>Experimental and numerical investigations</li>
//               <li>Wake control using splitter plates</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JournalsPage;



// app/department/publications/journals/page.tsx
// app/department/publications/journals/page.tsx
import Link from 'next/link';

const JournalsPage = () => {
  // Publications data with only required fields
  const publications = [
    {
      title: "Scale effects on open water characteristics of a controllable pitch propeller working within different duct designs",
      authors: "Anirban Bhattacharyya, Vladimir Krasilnikov, Sverre Steen",
      year: "2016",
      journal: "Ocean Engineering",
      description: "A detailed investigation of the scale effects on the open water characteristics of a moderately skewed 4-bladed controllable pitch propeller is presented in this paper. The influence of duct design on the flow characteristics, as well as the blade and duct forces in model and full scale conditions, has been studied using three ducts of different design- two standard ducts, Duct 19A and Duct 37, and an innovative duct concept InnoDuct10, which is proposed by Rolls-Royce and belongs to the group of so-called high-efficiency ducts. The scale effects have been estimated with the help of CFD calculations performed using the RANSE solver of STAR-CCM+ in both model and full-scale conditions. On the experimental side, open water tests were carried out to compare the force measurements with calculations in model scale, and paint flow tests were performed to visualize the flow patterns over propeller blades and duct at …",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801815006782"
    },
    {
      title: "A methodology for the design of marine tandem propellers",
      authors: "Kiran George Varghese, Anirban Bhattacharyya",
      year: "2025/3/30",
      journal: "Ocean Engineering",
      description: "A framework for designing a marine tandem propeller unit consisting of two coaxial screw propellers is developed, where the aft propeller works in the wake of the forward propeller. The tandem propeller configuration distributes the total thrust between the two propellers, thus creating an advantage in hydrodynamic performance for restricted diameter/shallow draft conditions, which has applications for inland vessels. In the developed design approach, the geometric parameters of the individual propellers are tuned to obtain optimum circulation distribution by using the vortex lattice lifting-line method (VLLM) and lifting-surface corrections. The design of the aft propeller in tandem configuration is critical due to the higher induced hydrodynamic inflow angle, and different design strategies based on equal thrust, equal torque, and equal efficiency have been investigated. For moderately loaded conditions, the aft …",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801825000538"
    },
    {
        title: "Supplementing Remote Sensing of Ice: Deep Learning-Based Image Segmentation System for Automatic Detection and Localization of Sea-ice Formations From Close-Range Optical Images",
  
        authors: "Nabil Panchi, Ekaterina Kim, Anirban Bhattacharyya",
        year: "2021/5/28",
        journal: "IEEE Sensors Journal",
        description: "This paper presents a three-stage approach for the automated analysis of close-range optical images containing ice objects. The proposed system is based on an ensemble of deep learning models and conditional random field postprocessing. The following surface ice formations were considered: Icebergs, Deformed ice, Level ice, Broken ice, Ice floes, Floebergs, Floebits, Pancake ice, and Brash ice. Additionally, five non-surface ice categories were considered: Sky, Open water, Shore, Underwater ice, and Melt ponds. To find input parameters for the approach, the performance of 12 different neural network architectures was explored and evaluated using a 5-fold cross-validation scheme. The best performance was achieved using an ensemble of models having pyramid pooling layers (PSPNet, PSPDenseNet, DeepLabV3+, and UPerNet) and convolutional conditional random field postprocessing with a mean ...",
        link: "https://ieeexplore.ieee.org/abstract/document/9443178"
      },
    {
      title: "High-intensity air-explosion-induced shock loading of structures: Consideration of a real gas in modelling a nonlinear compressible medium",
      authors: "Ritwik Ghoshal, Nilanjan Mitra",
      year: "April 2015",
      journal: "Proceedings of the Royal Society A",
      description: "The existing practice of designing air-blast-resistant structures relies on the ideal gas model. But this model predicts the maximum value of the reflection coefficient (ratio of the reflected to the incident pressure) to be 8, whereas it can go up to 20 or more as reported in the literature. To address this discrepancy, air medium is modelled as a real gas instead of an ideal gas, where the effect of intermolecular forces, vibration, dissociation, electronic excitation and ionization are included. Ranges of peak over-pressure are identified where the ideal gas assumption cannot be used. Differences in impulse transmitted to the free-standing plates of different mass owing to relaxing of the ideal gas assumption and consideration of the real gas model are evaluated. Impulse transmitted to the structures for constant and variable back pressure (VBP) is also compared considering the real gas model. The result shows that for high-intensity shock, the ideal gas model under-predicts impulse transmitted to heavy plates but over-predicts the same for light-weight plates. Impulse transmitted to light-weight plates is also overestimated if VBP is neglected. The implications of this research are substantial for designing high-intensity air-blast mitigating structures, which if not considered properly, may lead to compromise in structural performance.",
      link: "https://www.researchgate.net/publication/276280413_High-intensity_air-explosion-induced_shock_loading_of_structures_Consideration_of_a_real_gas_in_modelling_a_nonlinear_compressible_medium"
    },
    {
        title: "A Variational Projection Scheme for Nonmatching Surface-to-Line Coupling between 3D Flexible Multibody System and Incompressible Turbulent Flow",
        authors: "Pardha Saradhi, Ritwik Ghoshal, Vaibhav Joshi, R K Jaiman",
        year: "November 2017",
        journal: "Computers & Fluids",
        description: "This paper is concerned with the partitioned iterative formulation to simulate the fluid-structure interaction of a nonlinear multibody system in an incompressible turbulent flow. The proposed formulation relies on a three-dimensional (3D) incompressible turbulent flow solver, a nonlinear monolithic elastic structural solver for constrained flexible multibody system and the nonlinear iterative force correction scheme for coupling of the turbulent fluid-flexible multibody system with nonmatching interface meshes. While the fluid equations are discretized using a stabilized Petrov-Galerkin formulation in space and the generalized-alpha updates in time, the multibody system utilizes a discontinuous space-time Galerkin finite element method. We address two key challenges in the present formulation. Firstly, the coupling of the incompressible turbulent flow with a system of nonlinear elastic bodies described in a co-rotated frame. Secondly, the projection of the tractions and displacements across the nonmatching 3D fluid surface elements and the one-dimensional line elements for the flexible multibody system in a conservative manner. Through the nonlinear iterative correction and the conservative projection, the developed fluid-flexible multibody interaction solver is stable for problems involving strong inertial effects between the fluid-flexible multibody system and the coupled interactions among each multibody component. The accuracy of the proposed coupled finite element framework is validated against the available experimental data for a long flexible cylinder undergoing vortex-induced vibration in a uniform current flow condition. Finally, a practical application of the proposed framework is demonstrated by simulating the flow-induced vibration of a realistic offshore floating platform connected to a long riser and an elastic mooring system.",
        link: "https://www.researchgate.net/publication/320890973_A_Variational_Projection_Scheme_for_Nonmatching_Surface-to-Line_Coupling_between_3D_Flexible_Multibody_System_and_Incompressible_Turbulent_Flow"
      },
      {
        title: "A new partitioned staggered scheme for flexible multibody interactions with strong inertial effects",
        authors: "A. Yenduri, Ritwik Ghoshal, R.K. Jaiman",
        year: "November 2016",
        journal: "Journal of Ocean Engineering and Marine Energy",
        description: "In generic flexible multibody interaction problems, the differences in the mass, damping and stiffness of the bodies can be very large. Of particular interest is a small change in the higher mass structure which triggers relatively large inertial effects on the lower mass structure. In this work, a new partitioned staggered time integration scheme is developed and its applicability is extended to the problems involving low mass ratios in coupled multibody problems. The equation of motion of body with larger inertia is integrated by implicit Newmark method, whereas the smaller inertia is solved using a robust self-starting explicit integration procedure. The coupled formulation includes explicit correction terms that adjusts the amount of interfacial velocity, which plays a key role in the stability and accuracy of the simulations. A wide range of mass ( to ), damping and stiffness ( to ) ratios are chosen to assess the stability and accuracy characteristics of the proposed scheme. The closed-form expressions for the coupling parameter have been constructed for both matching and non-matching time stepping through the Godunov-Ryabenkii normal mode analysis. The stability of the proposed method is observed as a function of the relative properties and temporal discretisation of the coupled system. The time step of the heavier body significantly influences the stability more than the lighter body. To maintain the staggering error minimal, an optimal range of the coupling parameter is identified. The error computed with uniform variation in the time step revealed that the present method is more accurate than the existing methods. The partitioned method is an energy preserving integration method for the dynamic analysis of multibody systems. As a potential application of this scheme, flexible multibody problems in the field of offshore engineering, viz., wave energy converter and floater mooring systems are presented and validated with experimental measurements.",
        link: "https://www.researchgate.net/publication/309893516_A_new_partitioned_staggered_scheme_for_flexible_multibody_interactions_with_strong_inertial_effects"
      },
      {
        title: "Application of wave model for weather routing of ships in the North Indian Ocean",
        authors: "Chinmaya Prasad Padhy, Debabrata Sen, Prasad Kumar Bhaskaran",
        year: "2008/3",
        journal: "Natural Hazards",
        description: "Weather routing of ships is used to establish the shortest time route or the most economical route from a departure to arrival point by applying available information of the weather condition viz. wind, wave and current. Information on ship speed loss due to these effects is pre-computed using sea-keeping computing tools, which are then suitably employed in the optimum ship routing algorithm. This developed algorithm was investigated using the wave height information from GEOSAT altimeter records. Dijkstra&apos;s path optimization scheme, which employs optimal control theory and dynamic programming technique, is used to obtain reliable optimum route in a given random sea-state.",
        link: "https://link.springer.com/article/10.1007/s11069-007-9126-1"
      },
      {
        title: "Calculation of transverse hydrodynamic coefficients using computational fluid dynamic approach",
        authors: "Amit Tyagi, Debabrata Sen",
        year: "2006/4/1",
        journal: "Ocean Engineering",
        description: "Computational Fluid Dynamic (CFD) based on Reynolds Averaged Navier–Stokes equation is used for determining the transverse hydrodynamic damping force and moment coefficients that are needed in the maneuverability study of marine vehicles. Computations are performed for two geometrical shapes representing typical AUVs presently in use. Results are compared with available data on similar geometries and from some of the available semi-empirical relations. It is found that the CFD predictions compares reasonable well with these results. In particular, the CFD predictions of forces and moments are found to be nonlinear with respect to the transverse velocity, and therefore both linear and nonlinear coefficients can be derived. A discussion on the sources of the component forces reveal that the total force and moment variations should in fact be nonlinear.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801805001848"
      },
      {
        title: "Performance and validation of a coupled parallel ADCIRC–SWAN model for THANE cyclone in the Bay of Bengal",
        authors: "Prasad K Bhaskaran, Sashikant Nayak, Subba Reddy Bonthu, PLN Murty, Debabrata Sen",
        year: "2013/12",
        journal: "Environmental Fluid Mechanics",
        description: "An accurate prediction of near-shore sea-state is imperative during extreme events such as cyclones required in an operational centre. The mutual interaction between physical processes such as tides, waves and currents determine the physical environment for any coastal region, and hence the need of a parallelized coupled wave and hydrodynamic model. The present study is an application of various state-of-art models such as WRF, WAM, SWAN and ADCIRC used to couple and simulate a severe cyclonic storm Thane that developed in the Bay of Bengal during December 2011. The coupled model (ADCIRC–SWAN) was run in a parallel mode on a flexible unstructured mesh. Thane had its landfall on 30 December, 2011 between Cuddalore and Pondicherry where in-situ observations were available to validate model performance. Comprehensive experiment on the impact of meteorological forcing …",
        link: "https://link.springer.com/article/10.1007/s10652-013-9284-5"
      },
      {
        title: "A review on the hydrodynamic characteristics of autonomous underwater vehicles",
        authors: "Jyoti Prakash Panda, Arindam Mitra, Hari V Warrior",
        year: "2021/2",
        journal: "Proceedings of the Institution of Mechanical Engineers, Part M: Journal of Engineering for the Maritime Environment",
        description: "Autonomous underwater vehicles play an essential role in geophysical data collection, deep water mining, seafloor mapping, ocean exploration, and in many other related activities starting from military to scientific applications. A detailed understanding of hydrodynamic characteristics will lead to better design, better control, and optimal path planning of autonomous underwater vehicles in the deepest corner of oceans. This article will provide a detailed review of the hydrodynamic characteristics of autonomous underwater vehicles, starting from different experimental techniques used in the analysis of hydrodynamic parameters, methods used for fixing the autonomous underwater vehicles in towing tank, instruments used for measurement of the hydrodynamic parameters. Furthermore, numerical methods employed in performing computational analysis, hydrodynamics-based shape optimization, studies on drag …",
        link: "https://journals.sagepub.com/doi/abs/10.1177/1475090220936896"
      },
      {
        title: "Sea-breeze-initiated rainfall over the east coast of India during the Indian southwest monsoon",
        authors: "Matthew Simpson, Hari Warrior, Sethu Raman, PA Aswathanarayana, UC Mohanty, R Suresh",
        year: "2007/8",
        journal: "Natural Hazards",
        description: "Sea-breeze-initiated convection and precipitation have been investigated along the east coast of India during the Indian southwest monsoon season. Sea-breeze circulation was observed on approximately 70–80% of days during the summer months (June–August) along the Chennai coast. Average sea-breeze wind speeds are greater at rural locations than in the urban region of Chennai. Sea-breeze circulation was shown to be the dominant mechanism initiating rainfall during the Indian southwest monsoon season. Approximately 80% of the total rainfall observed during the southwest monsoon over Chennai is directly related to convection initiated by sea-breeze circulation.",
        link: "https://link.springer.com/article/10.1007/s11069-006-9081-2"
      },
      {
        title: "The hydrodynamic characteristics of Autonomous Underwater Vehicles in rotating flow fields",
        authors: "A Mitra, JP Panda, HV Warrior",
        year: "2024/8",
        journal: "Proceedings of the Institution of Mechanical Engineers, Part M: Journal of Engineering for the Maritime Environment",
        description: "In this article, the hydrodynamic characteristics of Autonomous Underwater Vehicles (AUVs) are investigated and analyzed under the influence of rotating flow fields, which were generated in a recirculating water tank via a rotating propeller. Initially, experiments were carried out to measure flow field variables and quantities of Interest across the AUV in the presence of the rotating propeller while varying the rotational speed and the extent of rotational flow strength. The flow field across the AUV was measured using an Acoustic Doppler Velocimeter (ADV). These measured turbulent flow statistics were used to validate the Reynolds Stress Model (RSM) based numerical predictions in a commercial CFD solver. After preliminary validation of the turbulent flow statistics with the numerical predictions, a series of numerical simulations were performed to investigate the effect of the rotational flow field of the propeller on the …",
        link: "https://journals.sagepub.com/doi/abs/10.1177/14750902231181843"
      },
      {
        title: "Non-linear energy harvesting from coupled impacting beams",
        authors: "K Vijayan, MI Friswell, H Haddad Khodaparast, S Adhikari",
        year: "2015/6/1",
        journal: "International Journal of Mechanical Sciences",
        description: "Energy harvesting has many potential applications for structures with broadband excitation, such as aircraft noise and low frequency vibrations from human motion. The advantage with a vibro-impacting system is the capability of converting low frequency response to high frequencies. A coupled beam system is base excited and the influence of different system parameters are studied. Exciting the system at a single resonant frequency highlights the influence of clearance and base excitation amplitude on the beam responses. The frequency sweep study shows the sensitivity of the power generated to the contact stiffness, damping and clearance between the beams. The power generated by the coupled system from the non-linear impact is sensitive to the thickness ratio of the beams and the clearance. The variation in thickness ratio alters the spacing of the natural frequencies of the system which causes modes to …",
        link: "https://www.sciencedirect.com/science/article/pii/S0020740315000776"
      },
      {
        title: "Shock amplification, curve veering and the role of damping",
        authors: "K Vijayan, J Woodhouse",
        year: "2014/2/28",
        journal: "Journal of Sound and Vibration",
        description: "The circumstances are investigated under which high peak acceleration can occur in the internal parts of a system when subjected to impulsive driving on the outside. Previous work using a coupled beam model has highlighted the importance of veering pairs of modes. Such a veering pair can be approximated by a lumped system with two degrees of freedom. The worst case of acceleration amplification is shown to occur when the two oscillators are tuned to the same frequency, and for this case closed-form expressions are derived to show the parameter dependence of the acceleration ratio on the mass ratio and coupling strength. Sensitivity analysis of the eigenvalues and eigenvectors indicates that mass ratio is the most sensitive parameter for altering the veering behaviour in an undamped system. Non-proportional damping is also shown to have a strong influence on the veering behaviour. The study gives …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0022460X13009103"
      },
      {
        title: "Welded joints stiffness and damping characterisation based on model updating and texture analysis",
        authors: "Kshitij Shrivastava, Kiran Vijayan, Saumya Gupta, Arjun Mahato, Shibayan Roy, Vikas Arora",
        year: "2024/11/1",
        journal: "Mechanical Systems and Signal Processing",
        description: "Welded structures are integral to complex bodies such as ships and offshore rigs. Welded joints are frequently used in connecting various plates and substructures, making their assessment pivotal. The numerical model used here consists of plates coupled using springs and dashpots. The coupling models the welded joint and exemplifies the uncertainties in the welding process. The joint identification algorithm systematically defines the coupling in two steps: first, by updating the model for spring stiffness and later, by identifying the dashpot coefficients. The dynamic characteristic is determined using a frequency response function (FRF). After model updating and damping identification, a comparison between the updated FRF and that obtained from the experimental modal test is carried out to ascertain the efficiency of the algorithm. Further, the test structure is subjected to experimental testing to correlate the …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S088832702400582X"
      },
      {
        title: "Study of the motions of fishing vessels by a time domain panel method",
        authors: "R Datta, JM Rodrigues, C Guedes Soares",
        year: "2011/4/1",
        journal: "Ocean Engineering",
        description: "In this paper, a wide variety of computed motion results is presented for three existing fishing vessels. In order to do that, time domain computations of 3D ship motions are performed with a time domain Green's function. The computational method adopted is based on a previously developed one, whose numerical scheme here is subjected to modifications that increase its robustness and overall efficiency, so that it can be applied to calculate the motions of fishing vessels. The results are then compared with simulations using WAMIT for the zero speed case, and a strip theory method is used to determine the effect of forward speed. Results are presented for head seas, quartering head waves and following waves with three distinct Froude numbers.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801811000175"
      },
      {
        title: "Analysis of the hydroelastic effect on a container vessel using coupled BEM–FEM method in the time domain",
        authors: "R Datta, C Guedes Soares",
        year: "2020/4/20",
        journal: "Ships and Offshore Structures",
        description: "This paper investigates numerically the effect of flexibility for a container ship in calculation vertical bending moment and shear force etc. For this purpose, the hydrodynamic forces are determined using a lower order panel method based on 3D transient free surface Green&apos;s function. For the solution of the structural problem, 1D FEM is developed in the time domain. The Panel code and the FEM code are coupled in the time domain through the body boundary condition. The structural deformation and velocity at each section in each time step are calculated using the Newmark–Beta method. Structural deflection, vertical bending moment, shear force, dynamic pressure distribution along the hull for S175 Ship are computed for both rigid and flexible structure and compared to check the influence of the flexibility. From the results, it is seen that the structural flexibility plays a very important role for bending moment and …",
        link: "https://www.tandfonline.com/doi/abs/10.1080/17445302.2019.1625848"
      },
      {
        title: "Hydrodynamic response of a submerged elliptic disc to surface water waves",
        authors: "Ajijul Hoque, Leandro Farina, Ranadev Datta, R Gayen",
        year: "2025/1/1",
        journal: "Applied Ocean Research",
        description: "The impact of an elliptic disc submerged in water of infinite depth on radiation and scattering phenomena is analyzed employing linear water wave theory. The problem is tackled by reducing it into two-dimensional hypersingular integral equations over the surface of the disc. Utilizing a spectral method, where the hypersingularity is evaluated analytically, we obtain numerical solutions for the integral equations. This study presents numerical findings concerning various hydrodynamic parameters relevant to disc scattering and radiation. Initially it compares numerical outcomes with those of a circular disc, before conducting a comprehensive parametric investigation for the elliptic disc. The primary focus is on investigating how the submerged depth and the geometry of the disc impact physical quantities such as added mass, damping coefficient, surface elevation, differential cross-section, and exciting forces. The …",
        link: "https://www.sciencedirect.com/science/article/pii/S0141118724004486"
      },
      {
        title: "Manoeuvring characteristics of twin-rudder systems: rudder-hull interaction effect on the manoeuvrability of twin-rudder ships",
        authors: "Sahbi Khanfir, Kazuhiko Hasegawa, Vishwanath Nagarajan, Kouichi Shouji, Seung Keon Lee",
        year: "2011/12",
        journal: "Journal of marine science and technology",
        description: "With a recent increase in ship capacity and propulsion performance, a wide-beam ship fitted with a twin-rudder system has been adopted in many cases. However, to improve ship manoeuvring, it is still necessary to have a better understanding of rudder-hull interactions in twin-rudder ships. Captive model tests (oblique towing and circular motion test) as well as free-running tests with a single-propeller twin-rudder ship and a twin-propeller twin-rudder ship are carried out. The effect of drift angle on the rudder forces and some peculiar phenomena concerning rudder normal force for twin-rudder ships are evaluated. A method for estimating the hull-rudder interaction coefficients based on free-running experimental results is proposed.",
        link: "https://link.springer.com/article/10.1007/s00773-011-0140-3"
      },
      {
        title: "Mathematical model of single-propeller twin-rudder ship",
        authors: "Donghoon Kang, Vishwanath Nagarajan, Kazuhiko Hasegawa, Masaaki Sano",
        year: "2008/8",
        journal: "Journal of marine science and technology",
        description: "A mathematical model of a single-propeller twin-rudder ship has been developed from captive and free running model experiments. An open water rudder experiment was carried out to figure out the characteristics of the rudder. Captive experiments in a towing tank were carried out to figure out the performance of a single-propeller twin-rudder system on a large vessel. Interactions between the hull, propeller and twin rudders, including mutual interactions between the twin rudders, were expressed with several coefficients that were calculated from the experimental results at various ship speeds. In the analysis, the unique characteristics of a single-propeller twin-rudder ship, which affects rudder forces, were explained and formulated in the mathematical model. The captive model tests were conducted with zero ship&apos;s yaw rate, so the interaction coefficients, which are influenced by the yaw rate, are …",
        link: "https://link.springer.com/article/10.1007/s00773-008-0027-0"
      },
      {
        title: "Measurements of steady manoeuvring forces and moments over an axisymmetric body with appendages in a wind tunnel",
        authors: "Md Kareem Khan, Manu Korulla, Vishwanath Nagarajan, Om Prakash Sha",
        year: "2025/1/2",
        journal: "Ship Technology Research",
        description: "Steady manoeuvring forces and moments over a generic submarine hull form (SUBOFF) at various angles of incidence were investigated through scaled model tests in the Wind Tunnel Facility at the Naval Science and Technological Laboratory, India. Measurements were performed for a range of angles of incidence in angle of attack (±18°) and drift (±18°) including control surface deflections (±15°) on a 1.372 m model at Reynolds number 1.7 × 106. The present study at angles of incidence is to gather steady-state force, and moment data and validate such load measurements performed in a Wind Tunnel. The particulars of the SUBOFF model, experimental facility and measurement technique, test results for load measurements and estimated hydrodynamic coefficients are highlighted in the paper. The measurement data generated from the above studies will complement the current research on hydrodynamic …",
        link: "https://www.tandfonline.com/doi/abs/10.1080/09377255.2023.2296740"
      },
      {
        title: "Numerical simulation of 2D sloshing waves using SPH with diffusive terms",
        authors: "S De Chowdhury, SA Sannasiraj",
        year: "2014/8/1",
        journal: "Applied Ocean Research",
        description: "A numerical model based on the Smoothed Particle Hydrodynamics (SPH) method is developed which can appropriately simulate two-dimensional (2D) sloshing waves starting from smooth harmonic to violent breaking waves in a partially filled rectangular water container. This is achieved by employing a single set of numerical tools for solving the fluid flow problem under given boundary conditions. Recently, δ-SPH model has been proven to be superior to standard SPH for solving fluid flow problems covering a broad range of Reynolds (Re) numbers including violent fluid motion involving free surface fragmentation. Present work extends this further by applying δ-SPH to non-violent sloshing waves with specific focus in capturing higher order harmonics as generally predicted by an analytical or potential flow based model. An in depth analysis has been carried out to identify major factors affecting the present δ …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0141118714000534"
      },
      {
        title: "Steady and dynamic load measurements over a generic submarine hull form with various appendage configurations",
        authors: "Mohammed Kareem Khan, Vishwanath Nagarajan, Om Sha",
        year: "January 2025",
        journal: "Proceedings of the Institution of Mechanical Engineers Part M Journal of Engineering for the Maritime Environment",
        description: "Experimental studies for the steady and dynamic loads over a generic submarine hull form ( SUBOFF) with various appendage configurations in submerged motion was investigated through scaled model tests in the High Speed Towing Tank facility at Naval Science & Technological Laboratory, India. Steady load measurements were performed for a range of angles of incidence in angle of attack (± 35°) and drift (0° to 35°) including control surface deflections (± 20°). Measurements for dynamic loads were performed in both vertical and horizontal plane of motion for oscillating frequencies ranging from 0.21 to 0.55 Hz. The studies were carried out for four different configurations of SUBOFF comprising of bare hull, bare hull with sail, bare hull with control fins and fully appended hull. The aim of the present study for the load measurements is to gather steady and dynamic force/moment data, estimate hydrodynamic coefficients, validate and extend such data over a wide range of operation scenarios experienced by a submarine including high angle of incidence. The particulars of the SUBOFF model, experimental facility and measurement technique, test results for load measurements and estimated hydrodynamic coefficients are highlighted in the paper. The measurements data generated from the above studies will greatly complement the current research on hydrodynamic load characteristics for submerged bodies both computationally and experimentally.",
        link: "https://www.researchgate.net/publication/388187277_Steady_and_dynamic_load_measurements_over_a_generic_submarine_hull_form_with_various_appendage_configurations"
      },
      {
        title: "Scattering of surface waves by a semi-infinite floating elastic plate, DOI: 10.1063/5.004528",
        authors: "T Sahoo, Tsz Leung Yip, Allen T Chwang",
        year: "2001/11/1",
        journal: "Physics of Fluids",
        description: "A new inner product is developed based on the Fourier analysis to study the scattering of surface waves by a floating semi-infinite elastic plate in a two-dimensional water domain of finite depth. The eigenfunctions for the plate-covered region are orthogonal with respect to this new inner product. The problem is studied for various wave and geometrical conditions. Especially, the influence of different edge conditions on the hydrodynamic behavior is investigated and compared. The edge conditions considered in the present study involve (i) a free edge, (ii) a simply supported edge, and (iii) a built-in edge. The hydrodynamic performance of an elastic plate is characterized for various conditions in terms of wave reflection and transmission, plate deflection, and surface strain. It is observed that the hydrodynamic behavior depends on the wave conditions, the geometrical settings, and the edge conditions. The built-in …",
        link: "https://pubs.aip.org/aip/pof/article-abstract/13/11/3215/453588/Scattering-of-surface-waves-by-a-semi-infinite"
      },
      {
        title: "Trapping and generation of waves by vertical porous structures",
        authors: "T Sahoo, MM Lee, AT Chwang",
        year: "2000/10",
        journal: "Journal of engineering mechanics",
        description: "The trapping and generation of surface waves by submerged vertical permeable barriers or plates kept at one end of a semi-infinitely long channel of finite depth are investigated for various barrier and plate configurations. The various fixed barrier configurations are (1) a surface-piercing barrier; (2) a bottom-touching barrier; (3) a barrier with a gap; and (4) a fully submerged barrier. The different moving plate (or wavemaker) configurations are of types 1, 2, and 4, respectively. The boundary value problems are converted to dual/triple series relations by a suitable application of the eigenfunction expansion method and then the full solutions are obtained by the least-squares method. The variations of reflection coefficients are obtained and discussed for different values of the porous-effect parameter, the normalized distance between the barrier and the channel end-wall, and the length of submergence of barriers for all …",
        link: "https://ascelibrary.org/doi/abs/10.1061/(ASCE)0733-9399(2000)126:10(1074)"
      },
      {
        title: "Role of detuned frequency on Bragg scattering of surface gravity waves over an array of sinusoidal bottom patches: an analytic study, DOI:https://doi.org/10.1016/j.apor.2024.104228",
        authors: "Prakash Kar, Trilochan Sahoo, Dezhi Ning",
        year: "2024/12",
        journal: "Applied Ocean Research",
        description: "The study uses linearized water wave theory to examine the role of detuned frequency on Bragg scattering of surface gravity waves over an array of bottom-standing submerged sinusoidal patches. Explicit formulae for reflection and transmission coefficients are derived using the matrix transfer method in the case of an array of patches, with each patch having a finite number of ripples. Bragg resonance occurs in the case of more than two patches beyond a certain cutoff frequency corresponding to supercritical detuning, while a monotonic increasing trend is observed below the cut-off frequency which is referred to as subcritical detuning. The number of sub-harmonic peaks between two consecutive harmonic peaks is one less than the number of patches. As the number of patches grows, so does the number of zero reflections, while the number of sub-harmonic peaks is invariant with the number of ripples within a …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0141118724003493"
      },
      {
        title: "Optimization of honeycomb parameters of sandwich composites for energy and specific energy absorption using particle swarm optimization",
        authors: "Arun Rajput, Mohammed Rabius Sunny, Arunjyoti Sarkar",
        year: "July 2023",
        journal: "Marine Structures",
        description: "Sandwich composites are special class of materials because of peculiar properties such as lightweight , high damping and high energy absorbing capacity etc. These properties make them suitable for their use in the shipbuilding and aerospace industry. Honeycomb structures are commonly used core materials in the sandwich composites. The elastic properties of honeycomb are characterized by foil thickness (FT) and cell size (CS) therefore they have significant effect on the mechanical properties. In this manuscript, low velocity impact analysis has been carried out on couple of aluminium honeycomb sandwich composites using Charpy ASTM E− 23 machine and the energy absorbed by the sandwich specimens has been recorded. These experimental results have been validated through the numerical simulations carried out using commercially available software Abaqus. The results are found to be in good agreement. The parametric study also has been carried out to investigate the effect of foil thickness (FT), cell size (CS) and core height (CH) on specific energy absorption. Further, sufficient number of samples have been generated from latin hypercube samples (LHS) design and analyzed using Abaqus. Based on these results, polynomial equations have been generated in order to establish the relation between energy dependent variables (Energy absorption and Specific energy absorption(SEA)) and independent variables (Foil Thickness(FT) and Cell size(CS)). These polynomial equations have been used as fitness functions in optimization. The optimization process has been carried out by particle swarm optimization (PSO) matlab code for energy and specific energy absorption.",
        link: "https://www.researchgate.net/publication/372443588_Optimization_of_honeycomb_parameters_of_sandwich_composites_for_energy_and_specific_energy_absorption_using_particle_swarm_optimization"
      },
      {
        title: "Dynamic characteristics of an offshore wind turbine with breaking wave and wind load",
        authors: "Sung-Jin Choi, Arunjyoti Sarkar",
        year: "September 2014",
        journal: "International Journal of Computational Methods and Experimental Measurements 2(3):280-297",
        description: "In this paper, the response characteristics of an offshore wind turbine (OWT) structure under breaking wave forces and wind forces are studied. A 3D numerical model, based on solving the viscous and incompressible Navier-Stokes equations and the volume of fluid method (VOF), is employed to estimate the breaking wave forces on an OWT structure (6.0 m diameter mono-pile). The calculated wave forces are then applied with the wind forces on the OWT structure modeled in the computer program HAWC2 to understand the nature of its response. The effects from the aerodynamic damping and the foundation flexibility on the structure's response are also discussed.",
        link: "https://www.researchgate.net/publication/273481876_Dynamic_characteristics_of_an_offshore_wind_turbine_with_breaking_wave_and_wind_load"
      },
      {
        title: "A multi-objective optimization design framework integrated with CFD for the design of AUVs",
        authors: "KL Vasudev, R Sharma, SK Bhattacharyya",
        year: "2014/9/1",
        journal: "Methods in Oceanography",
        description: "This paper presents a multi-objective optimization design framework that is integrated with the Computer Aided Design (CAD) for geometric variation and Computational Fluid Dynamics (CFD) software for hydrodynamic computations for the design of Autonomous Underwater Vehicles (AUVs). The optimization model utilizes the ‘Non-dominated Sorting Genetic Algorithm (NSGA-II)’. In the present model hull geometric parameters (ie length of nose (L n), length of the parallel middle body (L m), length of the tail (L t), maximum diameter (D max), and two shape variation coefficients of nose (n n) and tail (n t)) are considered as the design parameters and minimization of viscous drag, and maximization of nominal wake fraction and total volume are considered as the objective functions for the integrated design approach. CFD software (Shipflow∗™) is used to evaluate the viscous drag and it is integrated with the CAD …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S2211122014000401"
      },
      {
        title: "Estimation of ship-induced sediment resuspension in intertidal waterways based on field measurements at the Hooghly River, India",
        authors: "Mainak Chakraborty, V Sriram, K Murali",
        year: "2023/10/1",
        journal: "Ocean Engineering",
        description: "The estimation of the sediment flux due to individual ship movement is necessary to identify adverse effects on the river banks in tidally-driven waterways. The separation of each wake event due to ship propagation from the tides is cumbersome. The present study focuses on the study of the ship waves on the sediment resuspension in intertidal waterways through a field survey. The time–frequency analysis proved to be an effective tool for separating the high-frequency ship waves from the tides. The ship-generated SSC was estimated by using the backscattering intensity from the acoustic sensors after proper calibration. The individual effect of each ship wake event on the sediment resuspension was estimated by filtering the ship-generated SSC from the total SSC by using a moving average filter. The overall contribution of the ship waves during the survey tenure was 24.66% with respect to the ambient SSC. The …",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0029801823016220"
      },

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Journal Publications</h1>
          <p className="text-lg text-gray-600">
            Peer-reviewed research articles from the department
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/publications"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Publications
          </Link>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <article key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                {/* Publication Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {pub.title}
                  </a>
                </h2>
                
                {/* Authors */}
                <p className="text-sm text-gray-600 mb-3">
                  {pub.authors}
                </p>
                
                {/* Journal and Year */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{pub.journal}</span>
                  <span className="mx-2">•</span>
                  <span>{pub.year}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-5">
                  {pub.description}
                </p>
                
                {/* Article Link */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Full Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalsPage;