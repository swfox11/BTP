'use client';

import { useState } from 'react';

const WindMixingPage = () => {
  const [windSpeed, setWindSpeed] = useState<string>('10');
  const [intensity, setIntensity] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateIntensity = () => {
    // Reset states
    setIntensity(null);
    setError(null);

    const w = parseFloat(windSpeed);

    // Validate inputs
    if (isNaN(w)) {
      setError('Wind speed must be a valid number');
      return;
    }
    if (w <= 0) {
      setError('Wind speed must be positive');
      return;
    }

    // Constants
    const ρ_a = 1.225; // kg/m³ (air)
    const K_d = 0.0015; // Drag coefficient

    // Calculation (∂E/∂t = ρ_a K_d w³)
    const result = ρ_a * K_d * Math.pow(w, 3);
    setIntensity(result);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Wind Mixing Intensity</h1>
      
      {/* Formula Section */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-2">
          ∂E/∂t = ρ_a K_d w³
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div className="bg-gray-100 p-2 rounded">ρ_a = 1.225 kg/m³</div>
          <div className="bg-gray-100 p-2 rounded">K_d = 0.0015</div>
          <div className="bg-gray-100 p-2 rounded">w = Wind speed (m/s)</div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateIntensity(); }} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Wind Speed (w) (m/s):
          </label>
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
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
            <p className="font-medium">Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>0.001-0.01 W/m²: Light winds (1-5 m/s)</li>
              <li>0.01-1 W/m²: Storm conditions (&gt;15 m/s)</li>
              <li>Wind mixing dominates in shallow estuaries</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindMixingPage;