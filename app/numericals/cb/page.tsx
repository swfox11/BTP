'use client';

import { useState } from 'react';

const CbPage = () => {
  const [displacement, setDisplacement] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [breadth, setBreadth] = useState<string>('');
  const [draft, setDraft] = useState<string>('');
  const [blockCoefficient, setBlockCoefficient] = useState<number | null>(null);

  const calculateCb = () => {
    const disp = parseFloat(displacement);
    const len = parseFloat(length);
    const brd = parseFloat(breadth);
    const drf = parseFloat(draft);

    if (isNaN(disp) || isNaN(len) || isNaN(brd) || isNaN(drf) || len <= 0 || brd <= 0 || drf <= 0) {
      alert('Please enter valid positive numbers for all inputs.');
      return;
    }

    const cb = disp / (len * brd * drf);
    setBlockCoefficient(cb);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Block Coefficient (C<sub>b</sub>)</h1>
      
      {/* Formula Display */}
      <div className="mb-4 p-3 bg-gray-100 rounded">
        <p className="font-mono text-center">
          C<sub>b</sub> = ∇ / (L × B × T)
        </p>
        <p className="text-sm mt-1 text-center">
          Where: ∇ = Displacement (m³), L = Length (m), B = Breadth (m), T = Draft (m)
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateCb();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="displacement" className="block font-semibold">
            Displacement (∇) (m³):
          </label>
          <input
            type="number"
            id="displacement"
            value={displacement}
            onChange={(e) => setDisplacement(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter displacement in m³"
            required
          />
        </div>
        <div>
          <label htmlFor="length" className="block font-semibold">
            Length (L) (m):
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter length in meters"
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
            placeholder="Enter breadth in meters"
            required
          />
        </div>
        <div>
          <label htmlFor="draft" className="block font-semibold">
            Draft (T) (m):
          </label>
          <input
            type="number"
            id="draft"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter draft in meters"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate C<sub>b</sub>
        </button>
      </form>

      {blockCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Block Coefficient (C<sub>b</sub>): <strong>{blockCoefficient.toFixed(4)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CbPage;