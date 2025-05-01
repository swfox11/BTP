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
    <div className="min-h-screen bg-gray-800 text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold drop-shadow-lg text-center mb-8">
            PhD Research Areas
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Department of Ocean Engineering and Naval Architecture offers a diverse range of research areas for doctoral studies, including both foundational and cutting-edge topics in marine science and technology.
          </p>
        </div>

        <div className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-600/20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area, idx) => (
              <li 
                key={idx} 
                className="flex items-start py-2"
              >
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-100 hover:text-teal-300 transition-colors duration-200">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Explore these research areas with our world-class faculty and state-of-the-art facilities.</p>
        </div>
      </div>
    </div>
  );
};

export default PhDResearchAreasPage;