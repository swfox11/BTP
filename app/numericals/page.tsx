import Link from 'next/link';

const numericals = [
  { title: 'Block Coefficient (Cb)', path: '/numericals/cb' },
  { title: 'Midship Coefficient (Cm)', path: '/numericals/cm' },
  { title: 'Prismatic Coefficient (Cp)', path: '/numericals/cp' },
  { title: 'Admiralty Coefficient', path: '/numericals/admiralty' },
  { title: 'Waterplane Area Coefficient', path: '/numericals/wp' },
  { title: 'Vertical Prismatic Coefficient', path: '/numericals/vp' },
  { title: 'Transverse Metacentric Radius (BM) for Rectangular Barge', path: '/numericals/transverse_meta' },
  { title: 'Longitudinal Metacentric Radius (BML) for Rectangular Barge', path: '/numericals/longitudinal_meta' },
  { title: 'Initial Stability Calculation (GM) for Rectangular Barge', path: '/numericals/stability' },
  { title: 'Encounter Frequency (ωₑ) in Sea Keeping', path: '/numericals/encounterfrequency' },
  { title: 'Reynolds Number for Ships (Rn) ', path: '/numericals/reynolds' },
  { title: 'Froude Number for Ships (Fn) ', path: '/numericals/froude' },
  { title: 'Dispersion Relation Calculations ', path: '/numericals/dispersion' },
  { title: 'Circulation Period under Coriolis Force ', path: '/numericals/coriolis' },
  { title: 'Mixing Energy for two layered Fluid System', path: '/numericals/mixingenergy' },
  { title: 'Tidal Mixing Intensity in an Estuary', path: '/numericals/tidalmixingintensity' },
  { title: 'Wind Mixing Intensity in an Estuary', path: '/numericals/windmixingintensity' },
  { title: 'Stratification Parameter of an Estuary', path: '/numericals/stratificationparameter' },
];

const NumericalsPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-[#2a526c] drop-shadow-lg mb-12">
        Numerical Calculation Tools
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {numericals.map((numerical, index) => (
          <Link href={numerical.path} key={index}>
            <div className="cursor-pointer bg-[#f4f4f4] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border-l-4 border-[#48bf91]">
              <h3 className="text-xl font-semibold text-[#48bf91]">{numerical.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NumericalsPage;