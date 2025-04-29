'use client';

import { useState } from 'react';

const MixingEnergyPage = () => {
  const [densityDiff, setDensityDiff] = useState<string>('10');
  const [totalDepth, setTotalDepth] = useState<string>('10');
  const [upperLayerThickness, setUpperLayerThickness] = useState<string>('1');
  const [energy, setEnergy] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateEnergy = () => {
    // Reset states
    setEnergy(null);
    setError(null);

    const Δρ = parseFloat(densityDiff);
    const h = parseFloat(totalDepth);
    const Δh = parseFloat(upperLayerThickness);

    // Validate inputs
    if (isNaN(Δρ)) {
      setError('Density difference must be a valid number');
      return;
    }
    if (isNaN(h) || h <= 0) {
      setError('Total depth must be positive');
      return;
    }
    if (isNaN(Δh) || Δh <= 0 || Δh > h) {
      setError('Upper layer thickness must be positive and ≤ total depth');
      return;
    }

    // Calculation (E = 0.5 * Δρ * g * h * Δh)
    const g = 9.81;
    const E = 0.5 * Δρ * g * h * Δh;
    setEnergy(E);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Mixing Energy Calculator</h1>
      
      {/* Formula Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2">
          E = ½ Δρ g h Δh
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div className="bg-gray-100 p-2 rounded">Δρ = Density difference (kg/m³)</div>
          <div className="bg-gray-100 p-2 rounded">g = 9.81 m/s²</div>
          <div className="bg-gray-100 p-2 rounded">h = Total depth (m)</div>
          <div className="bg-gray-100 p-2 rounded">Δh = Upper layer thickness (m)</div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateEnergy(); }} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Density Difference (Δρ) (kg/m³):
          </label>
          <input
            type="number"
            value={densityDiff}
            onChange={(e) => setDensityDiff(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Total Water Depth (h) (m):
          </label>
          <input
            type="number"
            value={totalDepth}
            onChange={(e) => setTotalDepth(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Upper Layer Thickness (Δh) (m):
          </label>
          <input
            type="number"
            value={upperLayerThickness}
            onChange={(e) => setUpperLayerThickness(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Energy
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results */}
      {energy !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Results</h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-medium">Mixing Energy:</span>
            <span className="text-2xl font-bold">{energy.toFixed(2)} J/m²</span>
          </div>
          
          <div className="mt-4 text-sm">
            <p className="font-medium">Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Typical values range from 10-1000 J/m² for estuaries</li>
              <li>Higher values indicate stronger stratification</li>
              <li>Energy must overcome buoyancy forces</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MixingEnergyPage;