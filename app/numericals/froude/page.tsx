'use client';

import { useState } from 'react';

const FroudeNumberPage = () => {
  const [velocity, setVelocity] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [froudeNumber, setFroudeNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateFroudeNumber = () => {
    // Reset previous results and errors
    setFroudeNumber(null);
    setError(null);

    const V = parseFloat(velocity);
    const L = parseFloat(length);
    const g = 9.81; // Acceleration due to gravity

    // Validate inputs
    if (!velocity || !length) {
      setError('Both fields are required');
      return;
    }
    if (isNaN(V)) {
      setError('Velocity must be a valid number');
      return;
    }
    if (isNaN(L)) {
      setError('Length must be a valid number');
      return;
    }
    if (L <= 0) {
      setError('Length must be greater than 0');
      return;
    }

    // Calculation
    const Fr = V / Math.sqrt(g * L);
    setFroudeNumber(Fr);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Froude Number (Fr) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              Fr = V / √(g × L)
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">V = Velocity (m/s)</div>
              <div className="bg-gray-100 p-1 rounded">g = 9.81 m/s²</div>
              <div className="bg-gray-100 p-1 rounded">L = Length (m)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          The Froude number characterizes wave-making resistance in naval architecture.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateFroudeNumber(); }} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Velocity (V) (m/s):
          </label>
          <input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Characteristic Length (L) (m):
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Froude Number
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {froudeNumber !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Froude Number:</span>
            <span className="text-2xl font-bold">{froudeNumber.toFixed(4)}</span>
          </div>
          
          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Ship Behavior:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Fr &lt; 0.25: Displacement mode (low speed)</li>
              <li>0.25 ≤ Fr ≤ 0.40: Semi-planing mode</li>
              <li>Fr &gt; 0.40: Planing mode (high speed)</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">Note: For ships, length typically refers to waterline length (LWL).</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FroudeNumberPage;