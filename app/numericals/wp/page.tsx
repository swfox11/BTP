'use client';

import { useState } from 'react';

const WaterplaneAreaCoefficientPage = () => {
  const [waterplaneArea, setWaterplaneArea] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [breadth, setBreadth] = useState<string>('');
  const [waterplaneAreaCoefficient, setWaterplaneAreaCoefficient] = useState<number | null>(null);

  const calculateWaterplaneAreaCoefficient = () => {
    const aw = parseFloat(waterplaneArea);
    const l = parseFloat(length);
    const b = parseFloat(breadth);

    if (!isNaN(aw) && !isNaN(l) && !isNaN(b) && aw > 0 && l > 0 && b > 0) {
      const coefficient = aw / (l * b);
      setWaterplaneAreaCoefficient(coefficient);
    } else {
      alert('Please enter valid positive numbers for waterplane area, length, and breadth.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculate Waterplane Area Coefficient (C<sub>WL</sub>)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateWaterplaneAreaCoefficient();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="waterplaneArea" className="block font-semibold">
            Waterplane Area (A<sub>w</sub>) (m²):
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
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Calculate Waterplane Area Coefficient
        </button>
      </form>

      {waterplaneAreaCoefficient !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold">Result:</h2>
          <p>
            Waterplane Area Coefficient (C<sub>WL</sub>): <strong>{waterplaneAreaCoefficient.toFixed(4)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default WaterplaneAreaCoefficientPage;
