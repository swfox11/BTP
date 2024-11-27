'use client';

import { useState } from 'react';

const TransverseMetacentricRadiusPage = () => {
  const [breadth, setBreadth] = useState<string>('');
  const [draught, setDraught] = useState<string>('');
  const [transverseRadius, setTransverseRadius] = useState<number | null>(null);

  const calculateTransverseMetacentricRadius = () => {
    const B = parseFloat(breadth);
    const T = parseFloat(draught);

    if (!isNaN(B) && !isNaN(T) && B > 0 && T > 0) {
      const BM = (B ** 2) / (12 * T);
      setTransverseRadius(BM);
    } else {
      alert('Please enter valid positive numbers for breadth and draught.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Transverse Metacentric Radius (BM)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateTransverseMetacentricRadius();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="breadth" className="block font-semibold">
            Breadth ( B ) (m):
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter breadth in meters"
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

      {transverseRadius !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Transverse Metacentric Radius (BM): <strong>{transverseRadius.toFixed(4)} m</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default TransverseMetacentricRadiusPage;
