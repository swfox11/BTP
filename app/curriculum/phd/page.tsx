'use client';

const researchAreas = [
  'AI, ML, Cognitive Science',
  'Automation and Robotics',
  'Coastal Engineering',
  'Coastal Hydrodynamics',
  'Computational Fluid Dynamics',
  'Engineering Mathematics and Computation',
  'Fluid Structure Interaction',
  'Green Water Loading, Slamming',
  'Hydrodynamics Stability',
  'Hydroelasticity',
  'Hydroelasticity of Floating Structures & Ships',
  'Linear and Nonlinear Wave propagation',
  'Linear water waves',
  'Low RPM current turbine',
  'Marine Acoustics',
  'Marine Design and Production',
  'Marine Hydrodynamics',
  'Marine operation for subsea installation',
  'Marine propulsion',
  'Marine Structural Engineering',
  'Mechanics of Composites',
  'Mechanics of Sediment Transport',
  'Noise and Vibration Control',
  'Nonlinear Dynamics',
  'Numerical Ship Hydeodynamics',
  'Ocean Modeling and Analysis',
  'Ocean Wave Climate Studies',
  'Offshore wind turbine',
  'Physical and Dynamical Oceanography',
  'Port & Harbour Engineering',
  'Seakeeping and Maneuvering',
  'Seakeeping of Offshore Structure & Ship',
  'Ship Hydrodynamics',
  'Ship Motion',
  'Subsea pipelines and risers',
  'Tide and Tidal Bore Analysis',
  'Turbulence Modeling in Oceanography',
  'Uncertainty quantification',
  'Vibration of marine structures',
  'Wave and Tidal Energy',
  'Wave blocking and triad resonance',
  'Wave energy',
  'Wave forces on marine structures',
  'Wave Hydrodynamics',
  'Waveguide Array',
  'Wind-Wave Modeling',
].sort();

const PhDResearchAreasPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-10 px-6">
      <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">PhD Research Areas</h1>
      
      <p className="mb-6 text-gray-100">
        The Department of Ocean Engineering and Naval Architecture offers a diverse range of research areas for doctoral studies, including both foundational and cutting-edge topics.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-disc pl-5 text-gray-100 ">
        {researchAreas.map((area, idx) => (
          <li key={idx} className="leading-snug hover:text-teal-400 hover:scale-105">{area}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhDResearchAreasPage;
