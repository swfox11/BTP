'use client';

import { useState } from 'react';

const TidalMixingPage = () => {
  const [velocity, setVelocity] = useState<string>('1.0');
  const [intensity, setIntensity] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateIntensity = () => {
    // Reset states
    setIntensity(null);
    setError(null);

    const u = parseFloat(velocity);

    // Validate inputs
    if (isNaN(u)) {
      setError('Velocity must be a valid number');
      return;
    }
    if (u <= 0) {
      setError('Velocity must be positive');
      return;
    }

    // Constants
    const ρ = 1025; // kg/m³ (seawater)
    const C_d = 0.003; // Drag coefficient

    // Calculation (∂E/∂t = ρ C_d u³)
    const result = ρ * C_d * Math.pow(u, 3);
    setIntensity(result);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Tidal Mixing Intensity</h1>
      
      {/* Formula Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2">
          ∂E/∂t = ρ C_d u³
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div className="bg-gray-100 p-2 rounded">ρ = 1025 kg/m³</div>
          <div className="bg-gray-100 p-2 rounded">C_d = 0.003</div>
          <div className="bg-gray-100 p-2 rounded">u = Tidal velocity (m/s)</div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateIntensity(); }} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Tidal Velocity (u) (m/s):
          </label>
          <input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            step="0.1"
            min="0.1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Intensity
        </button>
      </form>

       {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
      
      {/* Results */}
      {intensity !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Results</h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-medium">Mixing Intensity:</span>
            <span className="text-2xl font-bold">{intensity.toExponential(2)} W/m²</span>
          </div>
          
          <div className="mt-4 text-sm">
            <p className="font-medium">Typical Values:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>0.001-0.1 W/m²: Weak tidal currents</li>
              <li>0.1-10 W/m²: Strong tidal mixing</li>
              <li>∝ velocity³ → Small u changes have large effects</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TidalMixingPage;