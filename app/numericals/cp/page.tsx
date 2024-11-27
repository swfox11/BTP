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
      alert('Please provide valid inputs for either formula.');
      return;
    }

    setPrismaticCoefficient(cp);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Prismatic Coefficient (C<sub>p</sub>)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateCp();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="displacement" className="block font-semibold">
            Moulded Displacement Volume (∇) (m<sup>3</sup>):
          </label>
          <input
            type="number"
            id="displacement"
            value={displacement}
            onChange={(e) => setDisplacement(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter displacement volume"
          />
        </div>
        <div>
          <label htmlFor="midshipArea" className="block font-semibold">
            Midship-Section Area (A<sub>m</sub>) (m<sup>2</sup>):
          </label>
          <input
            type="number"
            id="midshipArea"
            value={midshipArea}
            onChange={(e) => setMidshipArea(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter midship-section area"
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
            placeholder="Enter length"
          />
        </div>
        <div>
          <label htmlFor="blockCoefficient" className="block font-semibold">
            Block Coefficient (C<sub>b</sub>):
          </label>
          <input
            type="number"
            id="blockCoefficient"
            value={blockCoefficient}
            onChange={(e) => setBlockCoefficient(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter block coefficient"
          />
        </div>
        <div>
          <label htmlFor="midshipCoefficient" className="block font-semibold">
            Midship Coefficient (C<sub>m</sub>):
          </label>
          <input
            type="number"
            id="midshipCoefficient"
            value={midshipCoefficient}
            onChange={(e) => setMidshipCoefficient(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter midship coefficient"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate C<sub>p</sub>
        </button>
      </form>

      {prismaticCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Prismatic Coefficient (C<sub>p</sub>): <strong>{prismaticCoefficient.toFixed(4)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CpPage;
