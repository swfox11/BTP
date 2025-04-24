'use client';

import { useState } from 'react';

const CmPage = () => {
  const [midshipArea, setMidshipArea] = useState<string>('');
  const [breadth, setBreadth] = useState<string>('');
  const [draught, setDraught] = useState<string>('');
  const [midshipCoefficient, setMidshipCoefficient] = useState<number | null>(null);

  const calculateCm = () => {
    const am = parseFloat(midshipArea);
    const b = parseFloat(breadth);
    const t = parseFloat(draught);

    if (isNaN(am) || isNaN(b) || isNaN(t) || b <= 0 || t <= 0) {
      alert('Please enter valid positive numbers for all inputs.');
      return;
    }

    const cm = am / (b * t);
    setMidshipCoefficient(cm);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Midship Coefficient (C<sub>m</sub>)</h1>
      
      {/* Formula Display */}
      <div className="mb-4 p-3 bg-gray-100 rounded">
        <p className="font-mono text-center">
          C<sub>m</sub> = A<sub>m</sub> / (B × T)
        </p>
        <p className="text-sm mt-1 text-center">
          Where: A<sub>m</sub> = Midship-section area (m²), B = Breadth (m), T = Draught (m)
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateCm();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="midshipArea" className="block font-semibold">
            Midship-Section Area (A<sub>m</sub>) (m²):
          </label>
          <input
            type="number"
            id="midshipArea"
            value={midshipArea}
            onChange={(e) => setMidshipArea(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter midship-section area"
            required
          />
        </div>
        <div>
          <label htmlFor="breadth" className="block font-semibold">
            Breadth (B) (m):
          </label>
          <input
            type="number"
            id="breadth"
            value={breadth}
            onChange={(e) => setBreadth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter breadth"
            required
          />
        </div>
        <div>
          <label htmlFor="draught" className="block font-semibold">
            Draught (T) (m):
          </label>
          <input
            type="number"
            id="draught"
            value={draught}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter draught"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate C<sub>m</sub>
        </button>
      </form>

      {midshipCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Midship Coefficient (C<sub>m</sub>): <strong>{midshipCoefficient.toFixed(4)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CmPage;