'use client';

import { useState } from 'react';

const ReynoldsNumberPage = () => {
  const [velocity, setVelocity] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [kinematicViscosity, setKinematicViscosity] = useState<string>('1.139e-6'); // Default for water at 15°C
  const [reynoldsNumber, setReynoldsNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateReynoldsNumber = () => {
    // Reset previous results and errors
    setReynoldsNumber(null);
    setError(null);

    const V = parseFloat(velocity);
    const L = parseFloat(length);
    const v = parseFloat(kinematicViscosity);

    // Validate inputs
    if (!velocity || !length || !kinematicViscosity) {
      setError('All fields are required');
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
    if (isNaN(v)) {
      setError('Kinematic viscosity must be a valid number');
      return;
    }
    if (v <= 0) {
      setError('Kinematic viscosity must be greater than 0');
      return;
    }

    // Calculation
    const Re = (V * L) / v;
    setReynoldsNumber(Re);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Reynolds Number (Re) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              Re = (V × L) / ν
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">V = Velocity (m/s)</div>
              <div className="bg-gray-100 p-1 rounded">L = Length (m)</div>
              <div className="bg-gray-100 p-1 rounded">ν = Kinematic viscosity (m²/s)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          The Reynolds number predicts flow patterns in different fluid flow situations.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateReynoldsNumber(); }} className="space-y-4">
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
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Kinematic Viscosity (ν) (m²/s):
          </label>
          <input
            type="number"
            value={kinematicViscosity}
            onChange={(e) => setKinematicViscosity(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 1.139×10⁻⁶ m²/s (water at 15°C)</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate Reynolds Number
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {reynoldsNumber !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Reynolds Number:</span>
            <span className="text-2xl font-bold">{reynoldsNumber.toExponential(4)}</span>
          </div>
          
          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Flow Regime:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Re &lt; 2,300: Laminar flow</li>
              <li>2,300 ≤ Re ≤ 4,000: Transitional flow</li>
              <li>Re &gt; 4,000: Turbulent flow</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReynoldsNumberPage;