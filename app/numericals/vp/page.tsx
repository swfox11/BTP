'use client';

import { useState } from 'react';

const VerticalPrismaticCoefficientPage = () => {
  const [displacementVolume, setDisplacementVolume] = useState<string>('');
  const [waterplaneArea, setWaterplaneArea] = useState<string>('');
  const [draught, setDraught] = useState<string>('');
  const [verticalPrismaticCoefficient, setVerticalPrismaticCoefficient] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateVerticalPrismaticCoefficient = () => {
    // Reset previous results and errors
    setVerticalPrismaticCoefficient(null);
    setError(null);

    const volume = parseFloat(displacementVolume);
    const area = parseFloat(waterplaneArea);
    const T = parseFloat(draught);

    // Validate inputs
    if (!displacementVolume || !waterplaneArea || !draught) {
      setError('All fields are required');
      return;
    }
    if (isNaN(volume)) {
      setError('Displacement volume must be a valid number');
      return;
    }
    if (isNaN(area)) {
      setError('Waterplane area must be a valid number');
      return;
    }
    if (isNaN(T)) {
      setError('Draught must be a valid number');
      return;
    }
    if (volume <= 0) {
      setError('Displacement volume must be greater than 0');
      return;
    }
    if (area <= 0) {
      setError('Waterplane area must be greater than 0');
      return;
    }
    if (T <= 0) {
      setError('Draught must be greater than 0');
      return;
    }

    // Calculation
    const Cvp = volume / (area * T);
    setVerticalPrismaticCoefficient(Cvp);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Vertical Prismatic Coefficient (C<sub>VP</sub>) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              C<sub>VP</sub> = ∇ / (A<sub>W</sub> × T)
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">∇ = Volume (m³)</div>
              <div className="bg-gray-100 p-1 rounded">A<sub>W</sub> = Waterplane area (m²)</div>
              <div className="bg-gray-100 p-1 rounded">T = Draught (m)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          The vertical prismatic coefficient indicates the distribution of buoyancy along the vertical axis.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateVerticalPrismaticCoefficient();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="displacementVolume" className="block font-medium text-gray-700 mb-1">
            Displacement Volume (∇) (m³):
          </label>
          <input
            type="number"
            id="displacementVolume"
            value={displacementVolume}
            onChange={(e) => setDisplacementVolume(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="waterplaneArea" className="block font-medium text-gray-700 mb-1">
            Waterplane Area (A<sub>W</sub>) (m²):
          </label>
          <input
            type="number"
            id="waterplaneArea"
            value={waterplaneArea}
            onChange={(e) => setWaterplaneArea(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="draught" className="block font-medium text-gray-700 mb-1">
            Draught (T) (m):
          </label>
          <input
            type="number"
            id="draught"
            value={draught}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate C<sub>VP</sub>
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {verticalPrismaticCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Vertical Prismatic Coefficient:</span>
            <span className="text-2xl font-bold">{verticalPrismaticCoefficient.toFixed(4)}</span>
          </div>
          
          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>C<sub>VP</sub> ≈ 0.55: Typical for fine-form vessels</li>
              <li>C<sub>VP</sub> ≈ 0.70: Typical for full-form vessels</li>
              <li>C<sub>VP</sub> &gt; 0.80: Indicates very full underwater form</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalPrismaticCoefficientPage;