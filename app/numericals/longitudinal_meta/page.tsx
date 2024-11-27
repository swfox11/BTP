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
      <h1 className="text-2xl font-bold mb-4">Calculate Longitudinal Metacentric Radius (BM<sub>L</sub>)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateLongitudinalMetacentricRadius();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="length" className="block font-semibold">
            Length ( L ) (m):
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter length in meters"
          />
        </div>
        <div>
          <label htmlFor="draught" className="block font-semibold">
            Draught ( T ) (m):
          </label>
          <input
            type="number"
            id="draught"
            value={draught}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter draught in meters"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate
        </button>
      </form>

      {longitudinalRadius !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Longitudinal Metacentric Radius (BM<sub>L</sub>): <strong>{longitudinalRadius.toFixed(4)} m</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default LongitudinalMetacentricRadiusPage;
