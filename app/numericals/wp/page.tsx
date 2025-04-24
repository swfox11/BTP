'use client';

import { useState } from 'react';

const WaterplaneAreaCoefficientPage = () => {
  const [waterplaneArea, setWaterplaneArea] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [breadth, setBreadth] = useState<string>('');
  const [waterplaneAreaCoefficient, setWaterplaneAreaCoefficient] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateWaterplaneAreaCoefficient = () => {
    // Reset previous results and errors
    setWaterplaneAreaCoefficient(null);
    setError(null);

    const Aw = parseFloat(waterplaneArea);
    const L = parseFloat(length);
    const B = parseFloat(breadth);

    // Validate inputs
    if (!waterplaneArea || !length || !breadth) {
      setError('All fields are required');
      return;
    }
    if (isNaN(Aw)) {
      setError('Waterplane area must be a valid number');
      return;
    }
    if (isNaN(L)) {
      setError('Length must be a valid number');
      return;
    }
    if (isNaN(B)) {
      setError('Breadth must be a valid number');
      return;
    }
    if (Aw <= 0) {
      setError('Waterplane area must be greater than 0');
      return;
    }
    if (L <= 0) {
      setError('Length must be greater than 0');
      return;
    }
    if (B <= 0) {
      setError('Breadth must be greater than 0');
      return;
    }

    // Calculation
    const Cwl = Aw / (L * B);
    setWaterplaneAreaCoefficient(Cwl);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Waterplane Area Coefficient (C<sub>WL</sub>) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              C<sub>WL</sub> = A<sub>W</sub> / (L × B)
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">A<sub>W</sub> = Waterplane area (m²)</div>
              <div className="bg-gray-100 p-1 rounded">L = Length (m)</div>
              <div className="bg-gray-100 p-1 rounded">B = Breadth (m)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          The waterplane area coefficient indicates the fullness of the waterplane area.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateWaterplaneAreaCoefficient();
        }}
        className="space-y-4"
      >
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
          <label htmlFor="length" className="block font-medium text-gray-700 mb-1">
            Length (L) (m):
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="breadth" className="block font-medium text-gray-700 mb-1">
            Breadth (B) (m):
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate C<sub>WL</sub>
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {waterplaneAreaCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Waterplane Area Coefficient:</span>
            <span className="text-2xl font-bold">{waterplaneAreaCoefficient.toFixed(4)}</span>
          </div>
          
          {/* Interpretation */}
          <div className="mt-4 text-sm">
            <p className="font-medium">Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>C<sub>WL</sub> ≈ 0.70: Typical for fine-form vessels</li>
              <li>C<sub>WL</sub> ≈ 0.85: Typical for medium-form vessels</li>
              <li>C<sub>WL</sub> &gt; 0.90: Indicates very full waterplane form</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaterplaneAreaCoefficientPage;