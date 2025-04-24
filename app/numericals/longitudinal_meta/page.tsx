'use client';

import { useState } from 'react';

const LongitudinalMetacentricRadiusPage = () => {
  const [length, setLength] = useState<string>('');
  const [draught, setDraught] = useState<string>('');
  const [longitudinalRadius, setLongitudinalRadius] = useState<number | null>(null);

  const calculateLongitudinalMetacentricRadius = () => {
    const L = parseFloat(length);
    const T = parseFloat(draught);

    if (!isNaN(L) && !isNaN(T) && L > 0 && T > 0) {
      const BM_L = (L ** 2) / (12 * T);
      setLongitudinalRadius(BM_L);
    } else {
      alert('Please enter valid positive numbers for length and draught.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Longitudinal Metacentric Radius (BM<sub>L</sub>) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Calculation Formula</h2>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-lg bg-gray-100 p-2 rounded">
              BM<sub>L</sub> = L² / (12 × T)
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-100 p-1 rounded">L = Length (m)</div>
              <div className="bg-gray-100 p-1 rounded">T = Draught (m)</div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          BM<sub>L</sub> represents the distance between the center of buoyancy and the longitudinal metacenter.
        </p>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateLongitudinalMetacentricRadius();
        }}
        className="space-y-4"
      >
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
            placeholder="Enter vessel length"
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
            placeholder="Enter vessel draught"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate BM<sub>L</sub>
        </button>
      </form>

      {/* Results Display */}
      {longitudinalRadius !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Longitudinal Metacentric Radius:</span>
            <span className="text-2xl font-bold">{longitudinalRadius.toFixed(4)} m</span>
          </div>
          <div className="mt-3 text-sm">
            <p className="font-medium">Significance:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Higher BM<sub>L</sub> indicates greater longitudinal stability</li>
              <li>Directly related to vessel length and inversely to draught</li>
              <li>Affects vessel&apos;s pitching characteristics</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LongitudinalMetacentricRadiusPage;