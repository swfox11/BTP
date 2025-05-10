'use client';

import { useState } from 'react';

const CpPage = () => {
  const [displacement, setDisplacement] = useState<string>('');
  const [midshipArea, setMidshipArea] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [blockCoefficient, setBlockCoefficient] = useState<string>('');
  const [midshipCoefficient, setMidshipCoefficient] = useState<string>('');
  const [prismaticCoefficient, setPrismaticCoefficient] = useState<number | null>(null);

  const calculateCp = () => {
    const disp = parseFloat(displacement);
    const am = parseFloat(midshipArea);
    const len = parseFloat(length);
    const cb = parseFloat(blockCoefficient);
    const cm = parseFloat(midshipCoefficient);

    let cp = null;

    if (!isNaN(disp) && !isNaN(am) && !isNaN(len) && len > 0 && am > 0) {
      cp = disp / (am * len);
    } else if (!isNaN(cb) && !isNaN(cm) && cm > 0) {
      cp = cb / cm;
    } else {
      alert('Please provide valid inputs for either calculation method.');
      return;
    }

    setPrismaticCoefficient(cp);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Prismatic Coefficient (C<sub>p</sub>) Calculator</h1>
      
      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Calculation Methods</h2>
        <div className="space-y-3">
          <div>
            <p className="font-mono bg-gray-100 p-2 rounded">
              C<sub>p</sub> = ∇ / (A<sub>m</sub> × L)
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Where: ∇ = Displacement volume (m³), A<sub>m</sub> = Midship area (m²), L = Length (m)
            </p>
          </div>
          <div className="pt-2 border-t border-gray-200">
            <p className="font-mono bg-gray-100 p-2 rounded">
              C<sub>p</sub> = C<sub>b</sub> / C<sub>m</sub>
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Where: C<sub>b</sub> = Block coefficient, C<sub>m</sub> = Midship coefficient
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={(e) => { e.preventDefault(); calculateCp(); }} className="space-y-4">
        
        {/* First Calculation Method */}
        <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
          <h3 className="font-semibold text-blue-800 mb-3">Method 1: From Dimensions</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Displacement Volume (∇) (m³)
              </label>
              <input
                type="number"
                value={displacement}
                onChange={(e) => setDisplacement(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Midship Area (A<sub>m</sub>) (m²)
              </label>
              <input
                type="number"
                value={midshipArea}
                onChange={(e) => setMidshipArea(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Length (L) (m)
              </label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Second Calculation Method */}
        <div className="p-4 border border-green-200 rounded-lg bg-green-50">
          <h3 className="font-semibold text-green-800 mb-3">Method 2: From Coefficients</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Block Coefficient (C<sub>b</sub>)
              </label>
              <input
                type="number"
                value={blockCoefficient}
                onChange={(e) => setBlockCoefficient(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Midship Coefficient (C<sub>m</sub>)
              </label>
              <input
                type="number"
                value={midshipCoefficient}
                onChange={(e) => setMidshipCoefficient(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow"
        >
          Calculate C<sub>p</sub>
        </button>
      </form>

      {/* Results */}
      {prismaticCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">Result</h2>
          <div className="mt-2 flex items-baseline">
            <span className="text-lg font-medium mr-2">Prismatic Coefficient:</span>
            <span className="text-2xl font-bold">{prismaticCoefficient.toFixed(4)}</span>
          </div>
          <div className="mt-3 text-sm">
            <p className="font-medium">Interpretation:</p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>C<sub>p</sub> &lt; 0.55: Fine-form vessels (fast ships)</li>
              <li>0.55 ≤ C<sub>p</sub> ≤ 0.65: Medium-form vessels</li>
              <li>C<sub>p</sub> &gt; 0.65: Full-form vessels (slow ships)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CpPage;