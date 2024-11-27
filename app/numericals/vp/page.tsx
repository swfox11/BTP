'use client';

import { useState } from 'react';

const VerticalPrismaticCoefficientPage = () => {
  const [displacementVolume, setDisplacementVolume] = useState<string>('');
  const [waterplaneArea, setWaterplaneArea] = useState<string>('');
  const [draught1, setDraught] = useState<string>('');
  const [verticalPrismaticCoefficient, setVerticalPrismaticCoefficient] = useState<number | null>(null);

  const calculateVerticalPrismaticCoefficient = () => {
    const volume = parseFloat(displacementVolume);
    const area = parseFloat(waterplaneArea);
    const draught = parseFloat(draught1);

    if (!isNaN(volume) && !isNaN(area) && !isNaN(draught) && volume > 0 && area > 0 && draught > 0) {
      const coefficient = volume / (area * draught);
      setVerticalPrismaticCoefficient(coefficient);
    } else {
      alert('Please enter valid positive numbers for displacement volume, waterplane area, and draught.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Vertical Prismatic Coefficient (C<sub>VP</sub>)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateVerticalPrismaticCoefficient();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="displacementVolume" className="block font-semibold">
            Displacement Volume (m³):
          </label>
          <input
            type="number"
            id="displacementVolume"
            value={displacementVolume}
            onChange={(e) => setDisplacementVolume(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter displacement volume in m³"
          />
        </div>
        <div>
          <label htmlFor="waterplaneArea" className="block font-semibold">
            Waterplane Area (A<sub>W</sub>) (m²):
          </label>
          <input
            type="number"
            id="waterplaneArea"
            value={waterplaneArea}
            onChange={(e) => setWaterplaneArea(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter waterplane area in m²"
          />
        </div>
        <div>
          <label htmlFor="draught" className="block font-semibold">
            Draught (T) (m):
          </label>
          <input
            type="number"
            id="draught"
            value={draught1}
            onChange={(e) => setDraught(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter draught in meters"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate Vertical Prismatic Coefficient
        </button>
      </form>

      {verticalPrismaticCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Vertical Prismatic Coefficient (C<sub>VP</sub>): <strong>{verticalPrismaticCoefficient.toFixed(4)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default VerticalPrismaticCoefficientPage;
